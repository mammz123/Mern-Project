const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    Name: { type: String },
    Username: { type: String, unique: true },
    Email: { type: String, unique: true },
    Password: { type: String },
    AdhaarNumber: { type: String },
    PhoneNumber: { type: String },
    Place: { type: String },
    isAdmin: { type: Boolean, default: false },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true
    }
})

const User = mongoose.model("User", userSchema)

module.exports = User;
