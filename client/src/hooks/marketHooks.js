import axios from "axios";
import { basicApiUrl } from "./userHooks";

export const useMarketList = async () => {
  const { data } = await axios.get(`${basicApiUrl}/market`);

  return data;
};

export const useMarketCreate = async (marketObj) => {
  const { data } = await axios.post(`${basicApiUrl}/market`, marketObj);

  return data;
};
