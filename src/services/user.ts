import { mysqlConnect } from '../config/db';
import { UserInterface } from '../models/user';


export const fetchAllUsers = async (): Promise<any>  => {
    try{
        const connection = await mysqlConnect();
        const [result, fields] = await connection.execute('SELECT * FROM users')
        return result;
    }catch(error){
        console.error('Error, users were not obtained: ', error)
        throw error;
    }
}

export const fetchUserById = async (id: string): Promise<any> => {
    try{
        const connection = await mysqlConnect();
        const [result, fields] = await connection.execute(`SELECT * FROM users WHERE id = ${id}`)
        return result;
    }catch(error){
        console.error('Error, user were not obtained: ', error)
        throw error;
    }
}

// export const postUser = async (user: UserInterface) => {
//     try{
//         const data = new UserModel({
//             photo: user.photo,
//             name: user.name,
//             date: user.date,
//             email: user.email,
//             phone: user.phone,
//             description: user.description,
//             status: user.status
//         })
//         await data.save();
//         return { success: true, user: data }
//     }catch (error) {
//         console.error('Error, user not saved: ', error)
//         throw error;
//     }
// }

// export const putUser = async (id: string, body: UserInterface) => {
//     try {
//         return await UserModel.findByIdAndUpdate(id, body)
//     } catch (error) {
//         console.error('Error, user not updated: ', error)
//         throw error;
//     }}

// export const deleteUser = async(id: string) => {
//     try {
//         await UserModel.findByIdAndDelete(id)
//         return { success: true }
//     } catch (error) {
//         console.error('Error, booking not deleted: ', error)
//         throw error;
//     }
// }