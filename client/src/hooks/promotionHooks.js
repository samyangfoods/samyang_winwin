import axios from "axios";
import { basicApiUrl } from "./UrlSetting";

export const usePromotions = async () => {
  const response = await axios.get(`${basicApiUrl}/promotion`);

  return response.data;
};

export const usePromotionCreation = async (promotionObj, token) => {
  const formData = new FormData();
  const {
    marketName,
    marketAddress,
    pos,
    image,
    start_date,
    end_date,
    promotionType,
    promotionCost,
    promotionDetail,
  } = promotionObj;

  formData.append("marketName", marketName);
  formData.append("marketAddress", marketAddress);
  formData.append("pos", pos);
  formData.append("file1", image[0]);
  formData.append("file2", image[1]);
  formData.append("file3", image[2]);
  formData.append("file4", image[3]);
  formData.append("start_date", start_date);
  formData.append("end_date", end_date);
  formData.append("promotionType", promotionType);
  formData.append("promotionCost", promotionCost);
  formData.append("promotionDetail", promotionDetail);

  const { data } = await axios.post(`${basicApiUrl}/promotion`, formData, {
    headers: { token },
  });

  return data;
};
