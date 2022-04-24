import express from "express";
const promotionRouter = express.Router();
import {
  getPromotions,
  getPromotionById,
  createPromotion,
  updatePromotionById,
  deletePromotionById,
  searchPromotions,
  preSigned,
} from "../controllers/promotionController.js";

import { protect } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/imageUpload.js";

promotionRouter.route("/").get(protect, getPromotions);
promotionRouter.route("/search").get(protect, searchPromotions);
promotionRouter.route("/:promotionId").get(protect, getPromotionById);
promotionRouter
  .route("/")
  .post(
    protect,
    upload.fields([
      { name: "file1" },
      { name: "file2" },
      { name: "file3" },
      { name: "file4" },
    ]),
    createPromotion
  );
promotionRouter.route("/presigned").post(protect, preSigned);

promotionRouter.route("/:promotionId").put(protect, updatePromotionById);
promotionRouter.route("/:promotionId").delete(protect, deletePromotionById);

export default promotionRouter;
