import { RoomInterface, RoomModel } from '../models/room';

export const fetchAllRooms = async (): Promise<RoomInterface[]> => {
    return await RoomModel.find();
}

export const fetchRoomById = async (id: number): Promise<RoomInterface | null> => {
    return await RoomModel.findOne({ id: id });
}

export const postRoom = (room: RoomInterface) => {
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
    data.save();
    return { success: true, room: data }
}

export const putRoom = () => {
    return { success: true }
}

export const patchRoom = (room: RoomInterface) => {
    return { success: true, room: room }
}

export const deleteRoom = async(id: string) => {
    await RoomModel.findOneAndDelete({id:id})
    return { success: true }
}