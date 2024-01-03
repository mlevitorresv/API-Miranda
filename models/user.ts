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
    photo: {type: String, required: true},
    id: {type: Number, required: true},
    name: {type: String, required: true},
    date: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    description: {type: String, required: true},
    status: {type: String, required: true}
})

export const UserModel = model<UserInterface>('User', userSchema);