import { mysqlConnect } from '../config/db';
import { UserInterface } from '../models/user';


export const fetchAllUsers = async (): Promise<any>  => {
    try{
        const connection = await mysqlConnect();
        const [result, fields] = await connection.execute('SELECT * FROM users')
        return result;
    }catch(error){
        console.error('Error, users were not obtained: ', error)
        throw error;
    }
}

export const fetchUserById = async (id: string): Promise<any> => {
    try{
        const connection = await mysqlConnect();
        const [result, fields] = await connection.execute(`SELECT * FROM users WHERE id = ${id}`)
        return result;
    }catch(error){
        console.error('Error, user were not obtained: ', error)
        throw error;
    }
}

export const postUser = async (user: UserInterface) => {
    try{
        const date = new Date(user.date).toISOString().split('T')[0];
        const query = `
            INSERT INTO users (photo, name, date, email, phone, description, status) 
            VALUES ('${user.photo}', '${user.name}', '${date}', '${user.email}', '${user.phone}', '${user.description}', '${user.status}')
        `
        const connection = await mysqlConnect();
        connection.execute(query)
        return { success: true, user: user }
    }catch (error) {
        console.error('Error, user not saved: ', error)
        throw error;
    }
}

export const putUser = async (id: string, body: UserInterface) => {
    try {
        const updateFields = {...body};
        const keys = Object.keys(updateFields)
        const values = Object.values(updateFields)
        
        const setClause = keys.map(key => `${key} = ?`).join(', ')

        const query = `UPDATE users SET ${setClause} WHERE id = ?;`;

        const connection = await mysqlConnect();
        const updateValues = [...values, id];

        connection.execute(query, updateValues)
        return { success: true, user: body }
    } catch (error) {
        console.error('Error, user not updated: ', error)
        throw error;
    }}

export const deleteUser = async(id: string) => {
    try {
        const connection = await mysqlConnect();
        const [result, fields] = await connection.execute(`DELETE FROM users WHERE id = ${id}`)
        return result;
    } catch (error) {
        console.error('Error, booking not deleted: ', error)
        throw error;
    }
}