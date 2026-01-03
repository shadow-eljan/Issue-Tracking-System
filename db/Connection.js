import mongoose from "mongoose";

async function connectDB() {
    try{
        const conn = await mongoose.connect("mongodb://localhost:27017/issueTracker");
        console.log(`Successfully connected to ${conn.connection.host}`);
    }
    catch(err) {
        console.log("Error connecting to db.")
        process.exit(1);
    }
}

export default connectDB;