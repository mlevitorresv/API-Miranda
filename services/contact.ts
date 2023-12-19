import contacts from '../data/comment.json'

export const fetchAllContacts = () => {
    return contacts;
}

export const fetchContactById = (id: number) => {
    return contacts.find((contact) => contact.id === id)
}