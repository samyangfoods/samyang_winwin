import axios from "axios";
import { basicApiUrl } from "./UrlSetting";

export const usePromotions = async () => {
  const response = await axios.get(`${basicApiUrl}/promotion`);

  return response.data;
};
