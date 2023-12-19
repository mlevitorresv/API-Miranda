import bookings from '../data/bookings.json'
import { BookingInterface } from '../models/booking';

export const fetchAllBookings = (): BookingInterface[] => {
    return bookings;
}

export const fetchBookingById = (id: number): BookingInterface | undefined => {
    return bookings.find((booking) => booking.id === id)
}