import mongoose from 'mongoose'
import expressAsyncHandler from 'express-async-handler'
import { Order } from '../models/Order.js'
const { ObjectId } = mongoose.Types

// @desc    Fetch single order
// @route   Post   /api/order
// @access  Private
const createOrder = expressAsyncHandler(async (req, res) => {
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
  return res.status(200).json({ order, message: '주문 등록이 성공했습니다.!!' })
})

// @desc    Fetch all orders
// @route   Get   /api/order
// @access  Private
const getOrders = expressAsyncHandler(async (req, res) => {
  // page가 없으면 0으로 처리
  let { page = 0 } = req.query
  page = parseInt(page)

  const myOrders = await Order.find({ 'user._id': req.user.id })
    // UpdatedAt 최근순으로
    .sort({ updatedAt: -1 })
    // 스킵숫자
    .skip(page * 3)
    // 프론트로 보내줄 숫자
    .limit(20)
  // .populate([
  //   { path: 'user' },
  //   { path: 'comments', populate: { path: 'user' } },
  // ])

  return res.send({ myOrders })
})

// @desc    Fetch single promotion
// @route   Get   /api/promotion/:promotionId
// @access  Private
const getOrderById = expressAsyncHandler(async (req, res) => {
  const { orderId } = req.params
  if (!ObjectId.isValid(orderId))
    return res.status(400).send({ err: 'invalid orderId' })

  const order = await Order.findOne({ _id: orderId })

  return res.send({ order })
})

// @desc    Update a order
// @route   Put   /api/order/:orderId
// @access  Private
const updateOrderById = expressAsyncHandler(async (req, res) => {
  const { orderId } = req.params
  const {
    deliveryPlace,
    deliveryAddress,
    deliveryDate,
    deliveryTime,
    orderDetail,
  } = req.body

  if (
    !deliveryPlace &&
    !deliveryAddress &&
    !deliveryDate &&
    !deliveryTime &&
    !orderDetail
  )
    return res.send({ err: '1개 이상의 수정값이 필요합니다.!' })

  const order = await Order.findOne({ _id: orderId })

  console.log('Order', order)

  if (deliveryPlace) order.deliveryPlace = deliveryPlace
  if (deliveryAddress) order.deliveryAddress = deliveryAddress
  if (deliveryDate) order.deliveryDate = deliveryDate
  if (deliveryTime) order.deliveryTime = deliveryTime
  if (orderDetail) order.orderDetail = orderDetail

  await order.save()

  return res.status(200).json({ order, message: '수정이 완료되었습니다.!!' })
})

// @desc    Delete a order
// @route   delete   /api/order/:orderId
// @access  Private
const deleteOrderById = expressAsyncHandler(async (req, res) => {
  const { orderId } = req.params
  if (!ObjectId.isValid(orderId))
    res.status(400).send({ err: 'invalid orderId' })
  const order = await Order.findOneAndDelete({ _id: orderId })

  return res.status(200).json({ order, message: '주문이 삭제되었습니다. !!' })
})

export {
  createOrder,
  getOrders,
  deleteOrderById,
  getOrderById,
  updateOrderById,
}
