import { Router } from "express";
const userRouter = Router();
import {
  authUser,
  registerUser,
  getUser,
  updateUser,
  deleteUser,
  getUserProfile,
  preSigned,
  getUserProfileWithToken,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/imageUpload.js";

userRouter.route("/login").post(authUser);
userRouter.route("/register").post(upload.single("userImage"), registerUser);
userRouter.route("/update").put(upload.single("userImage"), updateUser);
userRouter.route("/profile").get(getUserProfile);

//🔥🔥🔥🔥🔥🔥🔥 로그인 유지를 위한 토큰 이용
userRouter.route("/token").get(getUserProfileWithToken);
userRouter.route("/presigned").post(preSigned);

userRouter.route("/:userId").get(getUser);
userRouter.route("/:userId").put(updateUser);
userRouter.route("/:userId").delete(deleteUser);

export default userRouter;
