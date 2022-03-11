import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { basicApiUrl } from "./UrlSetting";

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
  const token = await SecureStore.getItemAsync("token");
  const { data } = await axios.get(`${basicApiUrl}/user/${userId}`, {
    headers: { authorization: `Bearer ${token}` },
  });

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
  const { data } = await axios.get(`${basicApiUrl}/user/token`, {
    headers: { authorization: `Bearer ${token}` },
  });

  return data._id;
};
