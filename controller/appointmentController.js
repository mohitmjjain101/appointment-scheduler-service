import Appointment from "../model/Appointment.js";


const createAppointment = async (req, res) => {
    const { userId, email } = req?.user;
    const { title, description, dateTime, duration, location } = req.body;

    try {
        if (!title || !dateTime || !duration) {
            res.status(400).send({ message: "Title, Duration and duration can't be empty" })
        }

        const newAppointment = new Appointment({
            title,
            description,
            dateTime,
            duration,
            location,
            userId
        })

        const saveAppointment = await newAppointment.save();
        res.status(201).json(saveAppointment)
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: 'Failed to create Appointment' });
    }

}

const updateAppointment = async (req, res) => {
    const { id } = req?.params
    const { title, description, dateTime, duration, location } = req.body;
    try {
        const appointment = await Appointment.findOne({ _id: id, userId: req.user.userId });
        if (!appointment) {
            res.status(404).send({ message: "Appointment Not Found" })
        }

        appointment.title = title || appointment.title
        appointment.description = description || appointment.description
        appointment.dateTime = dateTime || appointment.dateTime
        appointment.duration = duration || appointment.duration
        appointment.location = location || appointment.location

        const updatedAppointment = await appointment.save();
        res.status(200).json(updatedAppointment);

    } catch (err) {
        res.status(500).json({ message: 'Error updating appointment.' });
    }
}

const deleteAppointment = async (req, res) => {
    const { id } = req?.params;
    try {
        const appointment = await Appointment.findOneAndDelete({ _id: id, userId: req.user.userId });
        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found or not authorized.' });
        }
        res.status(200).json({ message: 'Appointment deleted successfully.' });

    } catch (err) {
        res.status(500).json({ message: 'Failed to delete appointment.' });
    }
}

const getAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.find({ userId: req.user.userId }).sort({ dateTime: 1 });
        res.status(200).json(appointment)
    } catch (err) {
        res.status(500).json({ message: 'Server error while fetching appointments.' });
    }
}

export { createAppointment, getAppointment, updateAppointment, deleteAppointment }
