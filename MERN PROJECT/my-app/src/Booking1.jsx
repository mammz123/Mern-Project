import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Booking1.css'

function Booking1() {
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
    });

    const [contactData, setContactData] = useState({
        Name: '',
        Phone: '',
        AlternatePhone: '',
        Email: '',
        Address: '',
        Place: '',
    });

    const [paymentData, setPaymentData] = useState({
        PaymentMethod: '',
        PaymentDetails: {
            upiId: '',
            upiPhoneNumber: '',
            cardNumber: '',
            expiryDate: '',
            cvv: '',
            cardHolderName: '',
        },
    });

    // const [userId, setUserId] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        if (errorMessage) {
            window.alert(errorMessage);
            setErrorMessage('');
        }
    }, [errorMessage]);

    useEffect(() => {
        if (formSubmitted) {
            window.alert('Successfully booked!');
            console.log('Successfully booked:', { eventData, contactData, paymentData });
            setFormSubmitted(false);
        }
    }, [formSubmitted, eventData, contactData, paymentData]);

    const handleEventDataChange = (e) => {
        const { name, value } = e.target;
        setEventData({
            ...eventData,
            [name]: value,
        });
    };

    const handleContactDataChange = (e) => {
        const { name, value } = e.target;
        setContactData({
            ...contactData,
            [name]: value,
        });
    };

    const handlePaymentMethodChange = (e) => {
        const { value } = e.target;
        setPaymentData({
            PaymentMethod: value,
            PaymentDetails: {
                upiId: '',
                upiPhoneNumber: '',
                cardNumber: '',
                expiryDate: '',
                cvv: '',
                cardHolderName: '',
            },
        });
    };

    const handlePaymentDetailsChange = (e) => {
        const { name, value } = e.target;
        setPaymentData({
            ...paymentData,
            PaymentDetails: {
                ...paymentData.PaymentDetails,
                [name]: value,
            },
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!validateForm()) {
                throw new Error('Please fill the form completely.');
            }

            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('userId');

            const response = await axios.post('http://localhost:3000/create', { ...eventData, ...contactData, ...paymentData, userId }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setFormSubmitted(true);
            setEventData({
                YourEvent: '',
                YourLocationForEvent: '',
                EventDate: '',
                StartTime: '',
                EndTime: '',
                ApproximateNumberOfAttendees: '',
                EventSetup: '',
                ColorTheme: '',
                CateringServices: '',
            });
            setContactData({
                Name: '',
                Phone: '',
                AlternatePhone: '',
                Email: '',
                Address: '',
                Place: '',
            });
            setPaymentData({
                PaymentMethod: '',
                PaymentDetails: {
                    upiId: '',
                    upiPhoneNumber: '',
                    cardNumber: '',
                    expiryDate: '',
                    cvv: '',
                    cardHolderName: '',
                },
            });
        } catch (error) {
            console.error('Error creating event:', error);
            setErrorMessage(error.message);
        }
    };


    const validateForm = () => {
        return Object.values(eventData).every(value => value.trim() !== '') &&
            Object.values(contactData).every(value => value.trim() !== '');
    };

    return (

        <div className='bgg'>

            <div style={{ marginLeft: "300px" }} className='model'>
                <form className='foorm' onSubmit={handleSubmit}>
                    <h2>Event </h2>
                    <div className="form-row">
                        <input type="text" name="YourEvent" value={eventData.YourEvent} onChange={handleEventDataChange} placeholder="Your Event" />
                        <input type="text" name="YourLocationForEvent" value={eventData.YourLocationForEvent} onChange={handleEventDataChange} placeholder="Your Location For Event" />
                        <input type="date" name="EventDate" value={eventData.EventDate} onChange={handleEventDataChange} placeholder='Eventdate' />
                    </div>
                    <div className="form-row">
                        <input type="text" id="startTime" name="StartTime" placeholder='Start time' value={eventData.StartTime} onChange={handleEventDataChange} />
                        <input type="text" id="endTime" name="EndTime" placeholder='End time' value={eventData.EndTime} onChange={handleEventDataChange} />
                        <input type="number" name="ApproximateNumberOfAttendees" value={eventData.ApproximateNumberOfAttendees} onChange={handleEventDataChange} placeholder="Approximate Number Of Attendees" />
                    </div>
                    <div className="form-row">


                    <input
        type="text"
        name="EventSetup"
        value={eventData.EventSetup}
        onChange={(e) => {
            const { value } = e.target;
            setEventData({
                ...eventData,
                EventSetup: value,
            });
        }}
        list="setupOptions"
        placeholder="Your eventsetup"
    />
    <datalist id="setupOptions">
        <option value="Cocktail" />
        <option value="Engagement" />
        <option value="Hollow Square" />
        <option value="U-shape" />
        <option value="Birthday" />
        <option value="Reception" />
        <option value="Award shows" />
        <option value="Auditorium setup" />
        <option value="Classroom" />
        <option value="Mixed seating" />
        <option value="Bachelor Party" />
        <option value="Theater" />
        <option value="Conferences" />
        <option value="Lounge" />
        <option value="Clusters" />
        <option value="Chevron" />
        <option value="Garden" />
        <option value="Ballroom" />
        <option value="Beach" />
        <option value="Rooftop" />
        <option value="Banquet Hall" />
        <option value="Conference Center" />
        <option value="Auditorium" />
        <option value="Reception" />
        <option value="Mehandi" />
        <option value="Beach" />
        <option value="Party Hall" />
        <option value="Party Hall" />

    </datalist>




                        <input type="text" name="ColorTheme" value={eventData.ColorTheme} onChange={handleEventDataChange} placeholder="Color Theme" />
                        <input type="text" name="CateringServices" value={eventData.CateringServices} onChange={handleEventDataChange} placeholder="Catering Services" />
                    </div>


                    <h2>Contact Details</h2>
                    <div className="form-row">
                        <input type="text" name="Name" value={contactData.Name} onChange={handleContactDataChange} placeholder="Name" />
                        <input type="tel" name="Phone" value={contactData.Phone} onChange={handleContactDataChange} placeholder="Phone" />
                        <input type="tel" name="AlternatePhone" value={contactData.AlternatePhone} onChange={handleContactDataChange} placeholder="Alternate Phone" />
                    </div>
                    <div className="form-row">
                        <input type="email" name="Email" value={contactData.Email} onChange={handleContactDataChange} placeholder="Email" />
                        <input type="text" name="Address" value={contactData.Address} onChange={handleContactDataChange} placeholder="Address" />
                        <input type="text" name="Place" value={contactData.Place} onChange={handleContactDataChange} placeholder="Place" />
                    </div>
                    <h2>Payment Method</h2>
                    <select name="PaymentMethod" value={paymentData.PaymentMethod} onChange={handlePaymentMethodChange}>
                        <option value="">Select Payment Method</option>
                        <option value="GPay">GPay</option>
                        <option value="DebitCard">Debit Card</option>
                        <option value="CreditCard">Credit Card</option>
                    </select>
                    {paymentData.PaymentMethod && (
                        <div>
                            {paymentData.PaymentMethod === 'GPay' && (
                                <div>
                                    <input type="text" name="upiId" value={paymentData.PaymentDetails.upiId} onChange={handlePaymentDetailsChange} placeholder="UPI ID" />
                                    <input type="tel" name="upiPhoneNumber" value={paymentData.PaymentDetails.upiPhoneNumber} onChange={handlePaymentDetailsChange} placeholder="UPI Phone Number" />
                                </div>
                            )}
                            {(paymentData.PaymentMethod === 'DebitCard' || paymentData.PaymentMethod === 'CreditCard') && (
                                <div>
                                    <input type="text" name="cardNumber" value={paymentData.PaymentDetails.cardNumber} onChange={handlePaymentDetailsChange} placeholder="Card Number" />
                                    <input type="text" name="expiryDate" value={paymentData.PaymentDetails.expiryDate} onChange={handlePaymentDetailsChange} placeholder="Expiry Date" />
                                    <input type="text" name="cvv" value={paymentData.PaymentDetails.cvv} onChange={handlePaymentDetailsChange} placeholder="CVV" />
                                    <input type="text" name="cardHolderName" value={paymentData.PaymentDetails.cardHolderName} onChange={handlePaymentDetailsChange} placeholder="Card Holder Name" />
                                </div>
                            )}
                        </div>
                    )}


                    <button className='eventbutton' type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Booking1;