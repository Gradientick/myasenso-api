import express from "express";
import userController from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", userController.getUsers);
userRouter.post("/", userController.deleteUser);
userRouter.delete("/", userController.createNewUser);

export default userRouter;
