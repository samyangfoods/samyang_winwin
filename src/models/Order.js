import mongoose from 'mongoose'

const OrderSchema = mongoose.Schema(
  {
    deliveryPlace: { type: String, required: true },
    // deliveryPlace : "창고 or 우리식자재마트 or "
    deliveryAddress: { type: String, required: true },
    // deliveryAddress: " 장기동 22-2"
    deliveryDate: { type: String, required: true },
    deliveryTime: { type: String, required: true },
    // deliveryTime : "오전배송 or 오후배송"
    orderDetail: { type: String, required: true },
    // orderDetail : 삼양라면 10박스 228,000 , 150박스 , 1,285,000원
    // product_id, product_category, product_sapcode, product_name, product_price
    // totalQuantity , totalSumOfMoney

    user: {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user',
      },
      channel: { type: String, required: true },
      storeName: { type: String, required: true },
    },
  },
  { timestamps: true }
)

// Index 복합키 설정 (내림차순 정렬)
OrderSchema.index({ 'user._id': 1, updatedAt: 1 })

// Text인덱스는 컬렉션당 1개만 만들 수 있다.
// 단어가 정확해야 한다.
OrderSchema.index({ deliveryDate: 'text', productName: 'text' })

const Order = mongoose.model('order', OrderSchema)

export { Order, OrderSchema }
