import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,

    },
    description:{
        type: String,
        required: true,
        
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    members:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        
    }],
    key:{
        type: String,
        required: true,
        unique: [true, "Key must be qnique"],
    }

}, {timestamps: true})

const Project = mongoose.model("Project", projectSchema);
export default Project;