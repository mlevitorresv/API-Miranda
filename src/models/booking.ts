import { Schema, model } from "mongoose"

export interface BookingInterface {
    photo: string
    name: string
    id: number
    orderDate: string
    orderTime: string
    checkInDate: string
    checkInTime: string
    checkOut: string
    checkOutTime: string
    notes: string
    room: string
    status: string
}

const bookingSchema = new Schema({
    photo: {type: String, required: true},
    name: {type: String, required: true},
    id: {type: Number, required: true},
    orderDate: {type: String, required: true},
    orderTime: {type: String, required: true},
    checkInDate: {type: String, required: true},
    checkInTime: {type: String, required: true},
    checkOut: {type: String, required: true},
    checkOutTime: {type: String, required: true},
    notes: {type: String, required: true},
    room: {type: String, required: true},
    status: {type: String, required: true}
})

export const BookingModel = model<BookingInterface>('Booking', bookingSchema);