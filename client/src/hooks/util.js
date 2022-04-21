import * as ImagePicker from "expo-image-picker";

export const useImageUri = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    base64: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.cancelled) {
    return {
      uri: result.uri,
      type:
        Platform.OS === "android" ? `image/jpeg` || `image/png` : `image/jpg`,
      name: `${result.base64.slice(5, 10)}_${Date.now()}${
        Platform.OS === "android" ? `.jpeg` || `.png` : `.jpg`
      }`,
    };
  }
};

export const usePhoneNumberFormat = (num) => {
  let formatNum;

  formatNum = num?.replace(/(\d{3})(\d{3,4})(\d{4})/, "$1-$2-$3");

  return formatNum;
};

export const useCleanUpPhoneNumberForm = (num) => {
  let formatNum;

  formatNum = num?.replace(/-/gi, "");

  return formatNum;
};

export const useDateFormat = (date) => {
  const data = new Date(date);
  const month = data.getMonth() + 1;
  const day = data.getDate();

  const result = `${month}월 ${day}일`;

  return result;
};

export const usePromotionDuration = (startDate, endDate) => {
  const data = new Date(endDate) - new Date(startDate);
  const result = new Date(data).getDate();

  return `${result}일`;
};

export const useExpirationValidation = (today, endDate) => {
  if (new Date(endDate).getTime() > today.getTime()) {
    return true;
  } else {
    return false;
  }
};
