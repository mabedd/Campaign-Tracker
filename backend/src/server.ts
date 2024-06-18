import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./routes/auth";
import campaignRoutes from "./routes/campaign";

import { setupSwagger } from "./swagger";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/campaigns", campaignRoutes);

setupSwagger(app);

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => res.send("API running"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
