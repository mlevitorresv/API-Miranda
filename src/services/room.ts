import { RowDataPacket } from 'mysql2';
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
        return result;    }catch(error){
        console.error('Error, room were not obtained: ', error)
        throw error;
    }
}

// export const postRoom = async (room: RoomInterface) => {
//     try {
//         const data = new RoomModel({
//             photo: room.photo,
//             type: room.type,
//             bed: room.bed,
//             amenities: room.amenities,
//             description: room.description,
//             rate: room.rate,
//             price: room.price,
//             discount: room.discount,
//             available: room.available
//         })
//         await data.save();
//         return { success: true, room: data }
//     }catch(error){
//         console.error('Error, room not saved: ', error)
//         throw error;
//     }
// }

// export const putRoom = async (id: string, body: RoomInterface, ) => {
//     try {
//         return await RoomModel.findByIdAndUpdate(id, body)
//     } catch (error) {
//         console.error('Error, room not updated: ', error)
//         throw error;
//     }
// }

// export const deleteRoom = async(id: string) => {
//     try {
//         await RoomModel.findByIdAndDelete(id)
//         return { success: true }
//     } catch (error) {
//         console.error('Error, room not deleted: ', error)
//         throw error;
//     }
// }