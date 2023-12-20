import express, { Request, Response } from 'express'
import { fetchAllBookings, fetchBookingById } from '../services/booking';
import { BookingInterface } from '../models/booking';

export const bookingRouter = express.Router();

bookingRouter.get('/', (req: Request, res: Response) => {
    const allBookings: BookingInterface[] = fetchAllBookings();
    res.json(allBookings)
})

bookingRouter.get('/:id', (req: Request, res: Response) => {
    const id: string  = req.params.id;
    const booking: BookingInterface | undefined  = fetchBookingById(parseInt(id));
    res.json(booking)
})

bookingRouter.post('/new', (req: Request, res: Response)=>{
    res.json({success: true, booking: req.body})
})

bookingRouter.put('/:id', (req: Request, res: Response)=>{
    res.json({success: true})
})

bookingRouter.patch('/:id', (req: Request, res: Response)=>{
    res.json({success: true, booking: req.body})
})

bookingRouter.delete('/:id', (req: Request, res: Response)=>{
    res.json({success: true})
})