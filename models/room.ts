import { Schema } from "mongoose"

export interface RoomInterface {
    photo: string,
    id: number,
    type: string,
    bed: string,
    amenities: string,
    description: string,
    rate: number,
    price: number,
    discount: number,
    available: boolean
}

export const roomSchema = new Schema({
    photo: String,
    type: String,
    bed: String,
    amenities: String,
    description: String,
    rate: Number,
    price: Number,
    discount: Number,
    available: Boolean
})