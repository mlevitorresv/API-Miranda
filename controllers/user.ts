import express, { Request, Response } from 'express'
import { fetchAllUsers, fetchUserById } from '../services/user';
import { UserInterface } from '../models/user';


export const userRouter = express.Router();

userRouter.get('/', (req: Request, res: Response) => {
    const allUsers: UserInterface[] = fetchAllUsers();
    res.send(allUsers)
})

userRouter.get('/:id', (req: Request, res: Response) => {
    const id: string  = req.params.id;
    const user: UserInterface | undefined = fetchUserById(parseInt(id));
    res.send(user)
})

userRouter.post('/new', (req: Request, res: Response)=>{
    res.send({success: true})
})

userRouter.put('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})

userRouter.patch('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})

userRouter.delete('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})