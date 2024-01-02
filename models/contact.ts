import { Schema, model } from "mongoose"

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


const contactSchema = new Schema({
    photo: String,
    id: Number,
    name: String,
    email: String,
    phone: String,
    comment: String,
    date: String,
    dateTime: String,
    archived: Boolean
})

export const ContactModel = model<ContactInterface>('Contact', contactSchema); 