// import { RoomModel } from '../models/room'
import { mysqlConnect } from '../config/db';
import { Connection } from 'mysql2/promise';
// import { UserModel } from '../models/user';
// import { ContactModel } from '../models/contact';
// import { BookingModel } from '../models/booking';


const createRandomRoom = async () => {
    // const room = new RoomModel({
    //     photo: faker.image.urlPicsumPhotos().toString(),
    //     id: faker.number.int(),
    //     type: faker.string.alpha(),
    //     bed: faker.helpers.arrayElement(["Single Bed", "Double bed", "Suite"]),
    //     amenities: faker.string.alpha(),
    //     description: faker.string.alpha(),
    //     rate: faker.number.float(),
    //     price: faker.number.float(),
    //     discount: faker.number.int(),
    //     available: faker.datatype.boolean()
    // })
    // await room.save()
}

const createRandomUser = async () => {
    // const user = new UserModel({
    //     photo: faker.image.urlPicsumPhotos().toString(),
    //     id: faker.number.int(),
    //     name: faker.person.fullName().toString(),
    //     date: faker.date.birthdate().toLocaleDateString(),
    //     email: faker.internet.email().toString(),
    //     phone: faker.phone.number().toString(),
    //     description: faker.string.alpha(),
    //     status: faker.helpers.arrayElement(["ACTIVE", "INACTIVE"])
    // })
    // await user.save();
}

const createRandomContact = async () => {
    // const contact = new ContactModel({
    //     photo: faker.image.urlPicsumPhotos().toString(),
    //     id: faker.number.int(),
    //     name: faker.person.fullName().toString(),
    //     email: faker.internet.email().toString(),
    //     phone: faker.phone.number().toString(),
    //     comment: faker.lorem.paragraph(3).toString(),
    //     date: faker.date.recent().toLocaleDateString(),
    //     dateTime: faker.date.recent().toLocaleTimeString(),
    //     archived: faker.datatype.boolean()

    // })
    // await contact.save()
}

const createRandomBooking = async () => {
    // const rooms = await RoomModel.find();
    // const random = Math.floor(Math.random() * rooms.length)

    // const roomId = rooms[random].id;

    // const booking = new BookingModel({
    //     photo: faker.image.urlPicsumPhotos().toString(),
    //     name: faker.person.fullName().toString(),
    //     id: faker.number.int(),
    //     orderDate: faker.date.past().toLocaleDateString(),
    //     orderTime: faker.date.past().toLocaleTimeString(),
    //     checkInDate: faker.date.soon().toLocaleDateString(),
    //     checkInTime: faker.date.soon().toLocaleTimeString(),
    //     checkOut: faker.date.future().toLocaleDateString(),
    //     checkOutTime: faker.date.future().toLocaleTimeString(),
    //     notes: faker.lorem.paragraph(1).toString(),
    //     room: roomId,
    //     status: faker.helpers.arrayElement(["pending", "booked", "refund"])
    // })
    // console.log(booking)
    // await booking.save();
}


const createTableUsers = async (connection: Connection) => {
    try {
        await connection.execute (`
            CREATE TABLE IF NOT EXISTS users(
                id INT AUTO_INCREMENT PRIMARY KEY,
                photo VARCHAR(255) NOT NULL,
                name VARCHAR(255) NOT NULL,
                date DATE NOT NULL,
                email VARCHAR(255) NOT NULL,
                phone VARCHAR(9) NOT NULL,
                description TEXT NOT NULL,
                status VARCHAR(255) NOT NULL
            )
        `)
        console.log(`Tabla 'users' creada correctamente`)
    } catch (error) {
        console.error(`Error al crear la tabla 'users': `, error);        
    }
}


const createTableContacts = async (connection: Connection) => {
    try {
        await connection.execute (`
            CREATE TABLE IF NOT EXISTS contacts(
                id INT AUTO_INCREMENT PRIMARY KEY,
                photo VARCHAR(255) NOT NULL,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                phone VARCHAR(9) NOT NULL,
                comment TEXT NOT NULL,
                date DATE NOT NULL,
                dateTime TIME NOT NULL,
                archived BOOLEAN NOT NULL
            )
        `)
        console.log(`Tabla 'contacts' creada correctamente`)
    } catch (error) {
        console.error(`Error al crear la tabla 'contacts': `, error);        
    }
}

const createTableRooms = async (connection: Connection) => {
    try {
        await connection.execute (`
            CREATE TABLE IF NOT EXISTS rooms(
                id INT AUTO_INCREMENT PRIMARY KEY,
                number INT NOT NULL,
                photo VARCHAR(255) NOT NULL,
                type VARCHAR(255) NOT NULL,
                bed VARCHAR(255) NOT NULL,
                amenities JSON,
                description VARCHAR(9) NOT NULL,
                rate INT NOT NULL,
                price INT NOT NULL,
                discount INT NOT NULL,
                available BOOLEAN NOT NULL
            )
        `)
        console.log(`Tabla 'rooms' creada correctamente`)
    } catch (error) {
        console.error(`Error al crear la tabla 'rooms': `, error);        
    }
}

const run = async () => {
    const connection = await mysqlConnect();

    try {
        await createTableUsers(connection);
        await createTableContacts(connection);
        await createTableRooms(connection);
    } catch (error) {
        console.error('Error durante la creación de tablas:', error);
    } finally {
        connection.end();
    }
    // for (let i = 0; i < 10; i++) {
    //     await createRandomRoom();
    //     await createRandomUser();
    //     await createRandomContact();
    //     await createRandomBooking();        
    // }
};

run();