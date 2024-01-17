import mysql from 'mysql2';
import { mysqlConnect } from '../config/db';
import { RoomInterface } from '../models/room';

export const fetchAllRooms = async (): Promise<any> => {
    try{
        const connection = await mysqlConnect();
        const [result, fields] = await connection.execute('SELECT * FROM rooms')
        return result;
    }catch(error){
        console.error('Error, rooms were not obtained: ', error)
        throw error;
    }
}

export const fetchRoomById = async (id: string): Promise<any> => {
    try{
        const connection = await mysqlConnect();
        const [result, fields] = await connection.execute(`SELECT * FROM rooms WHERE id = ${id}`)
        return result;    
    }catch(error){
        console.error('Error, room were not obtained: ', error)
        throw error;
    }
}

export const postRoom = async (room: RoomInterface) => {
    try {

        const amenities = JSON.stringify(room.amenities)
        const amenitiesScaped = mysql.escape(amenities)
        const query = `
            INSERT INTO rooms (number, photo, type, bed, amenities, description, rate, price, discount, available)
            VALUES (${room.number}, '${room.photo}', '${room.type}', '${room.bed}', ${amenitiesScaped}, '${room.description}', ${room.rate}, ${room.price}, ${room.discount}, ${room.available})
        `

        const connection = await mysqlConnect();
        await connection.execute(query)
        return { success: true, room: room }
    }catch(error){
        console.error('Error, room not saved: ', error)
        throw error;
    }
}

export const putRoom = async (id: string, body: RoomInterface, ) => {
    try {
        const updateFields = {...body};
        const keys = Object.keys(updateFields)
        const values = Object.values(updateFields)
        
        const setClause = keys.map(key => `${key} = ?`).join(', ')

        const query = `UPDATE rooms SET ${setClause} WHERE id = ?;`;

        const connection = await mysqlConnect();
        const updateValues = [...values, id];

        connection.execute(query, updateValues)
        return { success: true, user: body }
    } catch (error) {
        console.error('Error, room not updated: ', error)
        throw error;
    }
}

export const deleteRoom = async(id: string) => {
    try {
        const connection = await mysqlConnect();
        const [result, fields] = await connection.execute(`DELETE FROM rooms WHERE id = ${id}`)
        return result;
        return { success: true }
    } catch (error) {
        console.error('Error, room not deleted: ', error)
        throw error;
    }
}