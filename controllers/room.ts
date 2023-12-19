import express, { Request, Response } from 'express'
import rooms from '../data/rooms.json'

export const roomRouter = express.Router();

roomRouter.get('/', (req: Request, res: Response) => {
    res.send(rooms)
})

roomRouter.get('/:id', (req: Request, res: Response) => {
    const id: string  = req.params.id;
    res.send(rooms.find((room)=> room.id === parseInt(id)))
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