import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  array: [],
};

const promotionSlice = createSlice({
  name: "promotion",
  initialState,
  reducers: {
    setPromotion(state, action) {
      state.array = action.payload.array;
    },
  },
});

export default promotionSlice;
