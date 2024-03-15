const Event = require("./Eventschema")



const geteventdetails = async (req,res) =>{
    const getevent = await Event.find()
    res.json(getevent)
}

module.exports = geteventdetails