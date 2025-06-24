import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import User from "../model/User.js";

export const loginUser = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ message: "Email and Password Required" })
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid Credentials" })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }

        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }

        )
        res.status(200).json({ token });

    } catch (err) {
        console.error('Login error:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
}

export const singUPUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and Password required" });
    }

    try {

        const existingUser = await User.findOne({ email });
        if (existingUser?.email !== undefined) {
            return res.status(409).json({ message: "User already exist" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({ email, password: hashedPassword });
        const savedUser = await newUser.save();
        const token = jwt.sign(
            { userId: savedUser._id, email: newUser.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(201).json({ token });

    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
}