// // routes/bookings.js

// const express = require('express');
// const Event = require('../controller/Eventschema');
// const router = express.Router();

// router.get('/', async (req, res) => {
//   try {
//     const userId = req.user._id; // Assuming req.user contains the logged-in user's information
//     const bookings = await Event.find({ userId });
//     res.json(bookings);
//   } catch (error) {
//     console.error('Error fetching bookings:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// module.exports = router;
