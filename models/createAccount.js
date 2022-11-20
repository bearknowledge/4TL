const mongoose = require('mongoose')


const CreateProfile = new mongoose.Schema({
  
  name:{type:String, required: true, trim: false, unique:true},
   email: {type:String, required: true, unique:true, trim: false},
linkedIn:{type:String, required: true, unique:true, trim: false},
 industry: {type:String, required: true, unique:true, trim: false},
  role: {type:String, required: true, unique:true, trim: false},
   password:{type:String, required: true, unique:true, trim: false},
})


module.exports = mongoose.models.Profile || mongoose.model('Profile', CreateProfile);