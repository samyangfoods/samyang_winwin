import axios from "axios";
import { basicApiUrl } from "./UrlSetting";

export const useMarketListWithId = async (userId, token) => {
  const { data } = await axios.get(`${basicApiUrl}/market/${userId}`, {
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
  const { config } = await axios.delete(
    `${basicApiUrl}/market/list/${marketId}`,
    {
      headers: { token },
    }
  );

  return config;
};

export const useMarketInfo = async (marketId, token) => {
  const { data } = await axios.get(`${basicApiUrl}/market/list/${marketId}`, {
    headers: { token },
  });

  return data.market;
};
