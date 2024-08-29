// src/routes/peakSeasonRateRoutes.ts
import express from 'express';
import * as peakSeasonRateController from '../controllers/peakController';

const router = express.Router({ mergeParams: true });

router.post('/', peakSeasonRateController.createPeakSeasonRate);
router.put('/:peakRateId', peakSeasonRateController.updatePeakSeasonRate);
router.delete('/:peakRateId', peakSeasonRateController.deletePeakSeasonRate);
router.get('/', peakSeasonRateController.getPeakSeasonRates);

export default router;
