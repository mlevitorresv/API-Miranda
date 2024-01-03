import { UserInterface, UserModel } from '../models/user';


export const fetchAllUsers = async (): Promise<UserInterface[]> => {
    try{
        return await UserModel.find();
    }catch(error){
        console.error('Error, users were not obtained: ', error)
        throw error;
    }
}

export const fetchUserById = async (id: number): Promise<UserInterface | null> => {
    try{
        return await UserModel.findOne({id: id});
    }catch(error){
        console.error('Error, user were not obtained: ', error)
        throw error;
    }
}

export const postUser = (user: UserInterface) => {
    try{
        const data = new UserModel({
            photo: user.photo,
            id: user.id,
            name: user.name,
            date: user.date,
            email: user.email,
            phone: user.phone,
            description: user.description,
            status: user.status
        })
        data.save();
        return { success: true, user: data }
    }catch (error) {
        console.error('Error, user not saved: ', error)
        throw error;
    }
}

export const putUser = () => {
    return { success: true }
}

export const patchUser = (user: UserInterface) => {
    return { success: true, user: user }
}

export const deleteUser = async(id: string) => {
    try {
        await UserModel.findOneAndDelete({id: id})
        return { success: true }
    } catch (error) {
        console.error('Error, booking not deleted: ', error)
        throw error;
    }
}