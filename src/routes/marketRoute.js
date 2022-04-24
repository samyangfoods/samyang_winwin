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
marketRouter
  .route("/")
  .post(protect, upload.single("marketImage"), createMarket);

marketRouter.route("/:userId([0-9a-f]{24})").get(protect, getMarketWithUserId);

marketRouter.route("/list/:marketId([0-9a-f]{24})").get(protect, getMarketById);
marketRouter
  .route("/list/:marketId([0-9a-f]{24})")
  .put(protect, updateMarketById);
marketRouter
  .route("/list/:marketId([0-9a-f]{24})")
  .delete(protect, deleteMarketById);

export default marketRouter;
