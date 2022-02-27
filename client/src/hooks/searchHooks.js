import axios from "axios";
import { basicApiUrl } from "./userHooks";

// 자동완성으로 추출된 소매점을 터치하면 상세 화면으로 이동
export const useSearchText = async (text) => {
  // example..
  const { data } = await axios.post(`${basicApiUrl}/search`);
};

// 돋보기 아이콘을 터치하면 화면에 소매점 정보를 표시함 -> 터치하면 상세 화면으로 이동
export const useSearchApiWithMarketName = async () => {};
