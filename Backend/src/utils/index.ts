import axios, { AxiosResponse } from "axios";
import { liveWatchModel } from "../models/liveWatchModel";
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
      limit: 20,
      meta: false,
    },
    {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": `${process.env.LIVE_COIN_WATCH_API_KEY}`,
      },
    }
  );

  const liveWatchDocs = await liveWatchModel.insertMany(liveCoinWatchData.data);

  socket.emit("data-received", JSON.stringify(liveCoinWatchData.data));
};
