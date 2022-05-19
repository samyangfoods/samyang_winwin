import multer from 'multer'
import multerS3 from 'multer-s3'
import { s3 } from '../../aws.js'
import dotenv from 'dotenv'
import mime from 'mime-types'
import { v4 as uuidv4 } from 'uuid'

dotenv.config()

const { BUCKET_NAME } = process.env

const storage = multerS3({
  s3,
  bucket: BUCKET_NAME,
  key: (req, file, cb) => {
    cb(null, `raw/${uuidv4()}.${mime.extension(file.mimetype)}`)
  },
})

const upload = multer({
  storage,
  // 이미지 파일만 업로드 되도록 설정 , 이미지 사이즈 제한
  fileFilter: (req, file, cb) => {
    // jpeg & png만 업로드 되도록 설정

    if (['image/jpeg', 'image/png', 'image/jpg'].includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error('Invalid file type'), false)
    }
  },
  limits: {
    // 10메가바이트 이하로 설정.
    fileSize: 1024 * 1024 * 20,
  },
})

export { upload }
