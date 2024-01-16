import express, { Request, Response } from 'express'
import { deleteContact, fetchAllContacts, fetchContactById, postContact } from '../services/contact';

export const contactRouter = express.Router();

contactRouter.get('/', async (req: Request, res: Response) => {
    try {
        const allContacts = await fetchAllContacts();
        res.json({ contacts: allContacts })
    } catch (error) {
        console.error('Error getting the contacts: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

contactRouter.get('/:id', async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const contact = await fetchContactById (id)
        res.json({ contact: contact })
    } catch (error) {
        console.error('Error getting the contact: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

contactRouter.post('/', async (req: Request, res: Response) => {
    try {
        const result = await postContact(req.body);
        res.json(result)
    } catch (error) {
        console.error('Error saving the contact: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

contactRouter.put('/:id', async (req: Request, res: Response) => {
    try {
        // const id = req.params.id;
        // const result = await putContact(id, req.body);
        // res.json(result)
    } catch (error) {
        console.error('Error updating the contact: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

contactRouter.delete('/:id', async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const result = await deleteContact(id);
        res.json(result)
    } catch (error) {
        console.error('Error deleting the contact: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})