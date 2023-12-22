import express, { Request, Response } from 'express'
import { fetchAllContacts, fetchContactById } from '../services/contact';
import { ContactInterface } from '../models/contact';

export const contactRouter = express.Router();

contactRouter.get('/', (req: Request, res: Response) => {
    const allContacts: ContactInterface[] = fetchAllContacts();
    res.json({contacts: allContacts})
})

contactRouter.get('/:id', (req: Request, res: Response) => {
    const id: string  = req.params.id;
    const contact: ContactInterface  | undefined = fetchContactById(parseInt(id))
    res.json({contact: contact})
})

contactRouter.post('/', (req: Request, res: Response)=>{
    res.json({success: true, comment: req.body})
})

contactRouter.put('/:id', (req: Request, res: Response)=>{
    res.json({success: true})
})

contactRouter.patch('/:id', (req: Request, res: Response)=>{
    res.json({success: true, comment: req.body})
})

contactRouter.delete('/:id', (req: Request, res: Response)=>{
    res.json({success: true})
})