import express, { Request, Response } from 'express'
import { deleteUser, fetchAllUsers, fetchUserById, patchUser, postUser, putUser } from '../services/user';
import { UserInterface } from '../models/user';


export const userRouter = express.Router();

userRouter.get('/', async (req: Request, res: Response) => {
    const allUsers: UserInterface[] = await fetchAllUsers();
    res.json({ users: allUsers })
})

userRouter.get('/:id', async(req: Request, res: Response) => {
    const id: string = req.params.id;
    const user: UserInterface | null = await fetchUserById(parseInt(id));
    res.json({ user: user })
})

userRouter.post('/', (req: Request, res: Response) => {
    res.json(postUser(req.body))
})

userRouter.put('/:id', (req: Request, res: Response) => {
    res.json(putUser())
})

userRouter.patch('/:id', (req: Request, res: Response) => {
    res.json(patchUser(req.body))
})

userRouter.delete('/:id', (req: Request, res: Response) => {
    res.json(deleteUser())
})