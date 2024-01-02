import { ContactInterface, ContactModel } from '../models/contact';

export const fetchAllContacts = async (): Promise<ContactInterface[]> => {
    return await ContactModel.find();
}

export const fetchContactById = async (id: number): Promise<ContactInterface | null> => {
    return await ContactModel.findById(id);
}

export const postContact = (contact: ContactInterface) => {
    return { success: true, contact: contact }
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