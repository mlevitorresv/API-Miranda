import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
interface AuthenticatedRequest extends Request {
    user?: any;
}

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

export const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers["authorization"]
    if(!authHeader)
        return res.status(401).json({error: true, message: 'no auth header'})
    const token = authHeader.split('Bearer ')[1];

    if(!token){
        return res.status(401).json({error: 'Unauthorized: Missing Token'});
    }
    else{
        if(secretKey){
            jwt.verify(token, secretKey, (err: any, user: any) => {
                if(err) return res.status(403).json({error: 'Invalid token'});
                req.user = user;
                next();
            })
        }
        
    }
}