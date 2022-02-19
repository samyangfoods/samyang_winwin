import { Router } from 'express'

// Image Upload
import { v4 } from 'uuid'
import multer from 'multer'
import mime from 'mime-types'
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './uploads'),
  filename: (req, file, cb) =>
    cb(null, `${v4()}.${mime.extension(file.mimetype)}`),
})
const upload = multer({
  storage,
  // 이미지 타입 설정
  fileFilter: (req, file, cb) => {
    if (['image/jpeg', 'image/png'].includes(file.mimetype)) cb(null, true)
    else {
      cb(new Error('invalid file type !!'))
    }
  },
  // 이미지 사이즈 제한
  limits: {
    // 5Mbyte 이하일때
    fileSize: 1024 * 1024 * 5,
  },
})

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

userRouter.route('/profile').get(protect, getUserProfile)
userRouter.route('/login').post(authUser)
userRouter.route('/register').post(upload.single('userImage'), registerUser)
userRouter.route('/').get(getUsers)
userRouter.route('/:userId').get(getUser)
userRouter.route('/:userId').put(protect, updateUser)
userRouter.route('/:userId').delete(protect, deleteUser)

export default userRouter
