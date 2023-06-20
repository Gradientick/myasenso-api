import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import config from "./utils/config.js";
import userRouter from "./Routes/userRouter.js";
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
export default app;
