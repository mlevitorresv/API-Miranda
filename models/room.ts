import { Schema, model } from "mongoose"

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

const roomSchema = new Schema({
    photo: String,
    id: Number,
    type: String,
    bed: String,
    amenities: String,
    description: String,
    rate: Number,
    price: Number,
    discount: Number,
    available: Boolean
})

export const RoomModel = model<RoomInterface>('Room', roomSchema);