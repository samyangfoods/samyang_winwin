import jwt from "jsonwebtoken";
import expressAsyncHandler from "express-async-handler";
import { User } from "../models/User.js";

const protect = expressAsyncHandler(async (req, res, next) => {
  // let token

  // if (
  //   req.headers.authorization &&
  //   req.headers.authorization.startsWith('Bearer')
  // ) {
  // const { token } = req.headers;

  // 2022 03 11 테스트용 코드입니다. 이현상
  const token = req.headers.authorization.replace("Bearer ", "");

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token !!!");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id).select("-password");

    next();
  } catch (error) {
    console.error(error);
    res.status(401);
    throw new Error("Not authorized, token failed !!");
  }
  // }
});

export { protect };
