const User = require('./Userschema');
const bcrypt = require('bcrypt');
const tokengenerate = require('./Tokengeneration');
const mongoose = require('mongoose');

const signup = async (req, res) => {
    const { Name, Username, Email, Password, AdhaarNumber, PhoneNumber, Place } = req.body;
    try {
        if (!Username || !Email) {
            return res.status(400).json({ error: "Username and Email are required" });
        }

        const existingUser = await User.findOne({ $or: [{ Username }, { Email }] });
        if (existingUser) {
            return res.status(400).json({ error: "Username or Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(Password, 10); 
        const userId = new mongoose.Types.ObjectId(); 
        const newUser = new User({ Name, Username, Email, Password: hashedPassword, AdhaarNumber, PhoneNumber, Place, userId });
        await newUser.save();

        const token = tokengenerate(newUser._id);

        return res.status(201).json({
            id: newUser._id,
            Name: newUser.Name,
            Username: newUser.Username,
            Email: newUser.Email,
            Token: token
        });
    } catch (error) {
        console.error('Error in signup:', error);
        return res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
}

module.exports = signup;
