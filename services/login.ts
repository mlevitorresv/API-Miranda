import { Request } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const secretKey = process.env.SECRET_KEY;


export const generateToken = (data: string) => {
    if (!secretKey)
        throw new Error('Secret Key not defined.')
    return jwt.sign(data, secretKey);

}