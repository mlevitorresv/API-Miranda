import { ContactInterface, ContactModel } from '../models/contact';

export const fetchAllContacts = async (): Promise<ContactInterface[]> => {
    return await ContactModel.find();
}

export const fetchContactById = async (id: number): Promise<ContactInterface | null> => {
    return await ContactModel.findOne({id: id});
}

export const postContact = (contact: ContactInterface) => {
    const data = new ContactModel({
        photo: contact.photo,
        id: contact.id,
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        comment: contact.comment,
        date: contact.date,
        dateTime: contact.dateTime,
        archived: contact.archived
    })
    data.save();
    return { success: true, contact: data }
}

export const putContact = () => {
    return { success: true }
}

export const patchContact = (contact: ContactInterface) => {
    return { success: true, contact: contact }
}

export const deleteContact = () => {
    return { success: true }
}