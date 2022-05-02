import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  userName: "",
  userImage: "",
  channel: "",
  role: "",
  storeName: "",
  phoneNumber: "",
  userAddress: "",
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.userId = action.payload.userId;
      state.userName = action.payload.userName;
      state.userImage = action.payload.userImage;
      state.channel = action.payload.channel;
      state.role = action.payload.role;
      state.storeName = action.payload.storeName;
      state.phoneNumber = action.payload.phoneNumber;
      state.userAddress = action.payload.userAddress;
      state.token = action.payload.token;
    },
  },
});

export default userSlice;
