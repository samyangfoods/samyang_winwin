import jwt from 'jsonwebtoken'
import expressAsyncHandler from 'express-async-handler'
import { User } from '../models/User.js'

const protect = expressAsyncHandler(async (req, res, next) => {
  const { token } = req.headers

  try {
    if (!token) {
      res.status(401)
      throw new Error('Not authorized, no token !!!')
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    req.user = await User.findById(decoded.id).select('-password')

    next()
  } catch (error) {
    console.error('authMiddleware', error)
    res.status(401)
    throw new Error('Not authorized, token failed !!')
  }
  // }
})

export { protect }
