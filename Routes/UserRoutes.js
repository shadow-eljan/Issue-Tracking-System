import express from "express";
import { getAllUsers, login, registerUser } from "../Controllers/UserController.js";

const router = express.Router();

router.get("/view", getAllUsers);
router.post("/register", registerUser);
router.post("/login", login);


export default router;