import express from "express";
import "dotenv/config";
import { connectDB } from "./db/connectDB.js";
import bodyParser from 'body-parser';

import authRoutes from "./routes/auth.route.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server running on port ", PORT);
});
