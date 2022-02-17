import express from 'express'
const marketRouter = express.Router()
import {
  getMarket,
  getMarketById,
  createMarket,
  updateMarketById,
  deleteMarketById,
} from '../controllers/promotionController.js'

marketRouter.route('/').get(getMarket)
marketRouter.route('/:marketId').get(getMarketById)
marketRouter.route('/').post(createMarket)
marketRouter.route('/:marketId').put(updateMarketById)
marketRouter.route('/:marketId').delete(deleteMarketById)

export default promotionRouter
