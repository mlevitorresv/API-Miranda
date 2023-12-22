import express, { Request, Response } from "express";
import { generateToken } from "../services/login";

export const loginRouter = express.Router();

loginRouter.post('/', async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const userToken = email === process.env.USER_ADMIN && password === process.env.PASSWORD_ADMIN ? generateToken(email) : '';

    if (userToken) {
        res.json({ token: userToken })
    }
    else {
        res.status(401).json({ error: "Unauthorized: Invalid credentials" })
    }
})
