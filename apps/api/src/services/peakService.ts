// src/services/peakSeasonRateService.ts
import { PrismaClient, PeakSeasonRate } from '@prisma/client';

const prisma = new PrismaClient();

// Function to create a new peak season rate
export const createPeakSeasonRate = async (
  roomId: number,
  peakRateData: Partial<PeakSeasonRate>
) => {
  if (!peakRateData.start_date || !peakRateData.end_date || peakRateData.rate_change === undefined) {
    throw new Error('start_date, end_date, and rate_change are required.');
  }

  return prisma.peakSeasonRate.create({
    data: {
      room_id: roomId,
      start_date: peakRateData.start_date instanceof Date ? peakRateData.start_date.toISOString() : peakRateData.start_date,
      end_date: peakRateData.end_date instanceof Date ? peakRateData.end_date.toISOString() : peakRateData.end_date,
      rate_change: peakRateData.rate_change,
    },
  });
};

// Function to update an existing peak season rate
export const updatePeakSeasonRate = async (
  roomId: number,
  peakRateId: number,
  peakRateData: Partial<PeakSeasonRate>
) => {
  if (!peakRateData.start_date || !peakRateData.end_date || peakRateData.rate_change === undefined) {
    throw new Error('start_date, end_date, and rate_change are required.');
  }

  return prisma.peakSeasonRate.update({
    where: { peak_rate_id: peakRateId },
    data: {
      room_id: roomId,
      start_date: peakRateData.start_date instanceof Date ? peakRateData.start_date.toISOString() : peakRateData.start_date,
      end_date: peakRateData.end_date instanceof Date ? peakRateData.end_date.toISOString() : peakRateData.end_date,
      rate_change: peakRateData.rate_change,
    },
  });
};

// Function to delete a peak season rate
export const deletePeakSeasonRate = async (peakRateId: number) => {
  return prisma.peakSeasonRate.delete({
    where: { peak_rate_id: peakRateId },
  });
};

// Function to get all peak season rates for a room
export const getPeakSeasonRates = async (roomId: number) => {
  return prisma.peakSeasonRate.findMany({
    where: { room_id: roomId },
  });
};
