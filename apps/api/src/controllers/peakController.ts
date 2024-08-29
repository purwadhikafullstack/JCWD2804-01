// src/controllers/peakSeasonRateController.ts
import { Request, Response } from 'express';
import * as peakSeasonRateService from '../services/peakService';

// Create a new peak season rate
export const createPeakSeasonRate = async (req: Request, res: Response) => {
  try {
    const peakSeasonRate = await peakSeasonRateService.createPeakSeasonRate(
      Number(req.params.roomId),
      req.body
    );
    res.status(201).json(peakSeasonRate);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

// Update a peak season rate
export const updatePeakSeasonRate = async (req: Request, res: Response) => {
  try {
    const peakSeasonRate = await peakSeasonRateService.updatePeakSeasonRate(
      Number(req.params.roomId),
      Number(req.params.peakRateId),
      req.body
    );
    res.status(200).json(peakSeasonRate);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a peak season rate
export const deletePeakSeasonRate = async (req: Request, res: Response) => {
  try {
    await peakSeasonRateService.deletePeakSeasonRate(
      Number(req.params.peakRateId)
    );
    res.status(204).send();
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

// Get all peak season rates for a room
export const getPeakSeasonRates = async (req: Request, res: Response) => {
  try {
    const peakSeasonRates = await peakSeasonRateService.getPeakSeasonRates(
      Number(req.params.roomId)
    );
    res.status(200).json(peakSeasonRates);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};
