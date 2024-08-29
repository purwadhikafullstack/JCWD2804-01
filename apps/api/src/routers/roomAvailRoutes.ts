// src/routes/roomAvailabilityRoutes.ts
import express from 'express';
import * as roomAvailabilityController from '../controllers/roomAvailController';

const router = express.Router({ mergeParams: true });

router.post('/', roomAvailabilityController.createRoomAvailability);
router.put('/:availabilityId', roomAvailabilityController.updateRoomAvailability);
router.delete('/:availabilityId', roomAvailabilityController.deleteRoomAvailability);
router.get('/', roomAvailabilityController.getRoomAvailabilities);

export default router;
