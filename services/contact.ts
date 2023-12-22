import fs from 'fs'
import { ContactInterface } from '../models/contact';

const contacts: ContactInterface[] = JSON.parse(fs.readFileSync('./data/comment.json', 'utf-8'))

export const fetchAllContacts = (): ContactInterface[] => {
    const allContacts = contacts;
    if (!allContacts)
        throw new Error('Cannot get all contacts')
    return allContacts;
}

export const fetchContactById = (id: number): ContactInterface => {
    const contact = contacts.find((contact) => contact.id === id)
    if (!contact)
        throw new Error('Contact not found')
    return contact;
}

export const postContact = (contact: ContactInterface) => {
    return { succes: true, contact: contact }
}

export const putContact = () => {
    return { succes: true }
}

export const patchContact = (contact: ContactInterface) => {
    return { succes: true, contact: contact }
}

export const deleteContact = () => {
    return { succes: true }
}