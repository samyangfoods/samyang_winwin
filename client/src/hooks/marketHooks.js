import axios from "axios";
import { basicApiUrl } from "./UrlSetting";

export const useMarketList = async (token) => {
  const { data } = await axios.get(`${basicApiUrl}/market`, {
    headers: { token },
  });

  return data;
};

export const useMarketCreate = async (marketObj, token) => {
  const { data } = await axios.post(`${basicApiUrl}/market`, marketObj, {
    headers: { token },
  });

  return data;
};

export const useMarketDelete = async (marketId, token) => {
  const { config } = await axios.delete(`${basicApiUrl}/market/${marketId}`, {
    headers: { token },
  });

  return config;
};
