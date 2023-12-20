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

app.use('/login', loginRouter)
app.use('/public', showEndpoints(app))

app.use(authMiddleware);

app.use('/rooms', roomRouter)

app.use('/users', userRouter)

app.use('/contacts', contactRouter)

app.use('/bookings', bookingRouter)
 
export default app;