import rooms from '../data/rooms.json'
import { RoomInterface } from '../models/room';

export const fetchAllRooms = (): RoomInterface[] => {
    return rooms;
}

export const fetchRoomById = (id: number): RoomInterface | undefined => {
    return rooms.find((room) => room.id === id)
}