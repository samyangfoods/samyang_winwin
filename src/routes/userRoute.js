import { Router } from 'express'
const userRouter = Router()
import {
  authUser,
  registerUser,
  getUser,
  updateUser,
  deleteUser,
  getUserProfile,
  preSigned,
  getUserProfileWithToken,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'
import { upload } from '../middleware/imageUpload.js'

userRouter.route('/login').post(authUser)
userRouter.route('/register').post(upload.single('userImage'), registerUser)
userRouter.route('/update').put(protect, upload.single('userImage'), updateUser)
userRouter.route('/profile').get(protect, getUserProfile)

//π₯π₯π₯π₯π₯π₯π₯ λ‘κ·ΈμΈ μ μ§λ₯Ό μν ν ν° μ΄μ©
userRouter.route('/token').get(protect, getUserProfileWithToken)
userRouter.route('/presigned').post(preSigned)

userRouter.route('/:userId').get(protect, getUser)
userRouter.route('/:userId').put(protect, updateUser)
userRouter.route('/:userId').delete(protect, deleteUser)

export default userRouter
