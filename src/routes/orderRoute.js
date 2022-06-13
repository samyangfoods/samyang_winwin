import express from 'express'
const orderRouter = express.Router()
import { createOrder } from '../controllers/orderController.js'

import { protect } from '../middleware/authMiddleware.js'

orderRouter.route('/').post(protect, createOrder)
// orderRouter.route('/').get(protect, getPromotions)
// orderRouter.route('/search').get(protect, searchPromotions)
// orderRouter.route('/:promotionId').get(protect, getPromotionById)
// orderRouter.route('/presigned').post(protect, preSigned)
// orderRouter.route('/:promotionId').put(protect, updatePromotionById)
// orderRouter.route('/:promotionId').delete(protect, deletePromotionById)

export default orderRouter
