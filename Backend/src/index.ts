// Server Configuration Imports------------------------------------------------------------------------------------------------------
import express, { Application } from "express";
import http from "http";
import cors from "cors";
import { mongo } from "./db/mongodb";
import morgan from "morgan";
// ----------------------------------------------------------------------------------------------------------------------------------
// Imports----------------------------------------------------------------------------------------------------------------------------
import dotenv from "dotenv";
// ----------------------------------------------------------------------------------------------------------------------------------

dotenv.config();
const app: Application = express();
const server = http.createServer(app);
const PORT = process.env.port || 6969;

process.env.NODE_ENV === "dev" && app.use(morgan);

// Creating mongodb connection
mongo();

server.listen(PORT, () => {
  console.log(`Server Started at PORT ${PORT}`);
});
