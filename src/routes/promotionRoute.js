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

promotionRouter.route("/").get(getPromotions);
promotionRouter.route("/search").get(searchPromotions);
promotionRouter.route("/:promotionId").get(getPromotionById);
promotionRouter
  .route("/")
  .post(
    upload.fields([
      { name: "file1" },
      { name: "file2" },
      { name: "file3" },
      { name: "file4" },
    ]),
    createPromotion
  );
promotionRouter.route("/presigned").post(preSigned);

promotionRouter.route("/:promotionId").put(updatePromotionById);
promotionRouter.route("/:promotionId").delete(deletePromotionById);

export default promotionRouter;
