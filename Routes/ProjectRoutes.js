import express from   "express";
import {createProject, viewProject, updateProject, deleteProject} from "../Controllers/ProjectController.js"

const projectRouter = express.Router();

projectRouter.get("/view/:key",  viewProject);
projectRouter.get("/view",  viewProject);
projectRouter.post("/new", createProject);
projectRouter.put("/update/:id", updateProject);
projectRouter.delete("/delete/:id", deleteProject);

export default projectRouter;