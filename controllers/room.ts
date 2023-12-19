import express, { Request, Response } from 'express'
import { fetchAllRooms, fetchRoomById } from '../services/room';

export const roomRouter = express.Router();

roomRouter.get('/', (req: Request, res: Response) => {
    const allRooms = fetchAllRooms();
    res.send(allRooms)
})

roomRouter.get('/:id', (req: Request, res: Response) => {
    const id: string  = req.params.id;
    const room = fetchRoomById(parseInt(id));
    res.send(room)
})

roomRouter.post('/new', (req: Request, res: Response)=>{
    res.send({success: true})
})

roomRouter.put('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})

roomRouter.patch('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})

roomRouter.delete('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})