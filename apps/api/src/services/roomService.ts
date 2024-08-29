// src/services/roomService.ts
import { PrismaClient, Room } from '@prisma/client';

const prisma = new PrismaClient();

export const createRoom = async (roomData: Room) => {
  return prisma.room.create({
    data: roomData,
  });
};

export const updateRoom = async (roomId: number, roomData: Partial<Room>) => {
  return prisma.room.update({
    where: { room_id: roomId },
    data: roomData,
  });
};

export const deleteRoom = async (roomId: number) => {
  return prisma.room.delete({
    where: { room_id: roomId },
  });
};

export const getRooms = async () => {
  return prisma.room.findMany();
};

export const getRoomById = async (roomId: number) => {
  return prisma.room.findUnique({
    where: { room_id: roomId },
  });
};
