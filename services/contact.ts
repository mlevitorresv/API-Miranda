import contacts from '../data/comment.json'
import { ContactInterface } from '../models/contact';

export const fetchAllContacts = (): ContactInterface[] => {
    return contacts;
}

export const fetchContactById = (id: number): ContactInterface | undefined => {
    return contacts.find((contact) => contact.id === id)
}