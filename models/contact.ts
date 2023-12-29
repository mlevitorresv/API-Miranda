import { Schema } from "mongoose"

export interface ContactInterface {
    photo: string
    id: number
    name: string
    email: string
    phone: string
    comment: string
    date: string
    dateTime: string
    archived: boolean
}


export const contactSchema = new Schema({
    photo: String,
    name: String,
    email: String,
    phone: String,
    comment: String,
    date: String,
    dateTime: String,
    archived: Boolean
})