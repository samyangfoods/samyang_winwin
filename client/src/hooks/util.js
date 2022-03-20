<<<<<<< HEAD
import * as ImagePicker from 'expo-image-picker'
=======
import * as ImagePicker from "expo-image-picker";
import { Platform } from "react-native";
>>>>>>> cfd6e9232634ab84dafcfd02e4a157b9400839b2

export const useImageBase64 = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    base64: true,
    aspect: [4, 3],
    quality: 1,
  })

  if (!result.cancelled) {
    const imageFormat = 'JPEG' || 'JPG' || 'PNG'
    const base64Image = `data:${imageFormat};base64,${result.base64}`

<<<<<<< HEAD
    return { uri: result.uri, base64: base64Image }
=======
    return {
      uri: result.uri,
      type:
        Platform.OS === "android" ? `image/jpeg` || `image/png` : `image/jpg`,
      name: result.uri,
    };
>>>>>>> cfd6e9232634ab84dafcfd02e4a157b9400839b2
  }
}

export const useFileRead = (imageUri) => {
  const reader = new FileReader();
  reader.readAsDataURL(imageUri);

  const { result } = reader;

  return result;
};

export const usePhoneNumberFormat = (num) => {
  let formatNum

  formatNum = num?.replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3')

  return formatNum
}

export const useCleanUpPhoneNumberForm = (num) => {
  let formatNum

  formatNum = num?.replace(/-/gi, '')

  return formatNum
}
