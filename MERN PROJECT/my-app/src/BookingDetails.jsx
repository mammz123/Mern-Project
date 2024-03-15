import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './BookingDetails.css';

const BookingDetails = () => {
    const [bookingData, setBookingData] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/home');
    };

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('userId');

            if (!token || !userId) {
                setError('User not logged in');
                return;
            }

            try {
                const response = await axios.get(`http://localhost:3000/events/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setBookingData(response.data);
            } catch (error) {
                console.error('Error fetching booking data:', error);
                setError('Error fetching booking data. Please try again.');
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:3000/deletebooking/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setBookingData(bookingData.filter((event) => event._id !== id));
        } catch (error) {
            console.error('Error deleting event:', error);
            setError('Error deleting event. Please try again.');
        }
    };

    return (
        <div className="booking-container">
            <div className="booking-container2">
                <h1>Your Booked Events</h1>
                {error && <p className="error">{error}</p>}
                {bookingData.length === 0 && <p>No events booked.</p>}
                {bookingData.length > 0 && (
                    <table>
                        <tbody>
                            {bookingData.map((event) => (
                                <React.Fragment key={event._id}>
                                    <tr>
                                        <td><strong>Event:</strong></td>
                                        <td>{event.YourEvent}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Location:</strong></td>
                                        <td>{event.YourLocationForEvent}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Date:</strong></td>
                                        <td>{event.EventDate}</td>
                                    </tr>
                                    <tr>
                    <td><strong>Start Time:</strong></td>
                    <td>{new Date(event.StartTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                </tr>
                <tr>
                    <td><strong>End Time:</strong></td>
                    <td>{new Date(event.EndTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                </tr>
                                    <tr>
                                        <td><strong>Approximate Number of Attendees:</strong></td>
                                        <td>{event.ApproximateNumberOfAttendees}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Event Setup:</strong></td>
                                        <td>{event.EventSetup}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Color Theme:</strong></td>
                                        <td>{event.ColorTheme}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Catering Services:</strong></td>
                                        <td>{event.CateringServices}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Name:</strong></td>
                                        <td>{event.Name}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Phone:</strong></td>
                                        <td>{event.Phone}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Alternate Phone:</strong></td>
                                        <td>{event.AlternatePhone}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Email:</strong></td>
                                        <td>{event.Email}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Address:</strong></td>
                                        <td>{event.Address}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Place:</strong></td>
                                        <td>{event.Place}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Payment Method:</strong></td>
                                        <td>{event.PaymentMethod}</td>
                                    </tr>
                                    <tr>
                                        <td className="actions" colSpan="2">
                                            <button className="button"><Link style={{ textDecoration: "none", color: "white" }} to={`/edit/${event._id}`}>Edit Booking</Link></button>
                                            <button className="button" onClick={() => handleDelete(event._id)}>Cancel Booking</button>
                                        </td>
                                    </tr>
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                )}
                <button className="details-button" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default BookingDetails;
