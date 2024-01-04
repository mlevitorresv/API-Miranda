import { ContactInterface, ContactModel } from '../models/contact';

export const fetchAllContacts = async (): Promise<ContactInterface[]> => {
    try{
        return await ContactModel.find();
    }catch(error){
        console.error('Error, contacts were not obtained: ', error)
        throw error;
    }
}

export const fetchContactById = async (id: number): Promise<ContactInterface | null> => {
    try{
        return await ContactModel.findOne({id: id});
    }catch(error){
        console.error('Error, contact were not obtained: ', error)
        throw error;
    }
}

export const postContact = (contact: ContactInterface) => {
    try{
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
    }catch(error){
        console.error('Error, contact not saved: ', error)
        throw error;
    }
    
}

export const putContact = async (body: ContactInterface) => {
    try {
        return await ContactModel.findOneAndUpdate({id: body.id}, body)
    } catch (error) {
        console.error('Error, contact not updated: ', error)
        throw error;
    }
}

export const deleteContact = async(id: string) => {
    try {
        await ContactModel.findOneAndDelete({id: id})
        return { success: true }
    } catch (error) {
        console.error('Error, booking not deleted: ', error)
        throw error;
    }
}