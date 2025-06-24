import express from 'express';
import { createAppointment, deleteAppointment, getAppointment, updateAppointment } from '../controller/appointmentController.js';
import authMiddleware from '../middleware/authMiddleware.js';
const router = express.Router();

router.get('/', authMiddleware, getAppointment)
router.post('/', authMiddleware, createAppointment);
router.post('/:id', authMiddleware, updateAppointment)
router.delete('/:id', authMiddleware, deleteAppointment)

export default router;