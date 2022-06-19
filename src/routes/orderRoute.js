import express from 'express'
const orderRouter = express.Router()
import {
  createOrder,
  getOrders,
  deleteOrderById,
  getOrderById,
  updateOrderById,
} from '../controllers/orderController.js'

import { protect } from '../middleware/authMiddleware.js'

orderRouter.route('/').post(protect, createOrder)
orderRouter.route('/').get(protect, getOrders)
orderRouter.route('/:orderId').get(protect, getOrderById)
orderRouter.route('/:orderId').delete(protect, deleteOrderById)
orderRouter.route('/:orderId').put(protect, updateOrderById)

export default orderRouter
