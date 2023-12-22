import express, { Request, Response } from 'express'
import { deleteContact, fetchAllContacts, fetchContactById, patchContact, postContact, putContact } from '../services/contact';
import { ContactInterface } from '../models/contact';

export const contactRouter = express.Router();

contactRouter.get('/', (req: Request, res: Response) => {
    const allContacts: ContactInterface[] = fetchAllContacts();
    res.json({contacts: allContacts})
})

contactRouter.get('/:id', (req: Request, res: Response) => {
    const id: string  = req.params.id;
    const contact: ContactInterface = fetchContactById(parseInt(id))
    res.json({contact: contact})
})

contactRouter.post('/', (req: Request, res: Response)=>{
    res.json(postContact(req.body))
})

contactRouter.put('/:id', (req: Request, res: Response)=>{
    res.json(putContact())
})

contactRouter.patch('/:id', (req: Request, res: Response)=>{
    res.json(patchContact(req.body))
})

contactRouter.delete('/:id', (req: Request, res: Response)=>{
    res.json(deleteContact())
})