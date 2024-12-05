import express, { Request, Response } from "express";
import { generateToken } from "../services/login";

export const loginRouter = express.Router();

loginRouter.post('/', (req: Request, res: Response) => {
    const { email, password } = req.body;
    if(email === process.env.USER_ADMIN && password === process.env.PASSWORD_ADMIN){
        const userToken = generateToken(email);
        if (userToken){
            return res.json({ token: userToken })
        }
        return res.status(500).json({error: "Token was not generated internal error"})
    }
    return res.status(401).json({ error: "Unauthorized: Invalid credentials" })
})
