import axios from "axios";
import { basicApiUrl } from "./userHooks";

export const useSearchText = async (text) => {
  // example..
  const { data } = await axios.post(`${basicApiUrl}/search`);
};

export const useSearchApiWithMarketName = async () => {};
