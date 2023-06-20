import express from "express";
import nameController from "../controllers/nameController.js";

const nameRouter = express.Router();

nameRouter.get("/", nameController.getName);
nameRouter.post("/", nameController.createName);
nameRouter.put("/", nameController.editName);

export default nameRouter;
