import multer from "multer";
import path from "path";
import mime from "mime-types";

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./uploads"),
  filename(req, file, cb) {
    console.log(file);
    //abc.png
    const ext = path.extname(file.originalname); // 확장자 추출
    const basename = path.basename(file.originalname, ext); //abc
    cb(null, basename + new Date().getTime() + ext); // abc515585255852.png
  },
});

const upload = multer({
  storage,
  // 이미지 파일만 업로드 되도록 설정 , 이미지 사이즈 제한
  fileFilter: (req, file, cb) => {
    // jpeg & png만 업로드 되도록 설정

    if (["image/jpeg", "image/png", "image/jpg"].includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type"), false);
    }
  },
  limits: {
    // 5메가바이트 이하로 설정.
    fileSize: 1024 * 1024 * 10,
  },
});

export { upload };
