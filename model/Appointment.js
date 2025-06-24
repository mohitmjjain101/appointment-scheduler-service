import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    title: String,
    description: String,
    dateTime: Date,
    duration: Number,
    location: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
})

export default mongoose.model('Appointment', appointmentSchema)