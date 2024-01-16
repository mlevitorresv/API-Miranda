import { mysqlConnect } from "../config/db";

export const fetchAllContacts = async (): Promise<any> => {
    try{
        const connection = await mysqlConnect();
        const [result, fields] = await connection.execute(`SELECT * FROM contacts`)
        return result;
    }catch(error){
        console.error('Error, contacts were not obtained: ', error)
        throw error;
    }
}

export const fetchContactById = async (id: string): Promise<any> => {
    try{
        const connection = await mysqlConnect();
        const [result, fields] = await connection.execute(`SELECT * FROM contacts WHERE id = ${id}`)
        return result;
    }catch(error){
        console.error('Error, contact were not obtained: ', error)
        throw error;
    }
}

// export const postContact = async (contact: ContactInterface) => {
//     try{
//         const data = new ContactModel({
//             photo: contact.photo,
//             name: contact.name,
//             email: contact.email,
//             phone: contact.phone,
//             comment: contact.comment,
//             date: contact.date,
//             dateTime: contact.dateTime,
//             archived: contact.archived
//         })
//         await data.save();
//         return { success: true, contact: data }
//     }catch(error){
//         console.error('Error, contact not saved: ', error)
//         throw error;
//     }
    
// }

// export const putContact = async (id: string, body: ContactInterface) => {
//     try {
//         return await ContactModel.findByIdAndUpdate(id, body)
//     } catch (error) {
//         console.error('Error, contact not updated: ', error)
//         throw error;
//     }
// }

export const deleteContact = async(id: string) => {
    try {
        const connection = await mysqlConnect();
        const [result, fields] = await connection.execute(`DELETE FROM contacts WHERE id = ${id}`)
        return result;        
    } catch (error) {
        console.error('Error, booking not deleted: ', error)
        throw error;
    }
}