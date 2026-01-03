import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 3,
        
    },
    email:{
        type: String,
        required: true,
        
        
    },
    password:{
        type: String,
        required: true,
        minlength: [6, "Password must be longer than 6 characters."]
        
    },
    role:{
        type: String,
        enum: ["admin", "manager", "developer"],
        required: true,
        trim: true,
        lowercase: true,
        default: "developer"
        
    },
    
    
})

const User = mongoose.model("User", UserSchema);
export default User;