import express, { Request, Response } from 'express'
import contacts from '../data/comment.json'

export const contactRouter = express.Router();

contactRouter.get('/', (req: Request, res: Response) => {
    res.send(contacts)
})

contactRouter.get('/:id', (req: Request, res: Response) => {
    const id: string  = req.params.id;
    res.send(contacts.find((contact)=> contact.id === parseInt(id)))
})

contactRouter.post('/new', (req: Request, res: Response)=>{
    res.send({success: true})
})

contactRouter.put('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})

contactRouter.patch('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})

contactRouter.delete('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})