import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.userId = action.payload.userId;
      state.token = action.payload.token;
    },
  },
});

export default userSlice;
