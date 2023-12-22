import fs from 'fs'; 
import { RoomInterface } from '../models/room';

const rooms: RoomInterface[] = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf-8'))

export const fetchAllRooms = (): RoomInterface[] => {
    return rooms;
}

export const fetchRoomById = (id: number): RoomInterface | undefined => {
    return rooms.find((room) => room.id === id)
}

export const postRoom = (room: RoomInterface) => {
    return {succes: true, room: room}
}

export const putRoom = () => {
    return {succes: true}
}

export const patchRoom = (room: RoomInterface) => {
    return {succes: true, room: room}
}

export const deleteRoom = () => {
    return {succes: true}
}