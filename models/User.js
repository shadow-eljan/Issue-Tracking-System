import mongoose from "mongoose";
import bcrypt from "bcryptjs";

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
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10); 
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", UserSchema);
export default User;