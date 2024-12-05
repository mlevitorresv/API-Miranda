import { ContactInterface, ContactModel } from '../models/contact';

export const fetchAllContacts = async (): Promise<ContactInterface[]> => {
    try{
        return await ContactModel.find();
    }catch(error){
        console.error('Error, contacts were not obtained: ', error)
        throw error;
    }
}

export const fetchContactById = async (id: string): Promise<ContactInterface | null> => {
    try{
        return await ContactModel.findById(id);
    }catch(error){
        console.error('Error, contact were not obtained: ', error)
        throw error;
    }
}

export const postContact = async (contact: ContactInterface) => {
    try{
        const data = new ContactModel({
            photo: contact.photo,
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
            comment: contact.comment,
            date: contact.date,
            dateTime: contact.dateTime,
            archived: contact.archived
        })
        await data.save();
        return { success: true, contact: data }
    }catch(error){
        console.error('Error, contact not saved: ', error)
        throw error;
    }
    
}

export const putContact = async (id: string, body: ContactInterface) => {
    try {
        return await ContactModel.findByIdAndUpdate(id, body)
    } catch (error) {
        console.error('Error, contact not updated: ', error)
        throw error;
    }
}

export const deleteContact = async(id: string) => {
    try {
        await ContactModel.findByIdAndDelete(id)
        return { success: true }
    } catch (error) {
        console.error('Error, booking not deleted: ', error)
        throw error;
    }
}