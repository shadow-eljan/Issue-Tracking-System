import express from "express";
import connectDB from "./db/Connection.js";
import UserRoutes from "./Routes/UserRoutes.js"
import projectRouter from "./Routes/ProjectRoutes.js";

const app = express();
app.use(express.json())

connectDB().then(()=>{
    app.listen(4000, ()=> console.log("Server is up."));
})
app.use("/api/auth", UserRoutes);
app.use("/api/projects", projectRouter);