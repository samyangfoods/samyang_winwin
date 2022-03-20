import { Platform } from "react-native";

// Local Setting
export const basicApiUrl =
  Platform.OS === "android"
    ? "http://10.0.2.2:5000/api"
    : "http://localhost:5000/api";

export const socketUrl =
  Platform.OS === "android" ? "http://10.0.2.2:5000" : "http://localhost:5000";

// Production Setting
// export const basicApiUrl = "https://api.samyangfoods.site/api";
// export const socketUrl = "https://api.samyangfoods.site/";
