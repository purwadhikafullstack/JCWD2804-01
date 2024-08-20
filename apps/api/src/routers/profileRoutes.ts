import { Router } from 'express';
import { updateProfileController } from '../controllers/profileController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

// Apply the authMiddleware to protect the profile route
router.put('/profile', authMiddleware, updateProfileController);

export default router;
