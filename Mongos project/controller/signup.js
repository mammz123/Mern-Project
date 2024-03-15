// const bcrypt=require('bcrypt');
// const User = require('./Userschema');

// const CreateUser2 = async(req,res)=> {

//     const {Name,Email,Password}= req.body;
//     const UserEmail=await User.findOne({Email})
//     if(UserEmail)
//     {
//         res.json("User Already Exist")
//     }
//     else{
//         const salt = await bcrypt.genSalt(10)
//         const hashedpassword = await bcrypt.hash(Password,salt)
//         const Userdetails = await User.create({
//     Name,Email,Password : hashedpassword
// })
// res.json(Userdetails)

//     }
// }
// module.exports=CreateUser2


