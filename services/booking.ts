import { BookingInterface } from '../models/booking';
import fs from 'fs'

const bookings: BookingInterface[] = JSON.parse(fs.readFileSync('./data/bookings.json', 'utf-8'))

export const fetchAllBookings = (): BookingInterface[] => {
    return bookings;
}

export const fetchBookingById = (id: number): BookingInterface | undefined => {
    return bookings.find((booking) => booking.id === id)
}

export const postBooking = (booking: BookingInterface) => {
    return {succes: true, booking: booking}
}

export const putBooking = () => {
    return {succes: true}
}

export const patchBooking = (booking: BookingInterface) => {
    return {succes: true, booking: booking}
}

export const deleteBooking = () => {
    return {succes: true}
}