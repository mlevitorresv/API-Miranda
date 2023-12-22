import fs from 'fs';
import { RoomInterface } from '../models/room';

const rooms: RoomInterface[] = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf-8'))

export const fetchAllRooms = (): RoomInterface[] => {
    const allRooms = rooms;
    if (!allRooms)
        throw new Error('Cannot get all rooms')
    return allRooms;
}

export const fetchRoomById = (id: number): RoomInterface => {
    const room = rooms.find((room) => room.id === id)
    if (!room)
        throw new Error('Room not found')
    return room;
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