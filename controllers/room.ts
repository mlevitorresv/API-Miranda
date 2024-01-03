import express, { Request, Response } from 'express'
import { deleteRoom, fetchAllRooms, fetchRoomById, patchRoom, postRoom, putRoom } from '../services/room';
import { RoomInterface } from '../models/room';

export const roomRouter = express.Router();

roomRouter.get('/', async (req: Request, res: Response) => {
    try {
        const allRooms: RoomInterface[] = await fetchAllRooms();
        res.json({ rooms: allRooms })
    } catch (error) {
        console.error('Error getting the rooms: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

roomRouter.get('/:id', async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const room: RoomInterface | null = await fetchRoomById(parseInt(id));
        res.json({ room: room })
    } catch (error) {
        console.error('Error getting the rooom: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

roomRouter.post('/', (req: Request, res: Response) => {
    try {
        res.json(postRoom(req.body))
    } catch (error) {
        console.error('Error saving the room: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

roomRouter.put('/:id', (req: Request, res: Response) => {
    try {
        res.json(putRoom())
    } catch (error) {
        console.error('Error updating the room: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

roomRouter.patch('/:id', (req: Request, res: Response) => {
    try {
        res.json(patchRoom(req.body))
    } catch (error) {
        console.error('Error updating the room: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

roomRouter.delete('/:id', (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        res.json(deleteRoom(id))
    } catch (error) {
        console.error('Error deleting the room: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})