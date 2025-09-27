import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db.js";
import AuthRoutes from "./routes/AuthRoutes.js";
import http from "http";
import SmsRoutes from "./routes/smsRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Main server start");
});

app.use("/auth", AuthRoutes);
app.use("/sms", SmsRoutes);

const httpServer = http.createServer(app);
const PORT = process.env.PORT || 8000;
httpServer.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
