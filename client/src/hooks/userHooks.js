import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { basicApiUrl } from "./UrlSetting";
import { RNS3 } from "react-native-aws3";

export const useLogin = async (userId, password) => {
  try {
    const { data } = await axios.post(`${basicApiUrl}/user/login`, {
      userId,
      password,
    });

    await SecureStore.setItemAsync("token", data.token);

    return data;
  } catch (error) {
    console.log("userLogin", error);
    return;
  }
};

export const useRegister = async (userObj) => {
  console.log("🔥UserHooks coming here🔥");

  const {
    userName,
    userId,
    password,
    passwordConfirmation,
    channel,
    storeName,
    phoneNumber,
    userImage,
    userAddress,
  } = userObj;
  const { uri, type, name, base64 } = userImage;
  const objForPreSigned = { type, name };
  const getBlob = async (fileUri) => {
    const resp = await fetch(fileUri);
    const imageBody = await resp.blob();
    return imageBody;
  };

  const { data } = await axios.post(`${basicApiUrl}/user/preSigned`, {
    objForPreSigned,
  });

  const { presigned } = data;

  const imageBody = await getBlob(uri);
  const response = await axios.put(presigned.url, { imageBody });

  console.log("response 🔥", response);

  return response;
};

export const useProfileChange = async (userId, userObj, token) => {
  const { data } = await axios.put(`${basicApiUrl}/user/${userId}`, userObj, {
    headers: { token },
  });

  return data;
};

export const useTokenLogin = async (token) => {
  // sample..
  const { data } = await axios.get(`${basicApiUrl}/user/token`, {
    headers: { token },
  });

  return data._id;
};

// formData.append('key', s3Data.s3Key);
// formData.append('Content-Type', fileData.type);
// formData.append('AWSAccessKeyId', s3Data.awsAccessKey);
// formData.append('acl', 'public-read');
// formData.append('policy', s3Data.s3Policy);
// formData.append('signature', s3Data.s3Signature);

// formData.append('file', sendData.data);

// const formData = new FormData();

// // formData.append("userName", userName);
// // formData.append("userId", userId);
// // formData.append("password", password);
// // formData.append("passwordConfirmation", passwordConfirmation);
// // formData.append("channel", channel);
// // formData.append("storeName", storeName);
// // formData.append("phoneNumber", phoneNumber);
// // formData.append("userAddress", userAddress);
// // formData.append("userImage", userImage);

// const objForPreSigned = { type, name };

// // const { data } = await axios.post(`${basicApiUrl}/user/preSigned`, {
// //   objForPreSigned,
// // });

// const { presigned } = data;

// // uri: "assets-library://asset/asset.PNG?id=655DBE66-8008-459C-9358-914E1FB532DD&ext=PNG",
// // name: "image.png",
// // type: "image/png"
// const file = { uri, name, type };

// // keyPrefix: "uploads/",
// // bucket: "your-bucket",
// // region: "us-east-1",
// // accessKey: "your-access-key",
// // secretKey: "your-secret-key",
// // successActionStatus: 201,
// const options = {
//   keyPrefix: "uploads/",
//   bucket: "samyang-bucket",
//   region: "ap-northeast-2",
//   accessKey: "your-access-key",
//   secretKey: "your-secret-key",
//   successActionStatus: 201,
// };

// // const response = RNS3.put(file, options);

// // return response;

// // formData.append(key, presigned.fields)
// // formData.append("Content-Type", type)
// // formData.append("file", { uri, type, name })
