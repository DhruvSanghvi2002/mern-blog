import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
const app = express();
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
  console.log("Server is listening at port 3000");
});
app.use("/api/user", userRouter);
