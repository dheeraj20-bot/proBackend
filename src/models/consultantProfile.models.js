const mongoose = require('mongoose');

// Define the consultant schema
const consultantprofileSchema = new mongoose.Schema({
  headline:{
    type:String,
  },
  about:{
    type:String, 
  },
  age:{
    type:String
  },
  dateOfBirth:{
    type:String
  }
});


module.exports =  mongoose.model('ConsultantProfile', consultantprofileSchema);

