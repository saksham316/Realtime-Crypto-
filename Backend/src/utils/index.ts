import axios, { AxiosResponse } from "axios";
import { socket } from "../server";
import { ILiveCoinWatchApiRes } from "./types";

export const liveCoinWatch: () => void = async () => {
  const liveCoinWatchData = await axios.post<ILiveCoinWatchApiRes>(
    `${process.env.LIVE_COIN_WATCH_API}`,
    {
      currency: "USD",
      sort: "rank",
      order: "ascending",
      offset: 0,
      limit: 10,
      meta: false,
    },
    {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": `${process.env.LIVE_COIN_WATCH_API_KEY}`,
      },
    }
  );

  socket.emit("data-received", JSON.stringify(liveCoinWatchData.data));
};
