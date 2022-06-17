import mongoose from 'mongoose'
import expressAsyncHandler from 'express-async-handler'
import { Order } from '../models/Order.js'
import { User } from '../models/User.js'
const { ObjectId } = mongoose.Types

// @desc    Fetch single promotion
// @route   Post   /api/promotion
// @access  Private
const createOrder = expressAsyncHandler(async (req, res) => {
  console.log(req.body)
  const {
    deliveryPlace,
    deliveryAddress,
    deliveryDate,
    deliveryTime,
    orderDetail,
  } = req.body

  // Order Validation
  if (deliveryPlace && typeof deliveryPlace !== 'string')
    return res.status(400).send({ err: 'deliveryPlace must be String' })
  if (deliveryAddress && typeof deliveryAddress !== 'string')
    return res.status(400).send({ err: 'deliveryAddress must be String' })
  if (deliveryDate && typeof deliveryDate !== 'string')
    return res.status(400).send({ err: 'deliveryDate must be String' })
  if (deliveryTime && typeof deliveryTime !== 'string')
    return res.status(400).send({ err: 'deliveryTime must be String' })
  if (orderDetail && typeof orderDetail !== 'string')
    return res.status(400).send({ err: 'orderDetail must be String' })

  let order = new Order({
    ...req.body,
    user: req.user,
  })

  await order.save()
  return res.send({ order })
})

// @desc    Fetch all promotions
// @route   Get   /api/promotion
// @access  Private
const getPromotions = expressAsyncHandler(async (req, res) => {
  // page가 없으면 0으로 처리
  let { page = 0 } = req.query
  page = parseInt(page)

  const promotions = await Promotion.find({ 'user._id': req.user.id })
    // UpdatedAt 최근순으로
    .sort({ updatedAt: -1 })
    // 스킵숫자
    .skip(page * 3)
    // 프론트로 보내줄 숫자
    .limit(9)
  // .populate([
  //   { path: 'user' },
  //   { path: 'comments', populate: { path: 'user' } },
  // ])

  return res.send({ promotions })
})

// @desc    Fetch single promotion
// @route   Get   /api/promotion/:promotionId
// @access  Private
const getPromotionById = expressAsyncHandler(async (req, res) => {
  const { promotionId } = req.params
  if (!ObjectId.isValid(promotionId))
    return res.status(400).send({ err: 'invalid promotionId' })

  const promotion = await Promotion.findOne({ _id: promotionId })

  // 페이지가 몇개인지 확인
  // const commentCount = await Comment.find({
  //   promotion: promotionId,
  // }).countDocuments()

  return res.send({ promotion })
})

const preSigned = expressAsyncHandler(async (req, res) => {
  console.log(req.body)

  const imageFiles = req.body

  const presignedData = await Promise.all(
    imageFiles.map(async (imagefile, index) => {
      const imageKey = imagefile.name
      const key = `raw/${imageKey}`
      const presigned = await getSignedUrl({ key })
      return { imageKey, presigned }
    })
  )
  return res.json(presignedData)
})

// @desc    Update a promotion
// @route   Put   /api/promotion/:promotionId
// @access  Private
const updatePromotionById = expressAsyncHandler(async (req, res) => {
  const { promotionId } = req.params
  const {
    superMarketName,
    address,
    pos,
    image,
    start_date,
    end_date,
    promotionType,
    promotionCost,
    promotionDetail,
  } = req.body

  if (
    !superMarketName &&
    !address &&
    !pos &&
    !image &&
    !start_date &&
    !end_date &&
    !promotionType &&
    !promotionCost &&
    !promotionDetail
  )
    return res.send({ err: 'At least one value is required !!' })

  let promotion = await Promotion.findById(promotionId)

  const images = {}

  if (req.files.file1) images.img1 = req.files.file1[0].key.replace('raw/', '')
  if (req.files.file2) images.img2 = req.files.file2[0].key.replace('raw/', '')
  if (req.files.file3) images.img3 = req.files.file3[0].key.replace('raw/', '')
  if (req.files.file4) images.img4 = req.files.file4[0].key.replace('raw/', '')

  if (superMarketName) promotion.superMarketName = superMarketName
  if (address) promotion.address = address
  if (pos) promotion.pos = pos
  if (images) promotion.images = images
  if (start_date) promotion.start_date = start_date
  if (end_date) promotion.end_date = end_date
  if (promotionType) promotion.promotionType = promotionType
  if (promotionCost) promotion.promotionCost = promotionCost
  if (promotionDetail) promotion.promotionDetail = promotionDetail

  await promotion.save()

  return res.send({ promotion })
})

// @desc    Patch a promotion
// @route   patch   /api/promotion/:promotionId/live
// @access  Private
const patchPromotionById = expressAsyncHandler(async (req, res) => {
  const { promotionId } = req.params
  if (!ObjectId.isValid(promotionId))
    return res.status(400).send({ err: 'invalid promotionId' })
  const { islive } = req.body
  if (typeof islive !== 'boolean')
    res.status(400).send({ err: 'boolean islive is required' })

  const promotion = await Promotion.findByIdAndUpdate(
    promotionId,
    { islive },
    { new: true }
  )
  res.send({ promotion })
})

// @desc    Delete a promotion
// @route   delete   /api/promotion/:promotionId
// @access  Private
const deletePromotionById = expressAsyncHandler(async (req, res) => {
  const { promotionId } = req.params
  if (!ObjectId.isValid(promotionId))
    res.status(400).send({ err: 'invalid promotionId' })
  const promotion = await Promotion.findOneAndDelete({ _id: promotionId })

  return res.send({ promotion })
})

const searchPromotions = expressAsyncHandler(async (req, res) => {
  const { text } = req.body
  const promotions = new Promotion.find({ promotionType: text })

  return promotions
})

export { createOrder }
