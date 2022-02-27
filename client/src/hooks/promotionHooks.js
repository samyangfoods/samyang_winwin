import axios from "axios";
import { basicApiUrl } from "./UserHooks";

export const usePromotions = async () => {
  const response = await axios.get(`${basicApiUrl}/promotion`);

  return response.data;
};
