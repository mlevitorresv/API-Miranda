import users from '../data/users.json'

export const fetchAllUsers = () => {
    return users;
}

export const fetchUserById = (id: number) => {
    return users.find((user) => user.id === id)
}