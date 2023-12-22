import { BookingInterface } from '../models/booking';
import fs from 'fs'

const bookings: BookingInterface[] = JSON.parse(fs.readFileSync('./data/bookings.json', 'utf-8'))

export const fetchAllBookings = (): BookingInterface[] => {
    const allBookings = bookings;
    if (!allBookings)
        throw new Error('Cannot get all bookings')
    return allBookings;
}

export const fetchBookingById = (id: number): BookingInterface => {
    const booking = bookings.find((booking) => booking.id === id)
    if (!booking)
        throw new Error('Booking not found')
    return booking;
}

export const postBooking = (booking: BookingInterface) => {
    return { succes: true, booking: booking }
}

export const putBooking = () => {
    return { succes: true }
}

export const patchBooking = (booking: BookingInterface) => {
    return { succes: true, booking: booking }
}

export const deleteBooking = () => {
    return { succes: true }
}