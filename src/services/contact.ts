import { time } from "console";
import { mysqlConnect } from "../config/db";
import { ContactInterface } from "../models/contact";

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

export const postContact = async (contact: ContactInterface) => {
    try{
        const date = new Date(contact.date).toISOString().split('T')[0];
        const[hours, minutes] = contact.dateTime.split(':');
        const referenceDate = new Date(2000, 0, 1, parseInt(hours), parseInt(minutes));
        const time = referenceDate.toISOString().slice(11,16)

        const query = `
            INSERT INTO contacts (photo, name, email, phone, comment, date, dateTime, archived) 
            VALUES ('${contact.photo}', '${contact.name}', '${contact.email}', '${contact.phone}',
             '${contact.comment}', '${date}', '${time}', ${contact.archived})
        `

        const connection = await mysqlConnect();
        connection.execute(query)
        return { success: true, contact: contact }
    }catch(error){
        console.error('Error, contact not saved: ', error)
        throw error;
    }
    
}

export const patchContact = async (id: string, body: ContactInterface) => {
    try {
        const updateFields = {...body};
        const keys = Object.keys(updateFields)
        const values = Object.values(updateFields)
        
        const setClause = keys.map(key => `${key} = ?`).join(', ')

        const query = `UPDATE contacts SET ${setClause} WHERE id = ?;`;

        const connection = await mysqlConnect();
        const updateValues = [...values, id];

        connection.execute(query, updateValues)
        return { success: true, user: body }
    } catch (error) {
        console.error('Error, contact not updated: ', error)
        throw error;
    }
}

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