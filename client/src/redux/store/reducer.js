import { combineReducers } from "@reduxjs/toolkit";
import marketSlice from "../slices/market";
import userSlice from "../slices/user";

const rootReducer = combineReducers({
  user: userSlice.reducer,
  market: marketSlice.reducer,
});

export default rootReducer;
