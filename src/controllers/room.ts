import express, { Request, Response } from 'express'
// import { deleteRoom, fetchAllRooms, fetchRoomById, postRoom, putRoom } from '../services/room';
import { RoomInterface } from '../models/room';
import { deleteRoom, fetchAllRooms, fetchRoomById, postRoom, putRoom } from '../services/room';

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
        const room: RoomInterface | null = await fetchRoomById(id);
        res.json({ room: room })
    } catch (error) {
        console.error('Error getting the rooom: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

roomRouter.post('/', async (req: Request, res: Response) => {
    try {
        const result = await postRoom(req.body);
        res.json(result)
    } catch (error) {
        console.error('Error saving the room: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

roomRouter.put('/:id', async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const result = await putRoom(id, req.body);
        res.json(result)
    } catch (error) {
        console.error('Error updating the room: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


roomRouter.delete('/:id', async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const result = await deleteRoom(id)
        res.json(result)
    } catch (error) {
        console.error('Error deleting the room: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})