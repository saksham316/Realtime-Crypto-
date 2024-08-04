import mongoose, { Schema } from "mongoose";

const liveWatchSchema = new Schema({
  code: String,
  rate: Number,
  volume: Number,
  cap: Number,
  delta: {
    hour: Number,
    day: Number,
    week: Number,
    month: Number,
    quarter: Number,
    year: Number,
  },
});

export const liveWatchModel = mongoose.model("liveWatch", liveWatchSchema);
