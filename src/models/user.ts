import Joi from 'joi'

export interface UserInterface {
    photo: string,
    name: string,
    date: string,
    email: string,
    phone: string,
    description: string,
    status: string
}

export const userSchema = Joi.object({
    id: Joi.number().integer().positive().required(),
    photo: Joi.string().required(),
    name: Joi.string().required(),
    date: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    description: Joi.string().required(),
    status: Joi.string().required(),
})