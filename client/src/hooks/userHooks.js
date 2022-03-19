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
    console.log("userLogin", error);
    return;
  }
};

export const useRegister = async (userObj) => {
  const formData = new FormData();
  const {
    userName,
    userId,
    password,
    passwordConfirmation,
    channel,
    storeName,
    phoneNumber,
    userImage,
    userAddress,
  } = userObj;

  formData.append("userName", userName);
  formData.append("userId", userId);
  formData.append("password", password);
  formData.append("passwordConfirmation", passwordConfirmation);
  formData.append("channel", channel);
  formData.append("storeName", storeName);
  formData.append("phoneNumber", phoneNumber);
  formData.append("userAddress", userAddress);
  formData.append("userImage", userImage);
  // console.log("Form Data", formData);
  //TODO: socket code rewrite and form data filereader filedataAsUrl
  const { data } = await axios.post(`${basicApiUrl}/user/register`, formData);

  return data;
};

export const useProfileChange = async (userId, userObj, token) => {
  const { data } = await axios.put(`${basicApiUrl}/user/${userId}`, userObj, {
    headers: { token },
  });

  return data;
};

export const useTokenLogin = async (token) => {
  // sample..
  const { data } = await axios.get(`${basicApiUrl}/user/token`, {
    headers: { token },
  });

  return data._id;
};
