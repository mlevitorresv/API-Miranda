import express, { Request, Response } from 'express'
import { UserInterface } from '../models/user';
import { deleteUser, fetchAllUsers, fetchUserById, postUser, patchUser } from '../services/user';


export const userRouter = express.Router();

userRouter.get('/', async (req: Request, res: Response) => {
    try {
        const allUsers = await fetchAllUsers();
        res.json({ users: allUsers })
    } catch (error) {
        console.error('Error getting the bookings: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

userRouter.get('/:id', async(req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const user = await fetchUserById(id);
        res.json({ user: user })
    } catch (error) {
        console.error('Error getting the booking: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

userRouter.post('/', async (req: Request, res: Response) => {
    try {
        const result = await postUser(req.body);
        res.json(result)
    } catch (error) {
        console.error('Error saving the booking: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

userRouter.patch('/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const result = await patchUser(id, req.body)
        res.json(result)
    } catch (error) {
        console.error('Error updating the booking: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


userRouter.delete('/:id', async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const result = await deleteUser(id);
        res.json(result)
    } catch (error) {
        console.error('Error deleting the booking: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})