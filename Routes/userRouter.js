import express from "express";
import userController from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/", userController.createNewUser);
userRouter.get("/", userController.getUsers);

export default userRouter;
