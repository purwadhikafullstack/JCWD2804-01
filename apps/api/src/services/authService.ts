import bcrypt from 'bcryptjs';
import prisma from '../prisma';
import { generateToken } from '../utils/jwt';

interface RegisterInput {
  firstname: string;
  email: string;
  password: string;
}

interface LoginInput {
  email: string;
  password: string;
}

export const registerUser = async (input: RegisterInput) => {
  const { firstname, email, password } = input;

  
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error('User already exists');
  }

  
  const hashedPassword = await bcrypt.hash(password, 10);

  
  const user = await prisma.user.create({
    data: {
      firstname,
      lastname: '', 
      phonenumber: 0, 
      birth: '', 
      identitynumber: 0, 
      address: '', 
      gender: '', 
      email,
      password: hashedPassword,
      role: 'USER',
      email_verified: false,
    },
  });

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

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error('Invalid credentials');
  }

  
  const token = generateToken(user.user_id);

  return { user, token };
};
