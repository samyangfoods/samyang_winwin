import mongoose from 'mongoose'
import expressAsyncHandler from 'express-async-handler'
import { Image } from '../models/Image.js'
import { upload } from '../middleware/ImageUpload.js'

// @desc    create a image
// @route   Post   /api/image
// @access  Private
const createImage = expressAsyncHandler(
  upload.single('image'),
  async (req, res) => {
    console.log(req.file)
    const image = await new Image({
      key: req.file.filename,
      originalFileName: req.file.originalname,
    }).save()
    return res.send(image)
  }
)

export { createImage }
