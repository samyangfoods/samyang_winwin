import { Platform } from "react-native";

const PORT = 4000;

// Local Setting
export const basicApiUrl = "http://api.samyangfoods.site/api";
// "http://3.39.151.104/api";
// Platform.OS === "android"
//   ? `http://10.0.2.2:${PORT}/api`
//   : `http://localhost:${PORT}/api`;

export const socketUrl = "http://api.samyangfoods.site/";
// "http://3.39.151.104/";
// Platform.OS === "android"
//   ? `http://10.0.2.2:${PORT}`
//   : `http://localhost:${PORT}`;

export const imageW140 =
  "https://samyang-bucket.s3.ap-northeast-2.amazonaws.com/w140/";