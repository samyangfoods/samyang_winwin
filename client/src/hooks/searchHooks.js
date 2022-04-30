import axios from "axios";
import { basicApiUrl } from "./UrlSetting";

// Promotion Type 자동완성으로 추출된 소매점을 터치하면 상세 화면으로 이동
// TODO: 최대 5개 로드하기
// 돋보기 아이콘을 터치하면 화면에 소매점 정보를 표시함 -> 터치하면 상세 화면으로 이동
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

export const useSearchText = async (token, text, routeName) => {
  switch (routeName) {
    case "행사현황":
      const dataWithPromotionType = await useSearchApiWithPromotionType(
        token,
        text
      );

    case "소매점 목록":
      const dataWithMarketName = await useSearchApiWithMarketName(token, text);
      return dataWithMarketName;

    default:
      return;
  }
};
