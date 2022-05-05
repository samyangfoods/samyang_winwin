import mongoose from "mongoose";
import expressAsyncHandler from "express-async-handler";
import { Market } from "../models/Market.js";
import { User } from "../models/User.js";
const { ObjectId } = mongoose.Types;

// @desc    Fetch all markets
// @route   Get   /api/markets
// @access  Private
const getMarkets = expressAsyncHandler(async (req, res) => {
  // page가 없으면 0으로 처리
  let { page = 0 } = req.query;
  page = parseInt(page);

  const markets = await Market.find({})
    // UpdatedAt 최근순으로
    .sort({ updatedAt: -1 });
  // 스킵숫자
  // .skip(page * 3)
  // 프론트로 보내줄 숫자
  // .limit(3)
  // .populate([
  //   { path: 'user' },
  //   { path: 'comments', populate: { path: 'user' } },
  // ])

  return res.send({ markets });
});

// @desc    Search  markets
// @route   Get   /api/market/search?keyword=""
// @access  Private
const searchMarkets = expressAsyncHandler(async (req, res) => {
  const { text } = req.body;
  const markets = await Market.find({
    marketName: { $regex: text, $options: "i" },
  });

  return res.send(markets);
  // console.log(req.query);
  // const keyword = {
  //   marketName: {
  //     $regex: req.query.keyword,
  //     $options: "i",
  //   },
  // };

  // const markets = await Market.find({ ...keyword })
  // UpdatedAt 최근순으로
  // .sort({ updatedAt: -1 });
  // 스킵숫자
  // .skip(page * 3)
  // 프론트로 보내줄 숫자
  // .limit(3)
  // .populate([
  //   { path: 'user' },
  //   { path: 'comments', populate: { path: 'user' } },
  // ])

  // return res.send({ markets });
});

// @desc    Fetch single market
// @route   Get   /api/market/:marketId
// @access  Private
const getMarketById = expressAsyncHandler(async (req, res) => {
  const { marketId } = req.params;

  if (!ObjectId.isValid(marketId))
    return res.status(400).send({ err: "invalid marketId" });

  const market = await Market.findOne({ _id: marketId });

  return res.send({ market });
});

// @desc    Fetch single promotion
// @route   Post   /api/promotion
// @access  Private
const createMarket = expressAsyncHandler(async (req, res) => {
  const { marketName, size, pos, phone, averageSales, marketAddress } =
    req.body;

  let marketImage = "";

  if (req.file) {
    marketImage = req.file.key.replace("raw/", "");
  } else {
    marketImage = "";
  }

  // Promotion Validation
  if (marketName && typeof marketName !== "string")
    return res.status(400).send({ err: "marketName must be String" });
  if (size && typeof size !== "string")
    return res.status(400).send({ err: "size must be String" });
  if (pos && typeof pos !== "string")
    return res.status(400).send({ err: "pos must be String" });
  if (phone && typeof phone !== "string")
    return res.status(400).send({ err: "phone must be String" });
  if (averageSales && typeof averageSales !== "string")
    return res.status(400).send({ err: "averageSales must be String" });
  if (marketAddress && typeof marketAddress !== "string")
    return res.status(400).send({ err: "marketAddress must be string" });

  if (!req.user) return res.status(400).send({ err: "user does not exist !!" });
  console.log("MARKETFILE 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥", req.file);
  // let market = new Market({
  //   ...req.body,
  //   user: req.user,
  //   .marketImage: marketImage
  // })
  // await market.save()

  const market = await Market.create({
    marketName,
    size,
    pos,
    phone,
    averageSales,
    marketAddress,
    marketImage,
    user: req.user,
  });

  if (market) {
    res.status(201).json({
      marketName: market.marketName,
      size: market.size,
      pos: market.pos,
      phone: market.phone,
      averageSales: market.averageSales,
      marketAddress: market.marketAddress,
      marketImage: market.marketImage,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Market data");
  }
});

// @desc    Update a market
// @route   Put   /api/market/:marketId
// @access  Private
const updateMarketById = expressAsyncHandler(async (req, res) => {
  const { marketId } = req.params;
  const {
    marketName,
    size,
    pos,
    phone,
    averageSales,
    marketAddress,
    marketImage,
  } = req.body;

  if (
    !marketName &&
    !size &&
    !pos &&
    !phone &&
    !averageSales &&
    !marketAddress &&
    !marketImage
  )
    return res.send({ err: "At least one value is required !!" });

  let market = await Market.findById(marketId);

  if (marketName) market.marketName = marketName;
  if (size) market.size = size;
  if (pos) market.pos = pos;
  if (phone) market.phone = phone;
  if (averageSales) market.averageSales = averageSales;
  if (marketAddress) market.marketAddress = marketAddress;
  if (marketImage) market.marketImage = marketImage;

  await market.save();

  return res.send({ market });
});

// @desc    Delete a market
// @route   delete   /api/market/:marketId
// @access  Private
const deleteMarketById = expressAsyncHandler(async (req, res) => {
  const { marketId } = req.params;
  if (!ObjectId.isValid(marketId))
    res.status(400).send({ err: "invalid marketId" });
  const market = await Market.findOneAndDelete({ _id: marketId });

  return res.send({ market });
});

// 🔥🔥🔥🔥🔥
const getMarketWithUserId = expressAsyncHandler(async (req, res) => {
  const { userId } = req.params;
  console.log("getMarketWithUserId Started");
  console.log("userId: ", userId);

  const markets = await Market.find({ user: userId });

  console.log(markets);

  return res.send(markets);
});
// 🔥🔥🔥🔥🔥

export {
  getMarkets,
  getMarketById,
  createMarket,
  updateMarketById,
  deleteMarketById,
  searchMarkets,
  getMarketWithUserId,
};
