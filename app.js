import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import config from "./utils/config.js";
import userRouter from "./Routes/userRouter.js";
import itemsRouter from "./Routes/itemsRouter.js";
import nameRouter from "./Routes/nameRouter.js";
import loginRouter from "./Routes/loginRouter.js";

const app = express();

const connectToDB = async (url) => {
  await mongoose.connect(url);
  console.log("connected to DB");
};

connectToDB(config.MONGODB_URI);

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));

app.use("/api/users", userRouter);
app.use("/api/items", itemsRouter);
app.use("/api/name", nameRouter);
app.use("/api/login", loginRouter);
export default app;
