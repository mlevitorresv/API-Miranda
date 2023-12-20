import express, { Request, Response } from 'express'
import { fetchAllUsers, fetchUserById } from '../services/user';
import { UserInterface } from '../models/user';


export const userRouter = express.Router();

userRouter.get('/', (req: Request, res: Response) => {
    const allUsers: UserInterface[] = fetchAllUsers();
    res.json(allUsers)
})

userRouter.get('/:id', (req: Request, res: Response) => {
    const id: string  = req.params.id;
    const user: UserInterface | undefined = fetchUserById(parseInt(id));
    res.json(user)
})

userRouter.post('/new', (req: Request, res: Response)=>{
    res.json({success: true, user: req.body})
})

userRouter.put('/:id', (req: Request, res: Response)=>{
    res.json({success: true})
})

userRouter.patch('/:id', (req: Request, res: Response)=>{
    res.json({success: true, user: req.body})
})

userRouter.delete('/:id', (req: Request, res: Response)=>{
    res.json({success: true})
})