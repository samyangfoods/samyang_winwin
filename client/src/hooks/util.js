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
    const imageFormat = "JPEG" || "JPG" || "PNG";
    const base64Image = `data:${imageFormat};base64,${result.base64}`;

    return {
      uri: result.uri,
      type: result.type,
      name: result.base64.slice(4, 10),
      base64: base64Image,
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
