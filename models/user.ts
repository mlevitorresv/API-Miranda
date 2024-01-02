import { Schema, model } from "mongoose"

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

const userSchema = new Schema({
    photo: String,
    name: String,
    date: String,
    email: String,
    phone: String,
    description: String,
    status: String
})

export const UserModel = model<UserInterface>('User', userSchema);