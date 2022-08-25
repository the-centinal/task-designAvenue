import mongoose from "mongoose";

const userSchema = {
    fullname: String,
    phone: String,
    email: String,
    address: String,
    highestQualification: String,
}

const User = mongoose.model("User" , userSchema) 

export default  User;