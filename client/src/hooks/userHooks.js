import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { basicApiUrl } from "./UrlSetting";
import * as FileSystem from 'expo-file-system';

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

  const formData = new FormData();

  // formData.append("userName", userName);
  // formData.append("userId", userId);
  // formData.append("password", password);
  // formData.append("passwordConfirmation", passwordConfirmation);
  // formData.append("channel", channel);
  // formData.append("storeName", storeName);
  // formData.append("phoneNumber", phoneNumber);
  // formData.append("userAddress", userAddress);
  // formData.append("userImage", userImage);

  const objForPreSigned = {
    type: userImage.type,
    name: userImage.name,
  }

  console.log("🔥UserHooks coming here🔥");

  const { data } = await axios.post(`${basicApiUrl}/user/preSigned`, {objForPreSigned})
  
  const { presigned } = data

  const fileSize = userImage.base64.length * (3 / 4) 

  // const newUserObj = {
  //   type: userImage.type,
  //   name: userImage.name,
  //   size: fileSize,
  //   lastModified: Date.now(),
  //   lastModifiedDate: new Date().,
  //   webkitRelativePath: ""
  // }


  const fileSystemResult = await FileSystem.getInfoAsync(userImage.uri)

  const {key} = presigned.fields



  // console.log("key", key)
  // console.log("type", userImage.type)
  // console.log("newUserObj", newUserObj)

  console.log(presigned.url)

  // const keyName = key
  // const hello = {
  //   "Content-Type": userImage.type,
  //   "file": newUserObj 
  // }
  // hello[keyName] = presigned.fields

  // console.log("🔥🔥🔥🔥🔥🔥🔥",hello)
  console.log("🔥🔥🔥🔥🔥🔥🔥", formData)


  const hello = new Promise(async(resolve, reject) => {
    formData.append(key, presigned.fields)
    formData.append("Content-Type", userImage.type)
    formData.append("file", {
      uri: userImage.uri,
      type: userImage.type,
      name: userImage.name
    })
    try {
      const { data: result } = await axios.post(presigned.url, formData,
        );
      resolve(result)
    } catch(error) {
      reject(error)
    }

  })

  return "Hello";
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
