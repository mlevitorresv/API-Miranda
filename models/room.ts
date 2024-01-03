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
    photo: {type: String, required: true},
    id: {type: Number, required: true},
    type: {type: String, required: true},
    bed: {type: String, required: true},
    amenities: {type: String, required: true},
    description: {type: String, required: true},
    rate: {type: Number, required: true},
    price: {type: Number, required: true},
    discount: {type: Number, required: true},
    available: {type: Boolean, required: true}
})

export const RoomModel = model<RoomInterface>('Room', roomSchema);