import { Router } from "express";
const marketRouter = Router({ mergeParams: true });
import {
  getMarkets,
  getMarketById,
  createMarket,
  updateMarketById,
  deleteMarketById,
  searchMarkets,
  getMarketWithUserId,
} from "../controllers/marketController.js";

import { protect } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/imageUpload.js";

marketRouter.route("/search").post(protect, searchMarkets);
marketRouter.route("/").get(protect, getMarkets);

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
marketRouter.route("/:userId").get(protect, getMarketWithUserId);
// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

marketRouter.route("/:marketId").get(protect, getMarketById);
marketRouter
  .route("/")
  .post(protect, upload.single("marketImage"), createMarket);
marketRouter.route("/:marketId").put(protect, updateMarketById);
marketRouter.route("/:marketId").delete(protect, deleteMarketById);

export default marketRouter;
