// This is the demo
import { createSlice } from "@reduxjs/toolkit";
import { ILiveCoinWatchState } from "../types/types";

const initialState: ILiveCoinWatchState = {
  liveCoinWatchData: [],
};

export const liveWatchSlice = createSlice({
  name: "commonData",
  initialState,
  reducers: {
    setLiveCoinWatchData: (state, action) => {
      state.liveCoinWatchData = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setLiveCoinWatchData } = liveWatchSlice.actions;
export default liveWatchSlice.reducer;
