import fs from 'fs'
import { ContactInterface } from '../models/contact';

const contacts: ContactInterface[] = JSON.parse(fs.readFileSync('./data/comment.json', 'utf-8'))

export const fetchAllContacts = (): ContactInterface[] => {
    return contacts;
}

export const fetchContactById = (id: number): ContactInterface | undefined => {
    return contacts.find((contact) => contact.id === id)
}