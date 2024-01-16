// import { UserInterface, UserModel } from '../models/user';


// export const fetchAllUsers = async (): Promise<UserInterface[]> => {
//     try{
//         return await UserModel.find();
//     }catch(error){
//         console.error('Error, users were not obtained: ', error)
//         throw error;
//     }
// }

// export const fetchUserById = async (id: string): Promise<UserInterface | null> => {
//     try{
//         return await UserModel.findById(id);
//     }catch(error){
//         console.error('Error, user were not obtained: ', error)
//         throw error;
//     }
// }

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