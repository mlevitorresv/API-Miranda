import { UserInterface, UserModel } from '../models/user';


export const fetchAllUsers = async (): Promise<UserInterface[]> => {
    return await UserModel.find();
}

export const fetchUserById = async (id: number): Promise<UserInterface | null> => {
    return await UserModel.findOne({id: id});
}

export const postUser = (user: UserInterface) => {
    const data = new UserModel({
        photo: user.photo,
        name: user.name,
        date: user.date,
        email: user.email,
        phone: user.phone,
        description: user.description,
        status: user.status
    })
    data.save();
    return { success: true, user: data }
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