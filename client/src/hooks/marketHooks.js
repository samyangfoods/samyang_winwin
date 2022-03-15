import axios from "axios";
import { basicApiUrl } from "./UrlSetting";

export const useMarketList = async (token) => {
  const { data } = await axios.get(`${basicApiUrl}/market`, {
    headers: { token },
  });

  return data;
};

export const useMarketCreate = async (marketObj, token) => {
  const { data } = await axios({
    method: "POST",
    url: `${basicApiUrl}/market`,
    data: marketObj,
    headers: {
      token,
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
      "x-auth": token,
    },
  });
  // }).post(`${basicApiUrl}/market`, marketObj.marketImage, {
  //   headers: {
  //     token,
  //     "Content-Type": "multipart/form-data; boundary: marketImage",
  //   },

  return data;
};

export const useMarketDelete = async (marketId, token) => {
  const { config } = await axios.delete(`${basicApiUrl}/market/${marketId}`, {
    headers: { token },
  });

  return config;
};
