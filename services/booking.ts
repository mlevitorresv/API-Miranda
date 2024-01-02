import { BookingInterface, BookingModel } from '../models/booking';


export const fetchAllBookings = async (): Promise<BookingInterface[]> => {
    return await BookingModel.find();
}

export const fetchBookingById = async (id: number): Promise<BookingInterface | null> => {
    return await BookingModel.findOne({id: id});
}

export const postBooking = async(booking: BookingInterface) => {
    const data = new BookingModel({
        photo: booking.photo,
        name: booking.name,
        id: booking.id,
        orderDate: booking.orderDate,
        orderTime: booking.orderTime,
        checkInDate: booking.checkInDate,
        checkInTime: booking.checkInTime,
        checkOut: booking.checkOut,
        checkOutTime: booking.checkOutTime,
        notes: booking.notes,
        room: booking.room,
        status: booking.status
    })
    data.save();
    return { success: true, booking: data }
}

export const putBooking = () => {
    return { success: true }
}

export const patchBooking = (booking: BookingInterface) => {
    return { success: true, booking: booking }
}

export const deleteBooking = async (id: string) => {
    await BookingModel.findOneAndDelete({id: id})
    return { success: true }
}