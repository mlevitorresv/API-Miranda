import express, { Request, Response } from "express";
import { generateToken } from "../middleware/auth";

export const loginRouter = express.Router();

loginRouter.post('/', async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const userToken = generateToken(email, password);

    if(userToken){
        res.json({token: userToken})
    }
    else{
        res.status(401).send({error: "Unauthorized: Invalid credentials"})
    }
})
