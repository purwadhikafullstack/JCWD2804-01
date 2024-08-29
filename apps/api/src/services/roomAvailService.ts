
import { PrismaClient, RoomAvailability } from '@prisma/client';

const prisma = new PrismaClient();

export const createRoomAvailability = async (
  roomId: number,
  availabilityData: Partial<RoomAvailability>
) => {
  
  if (!availabilityData.start_date || !availabilityData.end_date || availabilityData.is_available === undefined) {
    throw new Error('start_date, end_date, and is_available are required.');
  }

  return prisma.roomAvailability.create({
    data: {
      room_id: roomId,
      start_date: availabilityData.start_date instanceof Date ? availabilityData.start_date.toISOString() : availabilityData.start_date,
      end_date: availabilityData.end_date instanceof Date ? availabilityData.end_date.toISOString() : availabilityData.end_date,
      is_available: availabilityData.is_available,
    },
  });
};

export const updateRoomAvailability = async (
  roomId: number,
  availabilityId: number,
  availabilityData: Partial<RoomAvailability>
) => {
  // Ensure required fields are defined
  if (!availabilityData.start_date || !availabilityData.end_date || availabilityData.is_available === undefined) {
    throw new Error('start_date, end_date, and is_available are required.');
  }

  return prisma.roomAvailability.update({
    where: { availability_id: availabilityId },
    data: {
      room_id: roomId,
      start_date: availabilityData.start_date instanceof Date ? availabilityData.start_date.toISOString() : availabilityData.start_date,
      end_date: availabilityData.end_date instanceof Date ? availabilityData.end_date.toISOString() : availabilityData.end_date,
      is_available: availabilityData.is_available,
    },
  });
};

export const deleteRoomAvailability = async (availabilityId: number) => {
  return prisma.roomAvailability.delete({
    where: { availability_id: availabilityId },
  });
};

export const getRoomAvailabilities = async (roomId: number) => {
  return prisma.roomAvailability.findMany({
    where: { room_id: roomId },
  });
};
