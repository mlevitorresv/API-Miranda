import { BookingInterface, BookingModel } from '../models/booking';


export const fetchAllBookings = async (): Promise<BookingInterface[]> => {
    try{
        return await BookingModel.find();
    }catch(error){
        console.error('Error, bookings were not obtained: ', error)
        throw error;
    }
}

export const fetchBookingById = async (id: string): Promise<BookingInterface | null> => {
    try{
        return await BookingModel.findById(id);
    }catch(error){
        console.error('Error, booking were not obtained: ', error)
        throw error;
    }
}

export const postBooking = async(booking: BookingInterface) => {
    try {
        const data = new BookingModel({
            photo: booking.photo,
            name: booking.name,
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
        await data.save();
        return { success: true, booking: data }
    } catch (error) {
        console.error('Error, booking not saved: ', error)
        throw error;
    }
    
}

export const putBooking = async (id: string, body: BookingInterface) => {
    try {
        return await BookingModel.findByIdAndUpdate(id, body)
    } catch (error) {
        console.error('Error, booking not updated: ', error)
        throw error;
    }}

export const deleteBooking = async (id: string) => {
    try {
        await BookingModel.findByIdAndDelete(id)
        return { success: true }
    } catch (error) {
        console.error('Error, booking not deleted: ', error)
        throw error;
    }
}