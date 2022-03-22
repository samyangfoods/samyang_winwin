import axios from "axios";
import { basicApiUrl } from "./UrlSetting";

export const usePromotions = async (token) => {
  const {
    data: { promotions },
  } = await axios.get(`${basicApiUrl}/promotion`, {
    headers: { token, "Access-Control-Allow-Origin": true },
  });

  return promotions;
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
  formData.append("start_date", start_date);
  formData.append("end_date", end_date);
  formData.append("promotionType", promotionType);
  formData.append("promotionCost", promotionCost);
  formData.append("file1", image[0]);
  formData.append("file2", image[1]);
  formData.append("file3", image[2]);
  formData.append("file4", image[3]);
  formData.append("promotionDetail", JSON.stringify(promotionDetail));

  const { data } = await axios.post(`${basicApiUrl}/promotion`, formData, {
    headers: { token },
  });

  console.log(data);

  return data;
};

export const usePromotionUpdate = async (token, promotionObj, promotionId) => {
  const formData = new FormData();
  const { marketName, images, start_date, end_date, promotionDetail } =
    promotionObj;

  formData.append("marketName", marketName);
  formData.append("start_date", start_date);
  formData.append("end_date", end_date);
  formData.append("file1", images[0]);
  formData.append("file2", images[1]);
  formData.append("file3", images[2]);
  formData.append("file4", images[3]);
  formData.append("promotionDetail", JSON.stringify(promotionDetail));

  const { data } = await axios.put(
    `${basicApiUrl}/promotion/${promotionId}`,
    formData,
    {
      headers: { token },
    }
  );

  if (data) {
    return true;
  } else {
    return false;
  }
};
