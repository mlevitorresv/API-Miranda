import express, { Request, Response } from 'express'
import { fetchAllRooms, fetchRoomById } from '../services/room';
import { RoomInterface } from '../models/room';

export const roomRouter = express.Router();

roomRouter.get('/', (req: Request, res: Response) => {
    const allRooms: RoomInterface[] = fetchAllRooms();
    res.json({rooms: allRooms})
})

roomRouter.get('/:id', (req: Request, res: Response) => {
    const id: string  = req.params.id;
    const room: RoomInterface | undefined = fetchRoomById(parseInt(id));
    res.json({room: room})
})

roomRouter.post('/', (req: Request, res: Response)=>{
    res.json({success: true, room: req.body})
})

roomRouter.put('/:id', (req: Request, res: Response)=>{
    res.json({success: true})
})

roomRouter.patch('/:id', (req: Request, res: Response)=>{
    res.json({success: true,  room: req.body})
})

roomRouter.delete('/:id', (req: Request, res: Response)=>{
    res.json({success: true})
})