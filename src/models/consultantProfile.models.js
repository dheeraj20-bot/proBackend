const mongoose = require('mongoose');
// Define a slot schema for availability slots
const slotSchema = new mongoose.Schema({
    startTime: {
        type: String, // Representing time in HH:MM format
        required: true
    },
    endTime: {
        type: String, // Representing time in HH:MM format
        required: true
    }
});


// Define a schema for consultant availability
const availabilitySchema = new mongoose.Schema({
    weekday: {
        type: String,
        enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        required: true
    },
    slots: [slotSchema] // Array of slot objects
});

// Define the consultant schema
const consultantprofileSchema = new mongoose.Schema({
  category: [{
    type: Schema.Types.ObjectId,
    ref:"Category"
  }],
  services: [{
    type: Schema.Types.ObjectId,
    ref: 'Service'
  }],
  availability: [availabilitySchema] // Array of availability objects
});

const Consultant = mongoose.model('Consultant', consultantprofileSchema);

module.exports = Consultant;
