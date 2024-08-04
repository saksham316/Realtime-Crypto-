// Server Imports--------------------------------------------------------------------------
import dotenv from "dotenv";
import { server } from "./app";
import { mongo } from "./db/mongodb";
import { Server as socketServer } from "socket.io";
// -----------------------------------------------------------------------------------------

dotenv.config();
const PORT = process.env.port || 6969;
const socket = new socketServer(server, {
  cors: {
    origin: "http://localhost:3000", // Update this to match your React app's URL
    methods: ["GET", "POST"],
  },
});

// Creating mongodb connection
mongo();

socket.on("connection", (socket) => {
  console.log("Socket Connected Successfully");
});

server.listen(PORT, () => {
  console.log(`Server Started at PORT ${PORT}`);
});

// Handling the Unhandled Rejected Promises
process.on("unhandledRejection", (err) => {
  console.log("Unhandled Rejection! Shutting Down");
  server.close(() => {
    process.exit(1);
  });
});
