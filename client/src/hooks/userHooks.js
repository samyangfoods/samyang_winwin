import axios from "axios";
import { Platform } from "react-native";
import * as SecureStore from "expo-secure-store";

// OS에 따라 적합한 URL 형식 적용
export const basicApiUrl =
  Platform.OS === "android"
    ? "http://10.0.2.2:5000/api"
    : "http://localhost:5000/api";

export const useLogin = async (userId, password) => {
  try {
    const { data } = await axios.post(`${basicApiUrl}/user/login`, {
      userId,
      password,
    });

    await SecureStore.setItemAsync("token", data.token);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const useRegister = async (userObj) => {
  const { data } = await axios.post(`${basicApiUrl}/user/register`, userObj);

  return data;
};

export const useProfile = async (userId) => {
  const { data } = await axios.get(`${basicApiUrl}/user/${userId}`);

  return data;
};

export const useProfileChange = async (userId, userObj, token) => {
  const { data } = await axios.put(`${basicApiUrl}/user/${userId}`, userObj, {
    headers: { authorization: `Bearer ${token}` },
  });

  return data;
};

export const useTokenLogin = async (token) => {
  // sample..
  const { data } = await axios.post(`${basicApiUrl}/user/token`, token);

  return data;
};
