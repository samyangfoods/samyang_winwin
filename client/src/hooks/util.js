import * as ImagePicker from "expo-image-picker";

export const useImageBase64 = async () => {
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
      name: result.uri,
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
