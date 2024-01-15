import Joi from "joi"
import { Schema, model } from "mongoose"

export interface BookingInterface {
    photo: string
    name: string
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


export const bookingSchema = Joi.object({
    id: Joi.number().integer().positive().required(),
    photo: Joi.string().required(),
    name: Joi.string().required(),
    orderDate: Joi.string().required(),
    orderTime: Joi.string().required(),
    checkInDate: Joi.string().required(),
    checkInTime: Joi.string().required(),
    checkOut: Joi.string().required(),
    checkOutTime: Joi.string().required(),
    notes: Joi.string().required(),
    room: Joi.string().required(),
    status: Joi.string().required()
})

