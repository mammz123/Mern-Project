const Event = require("./Eventschema");

const updateevent = async (req, res) => {
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
  } = req.body;
  const _id = req.params.id;

  const parseTime = (timeStr) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes);
    return date;
  };

  const parsedStartTime = parseTime(StartTime);
  const parsedEndTime = parseTime(EndTime);

  try {
    const Eventupdate = await Event.findByIdAndUpdate(_id, {
      YourEvent,
      YourLocationForEvent,
      EventDate,
      StartTime: parsedStartTime,
      EndTime: parsedEndTime,
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
    res.json(Eventupdate);
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ message: 'Failed to update event' });
  }
};

module.exports = updateevent;
