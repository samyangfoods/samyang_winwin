import multer from 'multer'
import path from 'path'
import multerS3 from 'multer-s3'
import { s3 } from '../../aws.js'

const storage = multerS3({
  s3,
  bucket: 'samyang-bucket',
  filename(req, file, cb) {
    console.log('imageUpload storage', file)
    //abc.png
    const ext = path.extname(file.originalname) // 확장자 추출
    const basename = path.basename(file.originalname, ext) //abc
    cb(null, basename + new Date().getTime() + ext) // abc515585255852.png
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
    fileSize: 1024 * 1024 * 10,
  },
})

<<<<<<< HEAD
export { upload };
=======
export { upload }
>>>>>>> 426099393b08690a4eef2dba0f3630735ac51199
