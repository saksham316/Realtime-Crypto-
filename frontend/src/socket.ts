import { io } from "socket.io-client";

const URL =
  process.env.REACT_ENV === "production" ? "" : "http://localhost:6990";

export const socket = io(URL);
