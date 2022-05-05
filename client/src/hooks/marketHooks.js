import axios from "axios";
import { basicApiUrl } from "./UrlSetting";

export const useMarketListWithId = async (token) => {
  const { data } = await axios.get(`${basicApiUrl}/market`, {
    headers: { authorization: `Bearer ${token}` },
  });

  return data;
};

export const useMarketCreate = async (marketObj, token) => {
  const {
    marketImage,
    userId,
    marketName,
    size,
    pos,
    phoneNumber: phone,
    income: averageSales,
    address: marketAddress,
  } = marketObj;

  const formData = new FormData();

  formData.append("marketImage", marketImage);
  formData.append("marketName", marketName);
  formData.append("size", size);
  formData.append("pos", pos);
  formData.append("phone", phone);
  formData.append("userId", userId);
  formData.append("averageSales", averageSales);
  formData.append("marketAddress", marketAddress);

  const { data } = await axios.post(`${basicApiUrl}/market`, formData, {
    headers: { authorization: `Bearer ${token}` },
  });

  return data;
};

export const useMarketDelete = async (marketId, token) => {
  const { config } = await axios.delete(
    `${basicApiUrl}/market/list/${marketId}`,
    {
      headers: { authorization: `Bearer ${token}` },
    }
  );

  return config;
};

export const useMarketInfo = async (marketId, token) => {
  const { data } = await axios.get(`${basicApiUrl}/market/list/${marketId}`, {
    headers: { authorization: `Bearer ${token}` },
  });

  return data.market;
};
