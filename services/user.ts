import fs from 'fs'
import { UserInterface } from '../models/user';

const users: UserInterface[] = JSON.parse(fs.readFileSync('./data/users.json', 'utf-8'))

export const fetchAllUsers = (): UserInterface[] => {
    const allUsers = users;
    if (!allUsers)
        throw new Error('Cannot get all users')
    return allUsers;
}

export const fetchUserById = (id: number): UserInterface => {
    const user = users.find((user) => user.id === id)
    if (!user)
        throw new Error('User not found')
    return user;
}

export const postUser = (user: UserInterface) => {
    return { success: true, user: user }
}

export const putUser = () => {
    return { success: true }
}

export const patchUser = (user: UserInterface) => {
    return { success: true, user: user }
}

export const deleteUser = () => {
    return { success: true }
}