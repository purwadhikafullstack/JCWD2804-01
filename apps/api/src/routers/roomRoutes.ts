
import express from 'express';
import * as roomController from '../controllers/roomController';

const router = express.Router();

router.post('/', roomController.createRoom);
router.put('/:id', roomController.updateRoom);
router.delete('/:id', roomController.deleteRoom);
router.get('/', roomController.getRooms);
router.get('/:id', roomController.getRoomById);

export default router;
