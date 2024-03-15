const express = require('express');
const router = express.Router();
const Createevent = require("../controller/Createevent");
const createuser3 = require('../controller/Tokengeneration');
const signup2 = require('../controller/Signuptoken');
const protect = require("../middleware/token");
const login = require('../controller/Login');
const updateevent = require('../controller/editbooking');
const deleteEvent = require('../controller/deletebooking');
const authenticateUser = require('../middleware/authenticateUser');
// const getEventsByUserId = require('../controller/geteventbyid');
const Event = require('../controller/Eventschema');
const geteventdetails = require('../controller/getevents');

const middleware = [protect];

router.get('/protected', authenticateUser, (req, res) => {
    res.json({ message: 'Access granted' });
});

router.post('/create', protect, async (req, res) => {
    try {
        console.log('Incoming JSON data:', req.body);
        const result = await Createevent(req.body, req.user.id);
        res.status(201).json(result);
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
});


router.route('/verify').get(middleware, createuser3);
router.route('/signup').post(signup2);

router.post('/login', login);

router.route("/editbooking/:id").put(updateevent);
router.route("/deletebooking/:id").delete(deleteEvent);

router.get('/events/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const events = await Event.find({ userId });
        res.json(events);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.route('/getevents').get(geteventdetails)






module.exports = router;