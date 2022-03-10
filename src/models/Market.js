import mongoose from 'mongoose'

const MarketSchema = mongoose.Schema(
  {
    user: {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user',
      },
    },
    marketName: { type: String, required: true, unique: true },
    size: { type: String, required: true },
    pos: { type: String, required: true },
    phone: { type: String, required: true },
    averageSales: { type: String, required: true },
    marketAddress: { type: String, required: true },
    // role : dealer , salesperson , admin
    marketImage: { type: String, required: true },
  },
  // 언제 생성되고 언제 업데이트가 되었는지
  { timestamps: true }
)

const Market = mongoose.model('market', MarketSchema)

export { Market, MarketSchema }
