import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin1.css'; 
import { useNavigate } from 'react-router-dom';

const Admin1 = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/home');
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3000/getevents');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <h1 className='welcome-heading'>Welcome Admin!</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Location</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Number of Attendees</th>
              <th>Setup</th>
              <th>Color Theme</th>
              <th>Catering Services</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Alternate Phone</th>
              <th>Email</th>
              <th>Address</th>
              <th>Place</th>
              <th>Payment Method</th>
              <th>Payment Details</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event._id}>
                <td>{event.YourEvent}</td>
                <td>{event.YourLocationForEvent}</td>
                <td>{event.EventDate}</td>
                <td>{new Date(event.StartTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
          <td>{new Date(event.EndTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                <td>{event.ApproximateNumberOfAttendees}</td>
                <td>{event.EventSetup}</td>
                <td>{event.ColorTheme}</td>
                <td>{event.CateringServices}</td>
                <td>{event.Name}</td>
                <td>{event.Phone}</td>
                <td>{event.AlternatePhone}</td>
                <td>{event.Email}</td>
                <td>{event.Address}</td>
                <td>{event.Place}</td>
                <td>{event.PaymentMethod}</td>
                <td>{JSON.stringify(event.PaymentDetails)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className='logout0-button' onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Admin1;
