import express, { Request, Response } from 'express'
import users from '../data/users.json'

export const userRouter = express.Router();

userRouter.get('/', (req: Request, res: Response) => {
    res.send(users)
})

userRouter.get('/:id', (req: Request, res: Response) => {
    const id: string  = req.params.id;
    res.send(users.find((user)=> user.id === parseInt(id)))
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