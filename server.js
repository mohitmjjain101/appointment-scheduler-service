import express from 'express';
import cors from 'cors';
import connectDB from './config/Db.js';
import dotenv from 'dotenv';
import authRouter from './routes/authRoute.js';
import appointmentRoutes from './routes/appointmentRoute.js'

dotenv.config();
connectDB();

const app = express();

app.use(cors())
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/appointments', appointmentRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})