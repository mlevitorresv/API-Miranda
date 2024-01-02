import { UserInterface, UserModel } from '../models/user';


export const fetchAllUsers = async (): Promise<UserInterface[]> => {
    return await UserModel.find();
}

export const fetchUserById = async (id: number): Promise<UserInterface | null> => {
    return await UserModel.findById(id);
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