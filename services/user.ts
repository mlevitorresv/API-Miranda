import users from '../data/users.json'
import { UserInterface } from '../models/user';

export const fetchAllUsers = (): UserInterface[] => {
    return users;
}

export const fetchUserById = (id: number): UserInterface | undefined => {
    return users.find((user) => user.id === id)
}