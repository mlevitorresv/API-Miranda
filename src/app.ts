import express from 'express'
import cors from 'cors'
import { roomRouter } from './controllers/room'
import { userRouter } from './controllers/user'
import { contactRouter } from './controllers/contact'
import { bookingRouter } from './controllers/booking'
import { authMiddleware } from './middleware/auth'
import { publicRouter } from './public/public'
import { loginRouter } from './controllers/login'
import { mysqlConnect } from './config/db'


export const app = express()
const corsOptions = {
  "origin": "http://localhost:5173",
  "credentials": true,
  "methods": "GET,PUT,PATCH,POST,DELETE",
  "allowedHeaders": "Content-Type,Authorization",
}



app.use(cors(corsOptions))
mysqlConnect();
app.use(express.json())

app.use('/login', loginRouter)
app.use('/public', publicRouter)

app.use(authMiddleware);

app.use('/rooms', roomRouter)

app.use('/users', userRouter)

app.use('/contacts', contactRouter)

app.use('/bookings', bookingRouter)