import { mysqlConnect } from '../config/db';
import { BookingInterface } from '../models/booking';


export const fetchAllBookings = async (): Promise<any> => {
    try{
        const connection = await mysqlConnect();
        const [result, fields] = await connection.execute(`SELECT * FROM bookings`)
        return result;
    }catch(error){
        console.error('Error, bookings were not obtained: ', error)
        throw error;
    }
}

export const fetchBookingById = async (id: string): Promise<any> => {
    try{
        const connection = await mysqlConnect();
        const [result, fields] = await connection.execute(`SELECT * FROM bookings WHERE id = ${id}`)
        return result;
    }catch(error){
        console.error('Error, booking were not obtained: ', error)
        throw error;
    }
}

export const postBooking = async(booking: BookingInterface) => {
    try {
        const query = `
            INSERT INTO bookings (photo, name, orderDate, orderTime, checkinDate, checkinTime, checkout, checkoutTime, notes, roomId, status)
            VALUES ('${booking.photo}', '${booking.name}', '${booking.orderDate}', '${booking.orderTime}', '${booking.checkInDate}', '${booking.checkInTime}', '${booking.checkOut}', '${booking.checkOutTime}', '${booking.notes}', ${booking.room}, '${booking.status}')
        `

        const connection = await mysqlConnect();
        connection.execute(query)
        return { success: true, contact: booking }
    } catch (error) {
        console.error('Error, booking not saved: ', error)
        throw error;
    }
    
}

// export const putBooking = async (id: string, body: BookingInterface) => {
//     try {
//         return await BookingModel.findByIdAndUpdate(id, body)
//     } catch (error) {
//         console.error('Error, booking not updated: ', error)
//         throw error;
//     }}

export const deleteBooking = async (id: string) => {
    try {
        const connection = await mysqlConnect();
        const [result, fields] = await connection.execute(`DELETE FROM bookings WHERE id = ${id}`)
        return result;
        return { success: true }
    } catch (error) {
        console.error('Error, booking not deleted: ', error)
        throw error;
    }
}