import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  marketName: "",
  size: "",
  pos: "",
  phone: "",
  averageSales: "",
  marketAddress: {
    warehouse: "",
  },
  marketImage: "",
};

const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {
    setMarket(state, action) {
      state.userId = action.payload.userId;
      state.marketName = action.payload.marketName;
      state.size = action.payload.size;
      state.pos = action.payload.pos;
      state.phone = action.payload.phone;
      state.averageSales = action.payload.averageSales;
      state.marketAddress.warehouse = action.payload.marketAddress.warehouse;
      state.marketImage = action.payload.marketImage;
    },
  },
});

export default marketSlice;
