import express, { Request, Response } from 'express'
import { fetchAllContacts, fetchContactById } from '../services/contact';

export const contactRouter = express.Router();

contactRouter.get('/', (req: Request, res: Response) => {
    const allContacts = fetchAllContacts();
    res.send(allContacts)
})

contactRouter.get('/:id', (req: Request, res: Response) => {
    const id: string  = req.params.id;
    const contact = fetchContactById(parseInt(id))
    res.send(contact)
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