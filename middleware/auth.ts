import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface AuthenticatedRequest extends Request { 
    user?: any;
  }

export const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')

    if(!token){
        return res.status(401).send({error: 'Unauthorized: Missing token'})
    }

    if(process.env.SECRET_KEY){
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if(err){
                return res.status(403).send({error: 'Forbidden: Invalid token'})
            }
    
            req.user = user;
    
            next();
        })
    }
}