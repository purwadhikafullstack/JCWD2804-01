// src/controllers/roomAvailabilityController.ts
import { Request, Response } from 'express';
import * as roomAvailabilityService from '../services/roomAvailService';

// Create a new room availability
export const createRoomAvailability = async (req: Request, res: Response) => {
  try {
    const roomAvailability = await roomAvailabilityService.createRoomAvailability(
      Number(req.params.roomId),
      req.body
    );
    res.status(201).json(roomAvailability);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

// Update room availability
export const updateRoomAvailability = async (req: Request, res: Response) => {
  try {
    const roomAvailability = await roomAvailabilityService.updateRoomAvailability(
      Number(req.params.roomId),
      Number(req.params.availabilityId),
      req.body
    );
    res.status(200).json(roomAvailability);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

// Delete room availability
export const deleteRoomAvailability = async (req: Request, res: Response) => {
  try {
    await roomAvailabilityService.deleteRoomAvailability(
      Number(req.params.availabilityId)
    );
    res.status(204).send();
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

// Get all availabilities for a room
export const getRoomAvailabilities = async (req: Request, res: Response) => {
  try {
    const availabilities = await roomAvailabilityService.getRoomAvailabilities(
      Number(req.params.roomId)
    );
    res.status(200).json(availabilities);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};
