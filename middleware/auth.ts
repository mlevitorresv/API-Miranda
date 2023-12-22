import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
interface AuthenticatedRequest extends Request {
    user?: any;
}

const secretKey = process.env.SECRET_KEY;




export const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers["authorization"]
    if(!authHeader)
        return res.status(401).json({error: true, message: 'no auth header'})
    const token = authHeader.split('Bearer ')[1];
    if(!token)
        return res.status(401).json({error: 'Unauthorized: Missing Token'});

    if(!secretKey)
        return res.status(500).json({error: 'internal server error'})
    try{
        const data = jwt.verify(token, secretKey);
        req.user = data;
        next();
    }catch (e){
        return res.status(403).json({error: 'Invalid token'});
    }
}