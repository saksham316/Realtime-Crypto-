// Server Imports--------------------------------------------------------------------------
import dotenv from "dotenv";
import { server } from "./app";
import { mongo } from "./db/mongodb";
import { Server as socketServer } from "socket.io";
// -----------------------------------------------------------------------------------------

dotenv.config();
const PORT = process.env.port || 6969;

// Creating mongodb connection
mongo();

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
