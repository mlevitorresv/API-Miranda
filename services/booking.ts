import bookings from '../data/bookings.json'

export const fetchAllBookings = () => {
    return bookings;
}

export const fetchBookingById = (id: number) => {
    return bookings.find((booking) => booking.id === id)
}