import express from "express";
import itemsController from "../controllers/itemsController.js";

const itemsRouter = express.Router();

itemsRouter.get("/", itemsController.getItems);
itemsRouter.post("/", itemsController.postItem);
itemsRouter.delete("/:id", itemsController.deleteItem);
itemsRouter.put("/:id", itemsController.editItem);

export default itemsRouter;
