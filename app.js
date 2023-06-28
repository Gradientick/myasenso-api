import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import config from "./utils/config.js";
import userRouter from "./routes/userRouter.js";
import itemsRouter from "./routes/itemsRouter.js";
import nameRouter from "./routes/nameRouter.js";
import loginRouter from "./routes/loginRouter.js";
import errorHandler from "./middlewares/errorHandler.js";

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
app.use("/api/users/name", nameRouter);
app.use("/api/login", loginRouter);
app.use(errorHandler);

export default app;
