import express from 'express'
const app = express()

// Import Router
import promotionRouter from './routes/promotionRoute.js'
import userRouter from './routes/userRoute.js'
import marketRouter from './routes/marketRoute.js'
import mongoose from 'mongoose'

// 🔥🔥🔥🔥 Socket.io added 🔥🔥🔥🔥
import { setSocketIo } from './sockets/sockets.js'
// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

// etc
import generateFakeData from '../faker2.js'
import colors from 'colors'

const server = async () => {
  try {
    const { MONGO_URI, NODE_ENV, PORT } = process.env
    if (!MONGO_URI) throw new Error('MONGO_URI is required!!')
    if (!PORT) throw new Error('Port is required !!')

    await mongoose.connect(MONGO_URI)

    // mongoose.set('debug', true)

    console.log('MongoDB Connected'.rainbow)
    // Body Data 읽기
    app.use(express.json({ limit: '2mb' }))
    app.use(express.urlencoded({ extended: true }))

    app.use('/uploads', express.static('uploads'))
    app.use('/api/user', userRouter)
    app.use('/api/promotion', promotionRouter)
    app.use('/api/market', marketRouter)

    // 외부에서 이미지를 읽을 수 있도록 권한 설정

    // 🔥🔥🔥🔥 Combine HTTP server & Socket.io 🔥🔥🔥🔥
    const httpServer = app.listen(PORT, async () => {
      console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`.rainbow)
      // console.time('insert time: ')
      // for (let i = 0; i < 20; i++) {
      // await generateFakeData(10, 10, 10)
      // console.timeEnd('insert time: ')
      // }
    })
    setSocketIo(httpServer, app)
    // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  } catch (err) {
    console.log(err)
  }
}

server()
