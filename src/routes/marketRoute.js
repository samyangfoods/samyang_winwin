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

marketRouter.route("/search").post(searchMarkets);
marketRouter.route("/").get(getMarkets);
marketRouter.route("/").post(upload.single("marketImage"), createMarket);

marketRouter.route("/:userId([0-9a-f]{24})").get(getMarketWithUserId);

marketRouter.route("/list/:marketId([0-9a-f]{24})").get(getMarketById);
marketRouter.route("/list/:marketId([0-9a-f]{24})").put(updateMarketById);
marketRouter.route("/list/:marketId([0-9a-f]{24})").delete(deleteMarketById);

export default marketRouter;
