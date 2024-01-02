import express, { Request, Response } from 'express'
import { deleteRoom, fetchAllRooms, fetchRoomById, patchRoom, postRoom, putRoom } from '../services/room';
import { RoomInterface } from '../models/room';

export const roomRouter = express.Router();

roomRouter.get('/', async (req: Request, res: Response) => {
    const allRooms: RoomInterface[] = await fetchAllRooms();
    res.json({ rooms: allRooms })
})

roomRouter.get('/:id', async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const room: RoomInterface | null = await fetchRoomById(parseInt(id));
    res.json({ room: room })
})

roomRouter.post('/', (req: Request, res: Response) => {
    res.json(postRoom(req.body))
})

roomRouter.put('/:id', (req: Request, res: Response) => {
    res.json(putRoom())
})

roomRouter.patch('/:id', (req: Request, res: Response) => {
    res.json(patchRoom(req.body))
})

roomRouter.delete('/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    res.json(deleteRoom(id))
})