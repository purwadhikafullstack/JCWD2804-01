// src/services/profileService.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface UpdateProfileInput {
  userId: number;
  lastname?: string;
  phonenumber?: string;
  address?: string;
  gender?: string;
}

export const updateProfile = async (input: UpdateProfileInput) => {
  const { userId, ...updateData } = input;

  try {
    const user = await prisma.user.update({
      where: { user_id: userId }, // Changed 'id' to 'user_id' to match your Prisma schema
      data: updateData,
    });

    return user;
  } catch (error: any) {
    throw new Error(`Failed to update profile: ${error.message}`);
  }
};
