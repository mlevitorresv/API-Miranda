import { BookingInterface, BookingModel } from '../models/booking';


export const fetchAllBookings = async (): Promise<BookingInterface[]> => {
    try{
        return await BookingModel.find();
    }catch(error){
        console.error('Error, bookings were not obtained: ', error)
        throw error;
    }
}

export const fetchBookingById = async (id: number): Promise<BookingInterface | null> => {
    try{
        return await BookingModel.findOne({id: id});
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
    } catch (error) {
        console.error('Error, booking not saved: ', error)
        throw error;
    }
    
}

export const putBooking = async (body: BookingInterface) => {
    try {
        return await BookingModel.findOneAndUpdate({id: body.id}, body)
    } catch (error) {
        console.error('Error, booking not updated: ', error)
        throw error;
    }}

export const deleteBooking = async (id: string) => {
    try {
        await BookingModel.findOneAndDelete({id: id})
        return { success: true }
    } catch (error) {
        console.error('Error, booking not deleted: ', error)
        throw error;
    }
}