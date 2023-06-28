import express from "express";
import itemsController from "../controllers/itemsController.js";
import upload from "../utils/multer.js";

const itemsRouter = express.Router();

itemsRouter.get("/", itemsController.getItems);
itemsRouter.get("/:id", itemsController.getItem);
itemsRouter.post("/", upload.single("image"), itemsController.postItem);
itemsRouter.delete("/:id", itemsController.deleteItem);
itemsRouter.put("/:id", itemsController.editItem);

export default itemsRouter;
