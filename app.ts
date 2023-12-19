import express from 'express'
import { roomRouter } from './controllers/room'
import { userRouter } from './controllers/user'
import { contactRouter } from './controllers/contact'
import { bookingRouter } from './controllers/booking'
import { authMiddleware } from './middleware/auth'
const app = express()


app.use('/rooms', authMiddleware, roomRouter)
app.use('/rooms/:id', authMiddleware, roomRouter)

app.use('/users', authMiddleware, userRouter)
app.use('/users/:id', authMiddleware, userRouter)

app.use('/contacts', authMiddleware, contactRouter)
app.use('/contacts/:id', authMiddleware, contactRouter)

app.use('/bookings', authMiddleware, bookingRouter)
app.use('/bookings/:id', authMiddleware, bookingRouter)


export default app;