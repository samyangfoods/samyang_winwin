import mongoose from 'mongoose'
import expressAsyncHandler from 'express-async-handler'
import { Market } from '../models/Market.js'
import { User } from '../models/User.js'
const { ObjectId } = mongoose.Types

// @desc    Fetch all markets
// @route   Get   /api/markets
// @access  Private
const getMarekets = expressAsyncHandler(async (req, res) => {
  // page가 없으면 0으로 처리
  let { page = 0 } = req.query
  page = parseInt(page)

  console.log('page :', page)
  const markets = await Market.find({})
    // UpdatedAt 최근순으로
    .sort({ updatedAt: -1 })
    // 스킵숫자
    .skip(page * 3)
    // 프론트로 보내줄 숫자
    .limit(3)
  // .populate([
  //   { path: 'user' },
  //   { path: 'comments', populate: { path: 'user' } },
  // ])

  return res.send({ markets })
})

// @desc    Fetch single market
// @route   Get   /api/market/:marketId
// @access  Private
const getMarketById = expressAsyncHandler(async (req, res) => {
  const { marketId } = req.params
  if (!ObjectId.isValid(marketId))
    return res.status(400).send({ err: 'invalid marketId' })

  const market = await Market.findOne({ _id: marketId })

  return res.send({ market })
})

// @desc    Fetch single promotion
// @route   Post   /api/promotion
// @access  Private
const createMarket = expressAsyncHandler(async (req, res) => {
  const {
    marketName,
    size,
    pos,
    phone,
    averageSales,
    marketAddress,
    marketImage,
    userId,
  } = req.body

  // Promotion Validation
  if (marketName && typeof marketName !== 'string')
    return res.status(400).send({ err: 'marketName must be String' })
  if (size && typeof size !== 'string')
    return res.status(400).send({ err: 'size must be String' })
  if (pos && typeof pos !== 'number')
    return res.status(400).send({ err: 'pos must be Number' })
  if (phone && typeof phone !== 'string')
    return res.status(400).send({ err: 'phone must be String' })
  if (averageSales && typeof averageSales !== 'string')
    return res.status(400).send({ err: 'averageSales must be String' })
  if (marketAddress && typeof marketAddress !== 'string')
    return res.status(400).send({ err: 'marketAddress must be string' })
  if (marketImage && typeof marketImage !== 'string')
    return res.status(400).send({ err: 'marketImage must be String' })

  // User Validation
  if (!ObjectId.isValid(userId))
    return res.status(400).send({ err: 'userId is invalid ' })

  let user = await User.findById(userId)
  if (!user) return res.status(400).send({ err: 'user does not exist !!' })

  let market = new Market({
    ...req.body,
    user,
  })

  await market.save()
  return res.send({ market })
})

// @desc    Update a market
// @route   Put   /api/market/:marketId
// @access  Private
const updatePromotionById = expressAsyncHandler(async (req, res) => {
  const { marketId } = req.params
  const {
    marketName,
    size,
    pos,
    phone,
    averageSales,
    marketAddress,
    marketImage,
  } = req.body

  if (
    !marketName &&
    !size &&
    !pos &&
    !phone &&
    !averageSales &&
    !marketAddress &&
    !marketImage
  )
    return res.send({ err: 'At least one value is required !!' })

  let market = await Market.findById(marketId)

  if (marketName) promotion.marketName = marketName
  if (size) promotion.size = size
  if (pos) promotion.pos = pos
  if (phone) promotion.phone = phone
  if (averageSales) promotion.averageSales = averageSales
  if (marketAddress) promotion.marketAddress = marketAddress
  if (marketImage) promotion.marketImage = marketImage

  await market.save()

  return res.send({ market })
})

// @desc    Delete a market
// @route   delete   /api/market/:marketId
// @access  Private
const deleteMarektById = expressAsyncHandler(async (req, res) => {
  const { marketId } = req.params
  if (!ObjectId.isValid(marketId))
    res.status(400).send({ err: 'invalid marketId' })
  const market = await Market.findOneAndDelete({ _id: marketId })

  return res.send({ market })
})

export { getMarekets, getMarketById, updatePromotionById, deleteMarektById }
