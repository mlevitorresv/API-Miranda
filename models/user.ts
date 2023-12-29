import { Schema } from "mongoose"

export interface UserInterface {
    photo: string,
    id: number,
    name: string,
    date: string,
    email: string,
    phone: string,
    description: string,
    status: string
}

export const userSchema = new Schema({
    photo: String,
    name: String,
    date: String,
    email: String,
    phone: String,
    description: String,
    status: String
})