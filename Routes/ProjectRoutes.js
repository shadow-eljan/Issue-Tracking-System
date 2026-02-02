import express from   "express";
import {addProject, getProjects, getProjectById} from "../Controllers/ProjectController.js"
import auth from "../middlewares/auth.js";
import authorize from "../middlewares/authorize.js";

const projectRouter = express.Router();

projectRouter.post("/", auth, authorize(["admin"]), addProject);
projectRouter.get("/", auth, getProjects);
projectRouter.get("/:id", auth, getProjectById);

export default projectRouter;






