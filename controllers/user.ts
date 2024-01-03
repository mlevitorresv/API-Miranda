import express, { Request, Response } from 'express'
import { deleteUser, fetchAllUsers, fetchUserById, patchUser, postUser, putUser } from '../services/user';
import { UserInterface } from '../models/user';


export const userRouter = express.Router();

userRouter.get('/', async (req: Request, res: Response) => {
    try {
        const allUsers: UserInterface[] = await fetchAllUsers();
        res.json({ users: allUsers })
    } catch (error) {
        console.error('Error getting the bookings: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

userRouter.get('/:id', async(req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const user: UserInterface | null = await fetchUserById(parseInt(id));
        res.json({ user: user })
    } catch (error) {
        console.error('Error getting the booking: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

userRouter.post('/', (req: Request, res: Response) => {
    try {
        res.json(postUser(req.body))
    } catch (error) {
        console.error('Error saving the booking: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

userRouter.put('/:id', (req: Request, res: Response) => {
    try {
        res.json(putUser())
    } catch (error) {
        console.error('Error updating the booking: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

userRouter.patch('/:id', (req: Request, res: Response) => {
    try {
        res.json(patchUser(req.body))
    } catch (error) {
        console.error('Error updating the booking: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

userRouter.delete('/:id', (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        res.json(deleteUser(id))
    } catch (error) {
        console.error('Error deleting the booking: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})