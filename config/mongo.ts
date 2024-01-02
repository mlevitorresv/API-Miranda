import mongoose from "mongoose"

const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD

export const mongoConnect = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${db_user}:${db_password}@hotelmiranda.ukonsrz.mongodb.net/`)
        console.log('Success connection...')
    } catch (e) {
        console.error('DB error: ',e)
    }
}