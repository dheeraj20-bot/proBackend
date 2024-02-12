const mongoose = require('mongoose');
const Schema = require("mongoose")


// Define user schema
const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        phoneNumber: {
            type: Number,
            required: [true, "PhoneNumber is Required"]
        },
        avatar: {
            type: String,
        },
        role: {
            type: String,
            default: "User"
        },
        token: {
            type: String
        },
        // consultantProfile: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'Consultant' // Reference to Consultant model
        // }
    },
    {
        timestamps: true
    }
);

// Create the User model
module.exports = mongoose.model("User", userSchema);


