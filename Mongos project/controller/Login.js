const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("./Userschema");

const login = async (req, res) => {
    const { Username, Password } = req.body;

    if (!Username || !Password) {
        return res.status(400).json({ error: "Username and Password are required" });
    }

    try {
        const user = await User.findOne({ Username });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const passwordMatch = await bcrypt.compare(Password, user.Password);
        if (!passwordMatch) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        const role = user.isAdmin ? 'admin' : 'user';
        const token = jwt.sign({ id: user._id, role }, process.env.JWT_SECRET, {
            expiresIn: '1d'
        });

        res.json({ token, role, userId: user._id });
    } catch (error) {
        console.error('Error in login:', error);
        res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
}

module.exports = login;
