import express, { Request, Response } from 'express'
import { fetchAllRooms, fetchRoomById } from '../services/room';
import { RoomInterface } from '../models/room';

export const roomRouter = express.Router();

roomRouter.get('/', (req: Request, res: Response) => {
    const allRooms: RoomInterface[] = fetchAllRooms();
    res.json(allRooms)
})

roomRouter.get('/:id', (req: Request, res: Response) => {
    const id: string  = req.params.id;
    const room: RoomInterface | undefined = fetchRoomById(parseInt(id));
    res.json(room)
})

roomRouter.post('/new', (req: Request, res: Response)=>{
    res.json({success: true})
})

roomRouter.put('/:id', (req: Request, res: Response)=>{
    res.json({success: true})
})

roomRouter.patch('/:id', (req: Request, res: Response)=>{
    res.json({success: true})
})

roomRouter.delete('/:id', (req: Request, res: Response)=>{
    res.json({success: true})
})