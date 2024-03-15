const Event = require("./Eventschema");

const parseTimeStringToDate = (timeString) => {
    const [hours, minutes] = timeString.replace(/[^0-9:]/g, '').split(':');
    return new Date().setHours(parseInt(hours, 10), parseInt(minutes || 0, 10), 0, 0);
};

const validatePaymentDetails = (PaymentMethod, PaymentDetails) => {
    if (PaymentMethod === 'GPay') {
        if (!PaymentDetails.upiId || !PaymentDetails.upiPhoneNumber) {
            throw new Error('Missing UPI ID or UPI phone number for GPay payment.');
        }
    } else if (PaymentMethod === 'DebitCard') {
        if (!PaymentDetails.cardNumber || !PaymentDetails.expiryDate || !PaymentDetails.cvv || !PaymentDetails.cardHolderName) {
            throw new Error('Missing required fields for DebitCard payment.');
        }
    } else if (PaymentMethod === 'CreditCard') {
        if (!PaymentDetails.cardNumber || !PaymentDetails.expiryDate || !PaymentDetails.cvv || !PaymentDetails.cardHolderName) {
            throw new Error('Missing required fields for CreditCard payment.');
        }
    } else if (PaymentMethod === 'UPI') {
        if (!PaymentDetails.upiId || !PaymentDetails.upiPhoneNumber) {
            throw new Error('Missing UPI ID or UPI phone number for UPI payment.');
        }
    }
};

const Createevent = async (requestData, userId) => {
    try {
        console.log('Incoming JSON data:', requestData);
        console.log('Received userId:', userId);

        const {
            YourEvent,
            YourLocationForEvent,
            EventDate,
            StartTime,
            EndTime,
            ApproximateNumberOfAttendees,
            EventSetup,
            ColorTheme,
            CateringServices,
            Name,
            Phone,
            AlternatePhone,
            Email,
            Address,
            Place,
            PaymentMethod,
            PaymentDetails
        } = requestData;

        if (!YourEvent || !YourLocationForEvent || !EventDate || !StartTime || !EndTime || !ApproximateNumberOfAttendees || !EventSetup || !ColorTheme || !CateringServices || !Name || !Phone || !AlternatePhone || !Email || !Address || !Place || !PaymentMethod || !PaymentDetails) {
            throw new Error('Missing required fields in the request.');
        }

        if (!['GPay', 'DebitCard', 'CreditCard', 'UPI'].includes(PaymentMethod)) {
            throw new Error('Invalid payment method.');
        }

        validatePaymentDetails(PaymentMethod, PaymentDetails);

        const startTime = parseTimeStringToDate(StartTime);
        const endTime = parseTimeStringToDate(EndTime);

        const Eventdetails = await Event.create({
            userId,
            YourEvent,
            YourLocationForEvent,
            EventDate: new Date(EventDate), 
            StartTime: new Date(startTime),
            EndTime: new Date(endTime),
            ApproximateNumberOfAttendees,
            EventSetup,
            ColorTheme,
            CateringServices,
            Name,
            Phone,
            AlternatePhone,
            Email,
            Address,
            Place,
            PaymentMethod,
            PaymentDetails
        });
        console.log('Created event:', Eventdetails);


        return Eventdetails;
    } catch (error) {
        console.error('Error processing request:', error);
        throw error;
    }
};

module.exports = Createevent;
