// src/services/authService.ts

import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import { generateToken } from '../utils/jwt';
import { sendVerificationEmail } from '../services/emailService';

const prisma = new PrismaClient();

interface RegisterInput {
  firstname: string;
  lastname?: string;
  email: string;
  password: string;
  phonenumber?: string;  
  identitynumber?: string; 
}

interface LoginInput {
  email: string;
  password: string;
}

export const registerUser = async (input: RegisterInput) => {
  const {
    firstname,
    lastname = '',
    email,
    password,
    phonenumber = '',
    identitynumber = 0, 
  } = input;

 
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error('User already exists');
  }

  
  const hashedPassword = await bcrypt.hash(password, 10);


  const verificationToken = generateToken({ email }, '1h'); 

  
  const user = await prisma.user.create({
    data: {
      firstname,
      lastname,
      phonenumber,
      birth: '',  
      identitynumber: '',  
      address: '',  
      gender: '', 
      email,
      password: hashedPassword,
      role: 'USER',
      email_verified: false,
      verificationToken, 
      verificationTokenExpiry: new Date(Date.now() + 60 * 60 * 1000),
    },
  });

 
  await sendVerificationEmail(email, verificationToken);

  return user;
};

export const loginUser = async (input: LoginInput) => {
  const { email, password } = input;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error('Invalid credentials');
  }

  
  if (!user.email_verified) {
    throw new Error('User is not verified. Please verify your email.');
  }

  
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error('Invalid credentials');
  }

  const token = generateToken({ userId: user.user_id });

  return { user, token };
};
