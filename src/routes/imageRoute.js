import { Router } from 'express'
const imageRouter = Router()
import { protect } from '../middleware/authMiddleware.js'
import { upload } from '../middleware/userImageUpload.js'
import {
  createUserImage,
  getUserImage,
} from '../controllers/imageController.js'

imageRouter
  .route('/user')
  .post(protect, upload.single('image'), createUserImage)

imageRouter.route('/user').get(protect, getUserImage)

export default imageRouter
