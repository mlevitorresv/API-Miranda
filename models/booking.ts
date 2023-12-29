import { Schema } from "mongoose"

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

export const bookingSchema = new Schema({
    photo: String,
    name: String,
    orderDate: String,
    orderTime: String,
    checkInDate: String,
    checkInTime: String,
    checkOut: String,
    checkOutTime: String,
    notes: String,
    room: String,
    status: String
})