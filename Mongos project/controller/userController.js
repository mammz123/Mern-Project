// const User = require("./Userschema");

// // usercontroller.js
// const getUserBookingDetails = async (req, res) => {
//     try {
//         const userId = req.user._id; // Use the logged-in user's ID
//         const user = await User.findById(userId).populate('bookings');
//         if (!user) {
//             return res.status(404).json({ error: 'User not found' });
//         }
//         res.json(user.bookings);
//     } catch (error) {
//         console.error('Error fetching user details:', error);
//         res.status(500).json({ error: 'Internal Server Error', message: error.message });
//     }
// };

// module.exports = { getUserBookingDetails };
