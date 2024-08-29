// src/controllers/roomController.ts
import { Request, Response } from 'express';
import * as roomService from '../services/roomService';

// Create a new room
export const createRoom = async (req: Request, res: Response) => {
  try {
    const room = await roomService.createRoom(req.body);
    res.status(201).json(room);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

// Update an existing room
export const updateRoom = async (req: Request, res: Response) => {
  try {
    const room = await roomService.updateRoom(Number(req.params.id), req.body);
    res.status(200).json(room);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a room
export const deleteRoom = async (req: Request, res: Response) => {
  try {
    await roomService.deleteRoom(Number(req.params.id));
    res.status(204).send();
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

// Get all rooms
export const getRooms = async (req: Request, res: Response) => {
  try {
    const rooms = await roomService.getRooms();
    res.status(200).json(rooms);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single room by ID
export const getRoomById = async (req: Request, res: Response) => {
  try {
    const room = await roomService.getRoomById(Number(req.params.id));
    res.status(200).json(room);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};
