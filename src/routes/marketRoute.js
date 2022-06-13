import { Router } from 'express'
const marketRouter = Router({ mergeParams: true })
import {
  getMarketById,
  createMarket,
  updateMarketById,
  deleteMarketById,
  searchMarketsByUserId,
  getMarketWithUserId,
} from '../controllers/marketController.js'

import { protect } from '../middleware/authMiddleware.js'
import { upload } from '../middleware/imageUpload.js'

marketRouter.route('/search').post(protect, searchMarketsByUserId)
// marketRouter.route("/").get(protect, getMarkets);
marketRouter
  .route('/')
  .post(protect, upload.single('marketImage'), createMarket)

marketRouter.route('/').get(protect, getMarketWithUserId)

marketRouter.route('/list/:marketId([0-9a-f]{24})').get(protect, getMarketById)
marketRouter
  .route('/list/:marketId([0-9a-f]{24})')
  .put(protect, upload.single('marketImage'), updateMarketById)
marketRouter
  .route('/list/:marketId([0-9a-f]{24})')
  .delete(protect, deleteMarketById)

export default marketRouter
