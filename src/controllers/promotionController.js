import mongoose from 'mongoose'
import expressAsyncHandler from 'express-async-handler'
import { Promotion } from '../models/Promotion.js'
import { User } from '../models/User.js'
const { ObjectId } = mongoose.Types
import { s3, getSignedUrl } from '../../aws.js'

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

// @desc    Fetch single promotion
// @route   Post   /api/promotion
// @access  Private
const createPromotion = expressAsyncHandler(async (req, res) => {
  // console.log(req.files);
  console.log(req.body)
  const {
    marketName,
    marketAddress,
    pos,
    start_date,
    end_date,
    promotionType,
    promotionDetail,
  } = req.body

  const images = {}

  console.log('req.files', req.files)

  // if (req.file) {
  //   userImage = req.file.key.replace('raw/', '')
  // } else {
  //   userImage = ''
  // }

  if (req.files.file1) images.img1 = req.files.file1[0].key.replace('raw/', '')
  if (req.files.file2) images.img2 = req.files.file2[0].key.replace('raw/', '')
  if (req.files.file3) images.img3 = req.files.file3[0].key.replace('raw/', '')
  if (req.files.file4) images.img4 = req.files.file4[0].key.replace('raw/', '')

  // if (req.files.file1) images.img1 = req.files.file1[0].filename
  // if (req.files.file2) images.img2 = req.files.file2[0].filename
  // if (req.files.file3) images.img3 = req.files.file3[0].filename
  // if (req.files.file4) images.img4 = req.files.file4[0].filename

  // const images = {
  //   img1: req.files.file1[0].filename,
  //   img2: req.files.file2[0].filename,
  //   img3: req.files.file3[0].filename,
  //   img4: req.files.file4[0].filename,
  // }

  const { promotionCost } = Number(req.body.promotionCost)

  console.log('PromotionImage', images)

  // Promotion Validation
  if (marketName && typeof marketName !== 'string')
    return res.status(400).send({ err: 'superMarketName must be String' })
  if (marketAddress && typeof marketAddress !== 'string')
    return res.status(400).send({ err: 'address must be String' })
  if (pos && typeof pos !== 'string')
    return res.status(400).send({ err: 'pos must be String' })
  if (start_date && typeof start_date !== 'string')
    return res.status(400).send({ err: 'start_date must be string' })
  if (end_date && typeof end_date !== 'string')
    return res.status(400).send({ err: 'end_date must be String' })
  if (promotionType && typeof promotionType !== 'string')
    return res.status(400).send({ err: 'promotionType must be String' })
  if (promotionCost && typeof promotionCost !== 'number')
    return res.status(400).send({ err: 'promotionCost must be Number' })
  // Promotion Detail Validation
  if (promotionDetail && typeof promotionDetail !== 'string')
    return res.status(400).send({ err: 'promotionDetail must be String' })

  let promotion = new Promotion({
    ...req.body,
    images,
    user: req.user,
  })

  await promotion.save()
  return res.send({ promotion })
})

// @desc    Update a promotion
// @route   Put   /api/promotion/:promotionId
// @access  Private
const updatePromotionById = expressAsyncHandler(async (req, res) => {
  const { promotionId } = req.params
  const {
    start_date,
    end_date,
    promotionType,
    promotionCost,
    promotionDetail,
  } = req.body

  console.log('req.body', req.body)
  console.log('req', req)

  if (
    !start_date &&
    !end_date &&
    !promotionType &&
    !promotionCost &&
    !promotionDetail
  )
    return res.send({ err: 'At least one value is required !!' })

  let promotion = await Promotion.findById(promotionId)

  // 이미지가 있다면 바로 프론트에서 받고 추가된다면 람다를 거치도록
  //

  // const newImages = {}

  // if (images.img1) {
  //   newImages.push(images.img1)
  // }

  // if (images.img2) {
  //   newImages.push(images.img2)
  // }

  // if (images.img3) {
  //   newImages.push(images.img3)
  // }

  // if (images.img4) {
  //   newImages.push(images.img4)
  // }

  // if (req.files.file1)
  //   newImages.img1 = req.files.file1[0].key.replace('raw/', '')
  // if (req.files.file2)
  //   newImages.img2 = req.files.file2[0].key.replace('raw/', '')
  // if (req.files.file3)
  //   newImages.img3 = req.files.file3[0].key.replace('raw/', '')
  // if (req.files.file4)
  //   newImages.img4 = req.files.file4[0].key.replace('raw/', '')

  console.log('Promotion', promotion)
  const sampleObject = promotion.images

  if (req.files.file1)
    sampleObject.img1 = req.files.file1[0].key.replace('raw/', '')

  console.log('sampleObject.img1', sampleObject.img1)

  if (req.files.file2)
    sampleObject.img2 = req.files.file2[0].key.replace('raw/', '')

  console.log('sampleObject.img2', sampleObject.img2)

  if (req.files.file3)
    sampleObject.img3 = req.files.file3[0].key.replace('raw/', '')
  console.log('sampleObject.img3', sampleObject.img3)

  if (req.files.file4)
    sampleObject.img4 = req.files.file4[0].key.replace('raw/', '')

  console.log('SmapleObject', sampleObject)

  if (sampleObject) promotion.images = sampleObject
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
  const promotions = await Promotion.find({
    'user._id': req.user.id,
    promotionType: { $regex: text, $options: 'i' },
  })

  // const promotions = await Promotion.find({
  //   'user._id': req.user.id,
  //   $month: { start_date: new Date(text1) },
  // })

  return res.send(promotions)
})

export {
  getPromotions,
  getPromotionById,
  createPromotion,
  updatePromotionById,
  patchPromotionById,
  deletePromotionById,
  searchPromotions,
  preSigned,
}
