import { BookingInterface, BookingModel } from '../models/booking';


export const fetchAllBookings = async (): Promise<BookingInterface[]> => {
    return await BookingModel.find();
}

export const fetchBookingById = async (id: number): Promise<BookingInterface | null> => {
    return await BookingModel.findById(id);
}

export const postBooking = async(booking: BookingInterface) => {
    return { success: true, booking: booking }
}

export const putBooking = () => {
    return { success: true }
}

export const patchBooking = (booking: BookingInterface) => {
    return { success: true, booking: booking }
}

export const deleteBooking = () => {
    return { success: true }
}