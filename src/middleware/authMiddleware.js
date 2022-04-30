import jwt from "jsonwebtoken";
import expressAsyncHandler from "express-async-handler";
import { User } from "../models/User.js";

const protect = expressAsyncHandler(async (req, res, next) => {
  console.log("🔥🔥🔥🔥🔥🔥🔥🔥 Protect Middleware Started!!!!!");

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    let token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id).select("-password");

    return next();
  } else {
    return;
  }

  // if (!token) {
  //   res.status(401)
  //   throw new Error('Not authorized, no token !!!')
  // }
});

export { protect };

// console.log(
//   `🔥🔥🔥🔥🔥🔥🔥🔥 req.headers exists: ${req.headers.authorization}`
// );
// try {
//   let token = req.headers.authorization.split(" ")[1];

//   console.log(`🔥🔥🔥🔥🔥🔥🔥🔥🔥 token: ${token}`);

//   const decoded = jwt.verify(token, process.env.JWT_SECRET);

//   console.log(`🔥🔥🔥🔥🔥🔥🔥🔥🔥 decoded: ${decoded}`);

//   req.user = await User.findById(decoded.id).select("-password");

//   console.log(`🔥🔥🔥🔥🔥🔥🔥🔥🔥 req.user: ${req.user}`);

//   next();
// } catch (error) {
//   console.error("authMiddleware", error);
//   res.status(401);
//   throw new Error("Not authorized, token failed !!");
// }
