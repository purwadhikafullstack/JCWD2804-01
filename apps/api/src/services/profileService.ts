import prisma from '../prisma';

interface UpdateProfileInput {
  userId: number;
  lastname?: string;
  phonenumber?: number;
  address?: string;
  gender?: string;
}

export const updateProfile = async (input: UpdateProfileInput) => {
  const { userId, ...updateData } = input;

  const user = await prisma.user.update({
    where: { user_id: userId },
    data: updateData,
  });

  return user;
};
