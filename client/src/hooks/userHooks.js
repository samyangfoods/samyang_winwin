import axios from "axios";
import { Platform } from "react-native";

// OS에 따라 적합한 URL 형식 적용
export const basicApiUrl =
  Platform.OS === "android"
    ? "http://10.0.2.2:5000/api"
    : "http://localhost:5000/api";

export const useLogin = async (userId, password) => {
  const { data } = await axios.post(`${basicApiUrl}/user/login`, {
    userId,
    password,
  });
  console.log("USERRRRRR🔥🔥🔥🔥🔥🔥🔥🔥", data);
  return data;
};

export const useRegister = async (userObj) => {
  const { data } = await axios.post(`${basicApiUrl}/user/register`, userObj);

  return data;
};

export const useProfile = async (userId) => {
  const { data } = await axios.get(`${basicApiUrl}/user/${userId}`);

  return data;
};
