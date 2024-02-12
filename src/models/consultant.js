const mongoose = require('mongoose');

const consultantSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
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
        default: 'Consultant'
    },
    additionalDetails: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: "ConsultantProfile",
    },
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service",
    },
});

module.exports = mongoose.model('ConsultantUser', consultantSchema);
