import express, { Request, Response } from 'express'
import bookings from '../data/bookings.json'

export const bookingRouter = express.Router();

bookingRouter.get('/', (req: Request, res: Response) => {
    res.send(bookings)
})

bookingRouter.get('/:id', (req: Request, res: Response) => {
    const id: string  = req.params.id;
    res.send(bookings.find((booking)=> booking.id === parseInt(id)))
})

bookingRouter.post('/new', (req: Request, res: Response)=>{
    res.send({success: true})
})

bookingRouter.put('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})

bookingRouter.patch('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})

bookingRouter.delete('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})