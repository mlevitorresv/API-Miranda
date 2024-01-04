import express, { Request, Response } from 'express'
import { deleteContact, fetchAllContacts, fetchContactById, postContact, putContact } from '../services/contact';
import { ContactInterface } from '../models/contact';

export const contactRouter = express.Router();

contactRouter.get('/', async (req: Request, res: Response) => {
    try {
        const allContacts: ContactInterface[] = await fetchAllContacts();
        res.json({ contacts: allContacts })
    } catch (error) {
        console.error('Error getting the contacts: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

contactRouter.get('/:id', async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const contact: ContactInterface | null = await fetchContactById(parseInt(id))
        res.json({ contact: contact })
    } catch (error) {
        console.error('Error getting the contact: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

contactRouter.post('/', (req: Request, res: Response) => {
    try {
        res.json(postContact(req.body))
    } catch (error) {
        console.error('Error saving the contact: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

contactRouter.put('/:id', (req: Request, res: Response) => {
    try {
        res.json(putContact(req.body))
    } catch (error) {
        console.error('Error updating the contact: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

contactRouter.delete('/:id', (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        res.json(deleteContact(id))
    } catch (error) {
        console.error('Error deleting the contact: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})