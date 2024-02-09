import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
       username:{
            type:String,
            required:true,
            trim:true,
       },
       phoneNumber:{
            type:Number,
            required:[true,"PhoneNumber is Required"]
       },
       avatar:{
           type:String,
           required:true
       },
       refreshtoken:{
           type:String
       }
    },

    {
        timestamps:true
    }
)

export const User = mongoose.model("User",userSchema)