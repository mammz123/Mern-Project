import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Edit1.css';

function Edit1() {
  const { id } = useParams();
  const [eventData, setEventData] = useState({
    YourEvent: '',
    YourLocationForEvent: '',
    EventDate: '',
    StartTime: '',
    EndTime: '',
    ApproximateNumberOfAttendees: '',
    EventSetup: '',
    ColorTheme: '',
    CateringServices: '',
    Name: '',
    Phone: '',
    AlternatePhone: '',
    Email: '',
    Address: '',
    Place: '',
    PaymentMethod: '',
    PaymentDetails: {
      upiId: '',
      upiPhoneNumber: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardHolderName: ''
    },
  });

  const [isUpdateSuccessful, setIsUpdateSuccessful] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/getevent/${id}`);
        setEventData(response.data);
      } catch (error) {
        console.error('Error fetching event:', error);
      }
    };

    fetchEvent();
  }, [id]);

  const handleChange = (e) => {
    if (e.target.name === 'PaymentMethod') {
      setEventData({
        ...eventData,
        PaymentMethod: e.target.value,
        PaymentDetails: {
          upiId: '',
          upiPhoneNumber: '',
          cardNumber: '',
          expiryDate: '',
          cvv: '',
          cardHolderName: ''
        }
      });
    } else if (e.target.name === 'PaymentDetails') {
      setEventData({
        ...eventData,
        PaymentDetails: {
          ...eventData.PaymentDetails,
          [e.target.dataset.name]: e.target.value
        }
      });
    } else {
      setEventData({ ...eventData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = [
      'YourEvent',
      'YourLocationForEvent',
      'EventDate',
      'StartTime',
      'EndTime',
      'ApproximateNumberOfAttendees',
      'EventSetup',
      'ColorTheme',
      'CateringServices',
      'Name',
      'Phone',
      'Email',
      'Address',
      'Place',
      'PaymentMethod',
    ];

    const emptyFields = requiredFields.filter(field => !eventData[field]);

    if (emptyFields.length > 0) {
      alert(`Please fill out all required fields: ${emptyFields.join(', ')}`);
      return;
    }

    try {
      await axios.put(`http://localhost:3000/editbooking/${id}`, eventData);
      console.log('Event updated successfully');
      setIsUpdateSuccessful(true); 
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  useEffect(() => {
    if (isUpdateSuccessful) {
      alert('Event updated successfully'); 
      setIsUpdateSuccessful(false); 
    }
  }, [isUpdateSuccessful]);


  return (

  <div className='editt'>

<h1 className="edit1-title">Edit Your Event</h1>

    <div className='bggs'>


    <div className="models">
      <form onSubmit={handleSubmit} className='foorms'>
      <h2>Event </h2>

        <div className="forms-row">
          <input type="text" name="YourEvent" value={eventData.YourEvent} onChange={handleChange} className="edit1-input" placeholder="Your Event" />
          <input type="text" name="YourLocationForEvent" value={eventData.YourLocationForEvent} onChange={handleChange} className="edit1-input" placeholder="Your Location For Event" />
          <input type="date" name="EventDate" value={eventData.EventDate} onChange={handleChange} className="edit1-input" />
        </div>
        <div className="forms-row">
          <input type="time" name="StartTime" value={eventData.StartTime} onChange={handleChange} className="edit1-input" />
          <input type="time" name="EndTime" value={eventData.EndTime} onChange={handleChange} className="edit1-input" />
          <input type="number" name="ApproximateNumberOfAttendees" value={eventData.ApproximateNumberOfAttendees} onChange={handleChange} className="edit1-input" placeholder="Approximate Number Of Attendees" />
        </div>
        <div className="forms-row">
          <input type="text" name="EventSetup" value={eventData.EventSetup} onChange={handleChange} className="edit1-input" placeholder="Event Setup" />
          <input type="text" name="ColorTheme" value={eventData.ColorTheme} onChange={handleChange} className="edit1-input" placeholder="Color Theme" />
          <input type="text" name="CateringServices" value={eventData.CateringServices} onChange={handleChange} className="edit1-input" placeholder="Catering Services" />
        </div>

        <h2>Contact Details</h2>

        <div className="forms-row">
          <input type="text" name="Name" value={eventData.Name} onChange={handleChange} className="edit1-input" placeholder="Name" />
          <input type="tel" name="Phone" value={eventData.Phone} onChange={handleChange} className="edit1-input" placeholder="Phone" />
          <input type="tel" name="AlternatePhone" value={eventData.AlternatePhone} onChange={handleChange} className="edit1-input" placeholder="Alternate Phone" />
        </div>
        <div className="forms-row">
          <input type="email" name="Email" value={eventData.Email} onChange={handleChange} className="edit1-input" placeholder="Email" />
          <input type="text" name="Address" value={eventData.Address} onChange={handleChange} className="edit1-input" placeholder="Address" />
          <input type="text" name="Place" value={eventData.Place} onChange={handleChange} className="edit1-input" placeholder="Place" />
        </div>
        <h2>Payment Method</h2>

        <div className="edit1-row">
          <select name="PaymentMethod" value={eventData.PaymentMethod} onChange={handleChange} className="edit1-input">
            <option value="">Select Payment Method</option>
            <option value="GPay">GPay</option>
            <option value="DebitCard">Debit Card</option>
            <option value="CreditCard">Credit Card</option>
            <option value="UPI">UPI</option>
          </select>
          {eventData.PaymentMethod && (
            <div>
              {eventData.PaymentMethod === 'GPay' && (
                <div>
                  <input type="text" name="PaymentDetails" data-name="upiId" value={eventData.PaymentDetails.upiId} onChange={handleChange} className="edit1-input" placeholder="UPI ID" />
                  <input type="tel" name="PaymentDetails" data-name="upiPhoneNumber" value={eventData.PaymentDetails.upiPhoneNumber} onChange={handleChange} className="edit1-input" placeholder="UPI Phone Number" />
                </div>
              )}
              {(eventData.PaymentMethod === 'DebitCard' || eventData.PaymentMethod === 'CreditCard') && (
                <div>
                  <input type="text" name="PaymentDetails" data-name="cardNumber" value={eventData.PaymentDetails.cardNumber} onChange={handleChange} className="edit1-input" placeholder="Card Number" />
                  <input type="text" name="PaymentDetails" data-name="expiryDate" value={eventData.PaymentDetails.expiryDate} onChange={handleChange} className="edit1-input" placeholder="Expiry Date" />
                  <input type="text" name="PaymentDetails" data-name="cvv" value={eventData.PaymentDetails.cvv} onChange={handleChange} className="edit1-input" placeholder="CVV" />
                  <input type="text" name="PaymentDetails" data-name="cardHolderName" value={eventData.PaymentDetails.cardHolderName} onChange={handleChange} className="edit1-input" placeholder="Card Holder Name" />
                </div>
              )}
            </div>
          )}
        </div>
        <button type="submit" className="eventbuttons">Update Event</button>
      </form>
    </div>
    </div>
    </div>

  );
}

export default Edit1;
