import mongoose from 'mongoose'
import expressAsyncHandler from 'express-async-handler'
import { Image } from '../models/Image.js'

// @desc    create a image
// @route   Post   /api/image
// @access  Private
const createUserImage = expressAsyncHandler(async (req, res) => {
  console.log(req.file)
  const image = await new Image({
    user: req.user,
    key: req.file.filename,
    originalFileName: req.file.originalname,
  }).save()
  return res.send(image)
})

// @desc    get user image
// @route   Get   /api/image/:userId
// @access  Private
const getUserImage = expressAsyncHandler(async (req, res) => {
  const image = await Image.find({ 'user._id': req.user._id })

  return res.send({ image })
})

export { createUserImage, getUserImage }
