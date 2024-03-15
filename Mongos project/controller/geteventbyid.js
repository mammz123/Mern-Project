
const Event = require("./Eventschema");

const getEventsByUserId = async (userId) => {
    try {
        const events = await Event.find({ userId });
        return events;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
};
module.exports = getEventsByUserId