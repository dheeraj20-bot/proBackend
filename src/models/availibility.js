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
const weekTimeSchema = new mongoose.Schema([{
    weekday: {
        type: String,
        enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        required: true
    },
    slots: [slotSchema] 
}]);



const availabilitySchema = new mongoose.Schema(
    {
           availability:{
            type:[availabilitySchema],
            default: [
                 { weekday: 'Sunday', slots: [] },
                 { weekday: 'Monday', slots: [{ startTime: '10:00', endTime: '10:30' }, { startTime: '11:00', endTime: '11:30' }] },
                 { weekday: 'Tuesday', slots: [{ startTime: '10:00', endTime: '10:30' }, { startTime: '11:00', endTime: '11:30' }] },
                 { weekday: 'Wednesday', slots: [{ startTime: '10:00', endTime: '10:30' }, { startTime: '11:00', endTime: '11:30' }] },
                 { weekday: 'Thursday', slots: [{ startTime: '10:00', endTime: '10:30' }, { startTime: '11:00', endTime: '11:30' }] },
                 { weekday: 'Friday', slots: [{ startTime: '10:00', endTime: '10:30' }, { startTime: '11:00', endTime: '11:30' }] },
                 { weekday: 'Saturday', slots: [] },
             ]
         } 
    },{
     timestamps:true
    })

module.exports = mongoose.model('ConsultantAvailibilty',availabilitySchema);


