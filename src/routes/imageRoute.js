import { Router } from 'express'
const imageRouter = Router()
import { protect } from '../middleware/authMiddleware.js'
import { createImage } from '../controllers/imageController.js'

imageRouter.route('/').post(protect, createImage)

export default imageRouter
