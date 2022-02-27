import axios from "axios";
import { basicApiUrl } from "./UserHooks";

export const useMarketList = async () => {
  const { data } = await axios.get(`${basicApiUrl}/market`);

  return data;
};

export const useMarketCreate = async (marketObj) => {
  const { data } = await axios.post(`${basicApiUrl}/market`, marketObj);

  return data;
};

export const useMarketDelete = async (marketId) => {
  const { config } = await axios.delete(`${basicApiUrl}/market/${marketId}`);

  return config;
};
