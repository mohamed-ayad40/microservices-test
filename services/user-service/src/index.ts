import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDatabase } from "./config/database.js";
import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import { closeRabbitMQ, connectRabbitMQ } from "./config/rabbitmq.js";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

process.on("SIGINT", async () => {
  console.log("Shutting down User Service...");
  if (closeRabbitMQ) await closeRabbitMQ(); // لو موجودة
  process.exit(0);
});

// Routes
app.use("/api/users", userRoutes);

// Health check endpoint
app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok", service: "user-service" });
});

// Start server
const startServer = async (): Promise<void> => {
  try {
    await connectDatabase();
    await connectRabbitMQ();
    app.listen(PORT, () => {
      console.log(`User Service running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start User Service:", error);
    process.exit(1);
  }
};

startServer();
