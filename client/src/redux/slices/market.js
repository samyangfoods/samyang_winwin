import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  array: [],
};

const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {
    setMarket(state, action) {
      state.array = action.payload.array;
    },
  },
});

export default marketSlice;
