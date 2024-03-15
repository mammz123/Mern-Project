const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('./Userschema');

const changeAdminCredentials = async (newUsername, newPassword) => {
    try {

        const admin = await User.findOne({ isAdmin: true });
        if (!admin) {
            console.log('Admin not found.');
            return;
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        admin.Username = newUsername;
        admin.Password = hashedPassword;

        admin.userId = admin.userId ? admin.userId : new mongoose.Types.ObjectId();

        await admin.save();

        console.log('Admin credentials updated successfully.');
    } catch (error) {
        console.error('Error changing admin credentials:', error);
    }
};

changeAdminCredentials('admin', '123456');
