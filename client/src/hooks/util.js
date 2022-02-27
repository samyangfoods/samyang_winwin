import * as ImagePicker from "expo-image-picker";

export const useImageBase64 = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    base64: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.cancelled) {
    const imageFormat = "JPEG" || "JPG" || "PNG";
    const base64Image = `data:${imageFormat};base64,${result.base64}`;

    return base64Image;
  }
};
