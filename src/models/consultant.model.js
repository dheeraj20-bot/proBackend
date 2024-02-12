const mongoose = require('mongoose');


const consultantSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    avatar: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Admin', 'Consultant'],
        default: 'Consultant'
    },
    category:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }],
    services: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service'
    }]
});

module.exports = mongoose.model('ConsultantUser', consultantSchema);
