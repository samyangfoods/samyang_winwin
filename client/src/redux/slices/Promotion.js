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

// _id: "",
// marketName: "",
// end_date: "",
// start_date: "",
// marketAddress: "",
// pos: "",
// promotionType: "",
// promotionCost: "",
// promotinoDetail: "",
// user: "",

// state._id = action.payload._id;
// state.marketName = action.payload.marketName;
// state.end_date = action.payload.end_date;
// state.start_date = action.payload.start_date;
// state.marketAddress = action.payload.marketAddress;
// state.pos = action.payload.pos;
// state.promotionType = action.payload.promotionType;
// state.promotionCost = action.payload.promotionCost;
// state.promotionDetail = action.payload.promotionDetail;
// state.user = action.payload.user;
