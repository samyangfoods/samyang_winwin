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
import { upload } from '../middleware/imageUpload.js'

// const upload = multer({
//   storage: multer.diskStorage({
//     destination(req, file, done) {
//       done(null, 'uploads')
//     },
//     filename(req, file, done) {
//       //abc.png
//       const ext = path.extname(file.originalname) // 확장자 추출
//       const basename = path.basename(file.originalname, ext) //abc
//       done(null, basename + new Date().getTime() + ext) // abc515585255852.png
//     },
//   }),
//   limits: { fileSize: 1024 * 1024 * 20 }, //20MB
// })

userRouter.route('/login').post(authUser)
userRouter.route('/register').post(upload.single('image'), registerUser)
userRouter.route('/profile').get(protect, getUserProfile)
userRouter.route('/:userId').get(protect, getUser)
userRouter.route('/:userId').put(protect, updateUser)
userRouter.route('/:userId').delete(protect, deleteUser)

export default userRouter
