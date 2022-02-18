import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  accessToken: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.userId = action.payload.userId;
      state.accessToken = action.payload.accessToken;
    },
  },
});

export default userSlice;
