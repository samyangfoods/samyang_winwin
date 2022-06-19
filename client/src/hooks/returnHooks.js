import axios from 'axios'
import { basicApiUrl } from './urlSetting'

export const useReturnListWithId = async (token) => {
  const { data } = await axios.get(`${basicApiUrl}/return`, {
    headers: { authorization: `Bearer ${token}` },
  })

  return data
}

export const useReturnCreate = async (returnObj, token) => {
  const {
    marketImage,
    userId,
    marketName,
    size,
    pos,
    phoneNumber: phone,
    income: averageSales,
    address: marketAddress,
  } = returnObj

  const formData = new FormData()

  formData.append('marketImage', marketImage)
  formData.append('marketName', marketName)
  formData.append('size', size)
  formData.append('pos', pos)
  formData.append('phone', phone)
  formData.append('userId', userId)
  formData.append('averageSales', averageSales)
  formData.append('marketAddress', marketAddress)

  const { data } = await axios.post(`${basicApiUrl}/return`, formData, {
    headers: { authorization: `Bearer ${token}` },
  })

  return data
}

export const useReturnDelete = async (returnId, token) => {
  const { config } = await axios.delete(
    `${basicApiUrl}/return/list/${returnId}`,
    {
      headers: { authorization: `Bearer ${token}` },
    }
  )

  return config
}

export const useReturnInfo = async (returnId, token) => {
  const { data } = await axios.get(`${basicApiUrl}/return/list/${returnId}`, {
    headers: { authorization: `Bearer ${token}` },
  })

  return data.return
}

// NTC
export const useReturnUpdate = async (returnObj, returnId, token) => {
  const {
    marketImage,
    userId,
    marketName,
    size,
    pos,
    phoneNumber: phone,
    income: averageSales,
    address: marketAddress,
  } = returnObj

  const formData = new FormData()

  formData.append('marketImage', marketImage)
  formData.append('marketName', marketName)
  formData.append('size', size)
  formData.append('pos', pos)
  formData.append('phone', phone)
  formData.append('userId', userId)
  formData.append('averageSales', averageSales)
  formData.append('marketAddress', marketAddress)

  const { data } = await axios.put(
    `${basicApiUrl}/return/list/${returnId}`,
    formData,
    {
      headers: { authorization: `Bearer ${token}` },
    }
  )

  return data
}
