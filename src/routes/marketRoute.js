import { Router } from 'express'
const marketRouter = Router({ mergeParams: true })
import {
  getMarkets,
  getMarketById,
  createMarket,
  updateMarketById,
  deleteMarketById,
  searchMarkets,
} from '../controllers/marketController.js'

marketRouter.route('/search').get(searchMarkets)
marketRouter.route('/').get(getMarkets)
marketRouter.route('/:marketId').get(getMarketById)
marketRouter.route('/').post(createMarket)
marketRouter.route('/:marketId').put(updateMarketById)
marketRouter.route('/:marketId').delete(deleteMarketById)

export default marketRouter
