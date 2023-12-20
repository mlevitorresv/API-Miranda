import express from 'express'
import { roomRouter } from './controllers/room'
import { userRouter } from './controllers/user'
import { contactRouter } from './controllers/contact'
import { bookingRouter } from './controllers/booking'
import { authMiddleware } from './middleware/auth'
import { showEndpoints } from './public'
import { loginRouter } from './controllers/login'
const app = express()

app.use(express.json())

app.use('/rooms', authMiddleware, roomRouter)
app.use('/rooms/:id', authMiddleware, roomRouter)

app.use('/users', authMiddleware, userRouter)
app.use('/users/:id', authMiddleware, userRouter)

app.use('/contacts', authMiddleware, contactRouter)
app.use('/contacts/:id', authMiddleware, contactRouter)

app.use('/bookings', authMiddleware, bookingRouter)
app.use('/bookings/:id', authMiddleware, bookingRouter)

app.use('/login', loginRouter)

app.use('/public', showEndpoints(app))
 
export default app;