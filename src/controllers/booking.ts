import express, { Request, Response } from 'express'
// import { deleteBooking, fetchAllBookings, fetchBookingById, postBooking, putBooking } from '../services/booking';
import { BookingInterface } from '../models/booking';
import { deleteBooking, fetchAllBookings, fetchBookingById } from '../services/booking';

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
        const booking: BookingInterface | null = await fetchBookingById(id);
        res.json({ booking: booking })
    } catch (error) {
        console.error('Error getting the booking: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

bookingRouter.post('/', async (req: Request, res: Response) => {
    try {
        // const result = await postBooking(req.body);
        // res.json(result)
    } catch (error) {
        console.error('Error saving the booking: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

bookingRouter.put('/:id', async (req: Request, res: Response) => {
    try {
        // const id = req.params.id;
        // const result = await putBooking(id, req.body);
        // res.json(result)
    } catch (error) {
        console.error('Error updating the booking: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

bookingRouter.delete('/:id', async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const result = await deleteBooking(id);
        res.json(result)
    } catch (error) {
        console.error('Error deleting the booking: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})