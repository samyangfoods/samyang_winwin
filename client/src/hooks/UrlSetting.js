import { Platform } from "react-native";

export const basicApiUrl =
  Platform.OS === "android"
    ? "http://10.0.2.2:5000/api"
    : "http://localhost:5000/api";

export const socketUrl =
  Platform.OS === "android" ? "http://10.0.2.2:5000" : "http://localhost:5000";
