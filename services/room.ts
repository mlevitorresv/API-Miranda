import rooms from '../data/rooms.json'

export const fetchAllRooms = () => {
    return rooms;
}

export const fetchRoomById = (id: number) => {
    return rooms.find((room) => room.id === id)
}