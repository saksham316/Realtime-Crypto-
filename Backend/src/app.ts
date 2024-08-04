// Express App Imports------------------------------------------------------------------------------------------------------
import express, { Application } from "express";
import http from "http";
import cors from "cors";
import morgan from "morgan";
// ----------------------------------------------------------------------------------------------------------------------------------

const app: Application = express();
export const server = http.createServer(app);

process.env.NODE_ENV === "dev" && app.use(morgan("combined"));

