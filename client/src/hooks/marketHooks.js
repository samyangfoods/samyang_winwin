import axios from "axios";
import { basicApiUrl } from "./UrlSetting";

export const useMarketList = async () => {
  const { data } = await axios.get(`${basicApiUrl}/market`);

  return data;
};

export const useMarketCreate = async (marketObj) => {
  try {
    const { data } = await axios.post(`${basicApiUrl}/market`, marketObj);

    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export const useMarketDelete = async (marketId) => {
  const { config } = await axios.delete(`${basicApiUrl}/market/${marketId}`);

  return config;
};
