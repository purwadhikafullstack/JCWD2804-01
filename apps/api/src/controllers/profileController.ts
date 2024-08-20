import { Request, Response } from 'express';
import { updateProfile } from '../services/profileService';

export const updateProfileController = async (req: Request, res: Response) => {
  const userId = req.user.id; // Assuming you have auth middleware that sets req.user
  const { lastname, phonenumber, address, gender } = req.body;

  try {
    const updatedUser = await updateProfile({
      userId,
      lastname,
      phonenumber,
      address,
      gender,
    });

    return res.json({ message: 'Profile updated successfully', user: updatedUser });
  } catch (error:any) {
    return res.status(500).json({ message: 'Failed to update profile', error: error.message });
  }
};
