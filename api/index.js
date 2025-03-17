import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
const app = express();
app.use(express.json());
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(3001, () => {
  console.log("Server is listening at port 3001");
});
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
