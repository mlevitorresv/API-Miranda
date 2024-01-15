import Joi from "joi"

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

export const contactSchema = Joi.object({
    id: Joi.number().integer().positive().required(),
    photo: Joi.string().required(),
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    comment: Joi.string().required(),
    date: Joi.string().required(),
    dateTime: Joi.string().required(),
    archived: Joi.boolean(),
})