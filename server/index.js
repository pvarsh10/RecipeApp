import express from "express";
import dotenv from "dotenv";
import connectDB from "./lib/connect.js";
dotenv.config();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const app = express();
connectDB(MONGODB_URI);
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});