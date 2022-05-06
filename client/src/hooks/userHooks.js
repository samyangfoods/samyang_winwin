import axios from 'axios'
import * as SecureStore from 'expo-secure-store'
import { basicApiUrl } from './UrlSetting'

export const useLogin = async (userId, password) => {
  try {
    const { data } = await axios.post(`${basicApiUrl}/user/login`, {
      userId,
      password,
    })

    await SecureStore.setItemAsync('token', data.token)

    return data
  } catch (error) {
    console.log('userLogin', error)
    return
  }
}

export const useRegister = async (userObj) => {
  console.log('userHooks, useRegister: 회원가입이 시작됩니다.')
  const role = 'dealer'

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
  } = userObj

  const formData = new FormData()

  formData.append('userName', userName)
  formData.append('userId', userId)
  formData.append('password', password)
  formData.append('passwordConfirmation', passwordConfirmation)
  formData.append('channel', channel)
  formData.append('storeName', storeName)
  formData.append('phoneNumber', phoneNumber)
  formData.append('userAddress', userAddress)
  formData.append('userImage', userImage)

  formData.append('role', role)

  const response = await axios.post(`${basicApiUrl}/user/register`, formData)

  console.log('response 🔥', response)

  return response
}

export const useProfileChange = async (userObj, token) => {
  console.log('✅ userProfileChange: 프로필 변경이 시작됩니다.')
  const { channel, userName, storeName, userAddress, phoneNumber, userImage } =
    userObj

  const formData = new FormData()

  formData.append('userName', userName)
  formData.append('channel', channel)
  formData.append('storeName', storeName)
  formData.append('phoneNumber', phoneNumber)
  formData.append('userAddress', userAddress)
  formData.append('userImage', userImage)

  const { data } = await axios.put(`${basicApiUrl}/user/update`, formData, {
    headers: { authorization: `Bearer ${token}` },
  })

  return data
}

export const useTokenLogin = async (token) => {
  // sample..
  const { data } = await axios.get(`${basicApiUrl}/user/token`, {
    headers: { authorization: `Bearer ${token}` },
  })

  console.log('🔥🔥', data)

  return data._id
}
