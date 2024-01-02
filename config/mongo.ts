import mongoose from "mongoose"


export const mongoConnect = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/HotelMiranda')
        console.log('Success connection')
    } catch (e) {
        console.error('DB error: ',e)
    }
}