import { Schema, model } from "mongoose"

export interface ContactInterface {
    photo: string
    name: string
    email: string
    phone: string
    comment: string
    date: string
    dateTime: string
    archived: boolean
}


const contactSchema = new Schema({
    photo: {type: String, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    comment: {type: String, required: true},
    date: {type: String, required: true},
    dateTime: {type: String, required: true},
    archived: {type: Boolean, required: true}
})

export const ContactModel = model<ContactInterface>('Contact', contactSchema); 