import axios from "axios";
import { Alert } from "react-native";
import { basicApiUrl } from "./userHooks";

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
  console.log("market hooks ✅✅✅✅✅✅✅✅✅", config);
  return Boolean(config);
};
