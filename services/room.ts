import { RoomInterface, RoomModel } from '../models/room';

export const fetchAllRooms = async (): Promise<RoomInterface[]> => {
    try{
        return await RoomModel.find();
    }catch(error){
        console.error('Error, rooms were not obtained: ', error)
        throw error;
    }
}

export const fetchRoomById = async (id: number): Promise<RoomInterface | null> => {
    try{
        return await RoomModel.findOne({id: id});
    }catch(error){
        console.error('Error, room were not obtained: ', error)
        throw error;
    }
}

export const postRoom = async (room: RoomInterface) => {
    try {
        const data = new RoomModel({
            photo: room.photo,
            id: room.id,
            type: room.type,
            bed: room.bed,
            amenities: room.amenities,
            description: room.description,
            rate: room.rate,
            price: room.price,
            discount: room.discount,
            available: room.available
        })
        await data.save();
        return { success: true, room: data }
    }catch(error){
        console.error('Error, room not saved: ', error)
        throw error;
    }
}

export const putRoom = async (body: RoomInterface, ) => {
    try {
        return await RoomModel.findOneAndUpdate({id: body.id}, body)
    } catch (error) {
        console.error('Error, room not updated: ', error)
        throw error;
    }
}

export const deleteRoom = async(id: string) => {
    try {
        await RoomModel.findOneAndDelete({id: id})
        return { success: true }
    } catch (error) {
        console.error('Error, room not deleted: ', error)
        throw error;
    }
}