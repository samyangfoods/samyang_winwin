import { Router } from "express";
const imageRouter = Router();
import { protect } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/imageUpload.js";
import {
  createUserImage,
  getUserImage,
} from "../controllers/imageController.js";

imageRouter.route("/user").post(upload.single("image"), createUserImage);

imageRouter.route("/user").get(getUserImage);

export default imageRouter;
