import fs from 'fs'
import { UserInterface } from '../models/user';

const users: UserInterface[] = JSON.parse(fs.readFileSync('./data/users.json', 'utf-8'))

export const fetchAllUsers = (): UserInterface[] => {
    return users;
}

export const fetchUserById = (id: number): UserInterface | undefined => {
    return users.find((user) => user.id === id)
}

export const postUser = (user: UserInterface) => {
    return {succes: true, user: user}
}

export const putUser = () => {
    return {succes: true}
}

export const patchUser = (user: UserInterface) => {
    return {succes: true, user: user}
}

export const deleteUser = () => {
    return {succes: true}
}