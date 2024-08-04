import { io } from "socket.io-client";

const URL =
  process.env.REACT_ENV === "production" ? "" : `${process.env.REACT_APP_NODE_APP_DEV_URL}`;

export const socket = io(URL);
