import { Router } from 'express'
const userRouter = Router()
import {
  authUser,
  registerUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  getUserProfile,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

userRouter.route('/login').post(authUser)
userRouter.route('/register').post(registerUser)
userRouter.route('/profile').get(protect, getUserProfile)
userRouter.route('/:userId').get(protect, getUser)
userRouter.route('/:userId').put(protect, updateUser)
userRouter.route('/:userId').delete(protect, deleteUser)

export default userRouter
