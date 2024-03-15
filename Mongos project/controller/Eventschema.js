const mongoose = require("mongoose");

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const Eventschema = mongoose.Schema({
    YourEvent: {
        type: String,
        required: true,
    },
    YourLocationForEvent: {
        type: String,
        required: true,
    },
    EventDate: {
        type: Date,
        required: true,
    },
    StartTime: {
        type: Date,
        required: true,
    },
    EndTime: {
        type: Date,
        required: true,
    },
    ApproximateNumberOfAttendees: {
        type: Number,
        required: true,
    },
    EventSetup: {
        type: String,
        required: true,
        set: capitalizeFirstLetter,
    },
    ColorTheme: {
        type: String,
        required: true,
        set: capitalizeFirstLetter,
    },
    CateringServices: {
        type: String,
        required: true,
        set: capitalizeFirstLetter,
    },
    Name: {
        type: String,
        required: true,
    },
    Phone: {
        type: Number,
        required: true,
    },
    AlternatePhone: {
        type: Number,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },
    Place: {
        type: String,
        required: true,
    },
    PaymentMethod: {
        type: String,
        required: true,
    },
 
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

  
});

const Event = mongoose.model("Event", Eventschema);

module.exports = Event;
