import fs from 'fs'
import { UserInterface } from '../models/user';

const users: UserInterface[] = JSON.parse(fs.readFileSync('./data/users.json', 'utf-8'))

export const fetchAllUsers = (): UserInterface[] => {
    return users;
}

export const fetchUserById = (id: number): UserInterface | undefined => {
    return users.find((user) => user.id === id)
}