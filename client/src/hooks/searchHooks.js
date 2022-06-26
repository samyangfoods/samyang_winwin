import axios from "axios";
import { basicApiUrl } from "./urlSetting";

export const useSearch = async (
  promotionArray,
  dateData,
  promotion,
  end,
  etc
) => {
  let sampleArr = [];

  await promotionArray.map((data) => {
    if (
      (new Date(data.start_date) <= dateData &&
        promotion &&
        data.promotionType == "전단행사") ||
      (end && data.promotionType == "엔드행사") ||
      (etc && data.promotionType == "기타행사")
    ) {
      sampleArr.push(data);
    }
  });

  console.log("I m working!!!", Date.now());
  console.log("✅✅✅", sampleArr.length);
  console.log("🔥🔥🔥🔥🔥🔥🔥");

  return sampleArr;
};

export const useSearchApiWithPromotionType = async (token, text) => {
  const { promotions } = await axios.post(
    `${basicApiUrl}/promotion/search`,
    { text },
    {
      headers: {
        authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": true,
      },
    }
  );
  return promotions;
};

export const useSearchApiWithMarketName = async (token, text) => {
  const { data } = await axios.post(
    `${basicApiUrl}/market/search`,
    { text },
    {
      headers: {
        authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": true,
      },
    }
  );

  return data;
};
