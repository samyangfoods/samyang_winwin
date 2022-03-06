import mongoose from 'mongoose'

const ImageSchema = new mongoose.Schema(
  {
    // upload폴더에 저장되는 파일 이름
    key: { type: String, required: true },
    // 데이터베이스에 저장되는 파일이름
    originalFileName: { type: String, required: true },
  },
  { timestamps: true }
)

const Image = mongoose.model('image', ImageSchema)

export { Image, ImageSchema }
