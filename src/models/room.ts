import Joi from "joi"

export interface RoomInterface {
    photo: string,
    type: string,
    bed: string,
    amenities: string,
    description: string,
    rate: number,
    price: number,
    discount: number,
    available: boolean
}



export const roomSchema = Joi.object({
    id: Joi.number().integer().positive().required(),
    photo: Joi.string().required(),
    type: Joi.string().required(),
    bed: Joi.string().required(),
    amenities: Joi.string().required(),
    descripcion: Joi.string().required(),
    rate: Joi.number().required(),
    price: Joi.number().required(),
    discount: Joi.number().required(),
    available: Joi.boolean()
})