import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/authService';

export const register = async (req: Request, res: Response) => {
  try {
    const user = await registerUser(req.body);
    return res.status(201).json({ message: 'User registered successfully', user });
  } catch (error : any) {
    return res.status(400).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { user, token } = await loginUser(req.body);
    return res.json({ message: 'Login successful', token });
  } catch (error : any) {
    return res.status(400).json({ message: error.message });
  }
};
