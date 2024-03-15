const Event = require("./Eventschema")



const deleteEvent = async(req,res) =>{
 const  getdd= req.params.id
    const eventid = await Event.findByIdAndDelete({_id:getdd})
    res.json(eventid)
}

module.exports=deleteEvent