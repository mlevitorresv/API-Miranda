import express, { Request, Response } from 'express'
import { fetchAllBookings, fetchBookingById } from '../services/booking';

export const bookingRouter = express.Router();

bookingRouter.get('/', (req: Request, res: Response) => {
    const allBookings = fetchAllBookings();
    res.send(allBookings)
})

bookingRouter.get('/:id', (req: Request, res: Response) => {
    const id: string  = req.params.id;
    const booking  = fetchBookingById(parseInt(id));
    res.send(booking)
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