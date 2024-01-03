import express, { Request, Response } from 'express'
import { deleteBooking, fetchAllBookings, fetchBookingById, patchBooking, postBooking, putBooking } from '../services/booking';
import { BookingInterface } from '../models/booking';

export const bookingRouter = express.Router();

bookingRouter.get('/', async (req: Request, res: Response) => {
    try {
        const allBookings: BookingInterface[] = await fetchAllBookings();
        res.json({ bookings: allBookings })
    } catch (error) {
        console.error('Error getting the bookings: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

bookingRouter.get('/:id', async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const booking: BookingInterface | null = await fetchBookingById(parseInt(id));
        res.json({ booking: booking })
    } catch (error) {
        console.error('Error getting the booking: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

bookingRouter.post('/', (req: Request, res: Response) => {
    try {
        res.json(postBooking(req.body))
    } catch (error) {
        console.error('Error saving the booking: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

bookingRouter.put('/:id', (req: Request, res: Response) => {
    try {
        res.json(putBooking())
    } catch (error) {
        console.error('Error updating the booking: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

bookingRouter.patch('/:id', (req: Request, res: Response) => {
    try {
        res.json(patchBooking(req.body))
    } catch (error) {
        console.error('Error updating the booking: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

bookingRouter.delete('/:id', (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        res.json(deleteBooking(id))
    } catch (error) {
        console.error('Error deleting the booking: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})