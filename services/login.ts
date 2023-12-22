import { Request} from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const secretKey = process.env.SECRET_KEY;


export const generateToken = (email: string, password: string) => {
    if(email === process.env.USER_ADMIN && password === process.env.PASSWORD_ADMIN){
        if(secretKey){
            return jwt.sign({email}, secretKey, {expiresIn: '24h'});
        }
        else{
            throw new Error('Secret Key not defined.')
        }
    }
    return null;
}