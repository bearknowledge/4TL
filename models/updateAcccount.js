const mongoose = require('mongoose')


const UpdateProfile = new mongoose.Schema({
  
  name:{type:String, required: false, trim: false},
   email: {type:String, required: false, trim: false},
linkedIn:{type:String, required: false, trim: false},
 industry: {type:String, required: false, trim: false},
  role: {type:String, required: false, trim: false},
   password:{type:String, required: false, trim: false},
})


module.exports = mongoose.model('UpdateProfile', UpdateProfile);