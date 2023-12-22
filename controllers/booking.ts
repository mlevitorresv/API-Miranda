import express, { Request, Response } from 'express'
import { deleteBooking, fetchAllBookings, fetchBookingById, patchBooking, postBooking, putBooking } from '../services/booking';
import { BookingInterface } from '../models/booking';

export const bookingRouter = express.Router();

bookingRouter.get('/', (req: Request, res: Response) => {
    const allBookings: BookingInterface[] = fetchAllBookings();
    res.json({ bookings: allBookings })
})

bookingRouter.get('/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    const booking: BookingInterface = fetchBookingById(parseInt(id));
    res.json({ booking: booking })
})

bookingRouter.post('/', (req: Request, res: Response) => {
    res.json(postBooking(req.body))
})

bookingRouter.put('/:id', (req: Request, res: Response) => {
    res.json(putBooking())
})

bookingRouter.patch('/:id', (req: Request, res: Response) => {
    res.json(patchBooking(req.body))
})

bookingRouter.delete('/:id', (req: Request, res: Response) => {
    res.json(deleteBooking())
})