import { RoomInterface, RoomModel } from '../models/room';

export const fetchAllRooms = async (): Promise<RoomInterface[]> => {
    return await RoomModel.find();
}

export const fetchRoomById = async (id: number): Promise<RoomInterface | null> => {
    return await RoomModel.findById(id);
}

export const postRoom = (room: RoomInterface) => {
    return { success: true, room: room }
}

export const putRoom = () => {
    return { success: true }
}

export const patchRoom = (room: RoomInterface) => {
    return { success: true, room: room }
}

export const deleteRoom = () => {
    return { success: true }
}