import { faker } from "@faker-js/faker";
import { mysqlConnect } from '../config/db';
import { Connection } from 'mysql2/promise';
import { fetchAllRooms, postRoom } from '../services/room';
import { postUser } from "../services/user";
import { postContact } from "../services/contact";
import { postBooking } from "../services/booking";


const createRandomRoom = async () => {
    const room = {
        number: faker.number.int({min: 0, max: 300}),
        photo: faker.image.urlPicsumPhotos().toString(),
        type: faker.helpers.arrayElement([
            "Single Bed",
            "Double Bed",
            "Suite",
        ]),
        bed: faker.helpers.arrayElement(["Big", "Medium", "Small"]),
        amenities: [faker.helpers.arrayElement([
            "TV",
            "Sea",
            "Room service",
        ])],
        description: faker.string.alpha(),
        rate: faker.number.float({min: 0, max: 5}),
        price: faker.number.float({min: 0, max: 300}),
        discount: faker.number.int({min: 0, max: 100}),
        available: faker.datatype.boolean()
    }
    postRoom(room);
}

const createRandomUser = async () => {
    const user = {
        photo: faker.image.urlPicsumPhotos(),
        name: faker.person.fullName(),
        date: faker.date.birthdate().toISOString().split('T')[0],
        email: faker.internet.email(),
        phone: faker.number.int({min: 611111111, max: 699999999}).toString(),
        description: faker.string.alpha(),
        status: faker.helpers.arrayElement(["ACTIVE", "INACTIVE"])
    }
    user.name = user.name.replace("'", "''");

    postUser(user);
}

const createRandomContact = async () => {
    const contact = {
        photo: faker.image.urlPicsumPhotos(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.number.int({min: 611111111, max: 699999999}).toString(),
        comment: faker.lorem.paragraph(3).toString(),
        date: faker.date.recent().toISOString().split('T')[0],
        dateTime: faker.date.recent().toISOString().slice(11, 16),
        archived: faker.datatype.boolean()

    }
    postContact(contact)
}

const createRandomBooking = async () => {
    const rooms = await fetchAllRooms();
    const random = Math.floor(Math.random() * rooms.length)

    const roomId = rooms[random].id;

    const booking = {
        photo: faker.image.urlPicsumPhotos(),
        name: faker.person.fullName(),
        orderDate: faker.date.past().toISOString().split('T')[0],
        orderTime: faker.date.past().toISOString().slice(11, 16),
        checkInDate: faker.date.soon().toISOString().split('T')[0],
        checkInTime: faker.date.soon().toISOString().slice(11, 16),
        checkOut: faker.date.future().toISOString().split('T')[0],
        checkOutTime: faker.date.future().toISOString().slice(11, 16),
        notes: faker.lorem.paragraph(1).toString(),
        room: roomId,
        status: faker.helpers.arrayElement(["pending", "booked", "refund"])
    }
    postBooking(booking)
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
                description VARCHAR(255) NOT NULL,
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

const createTableBookings = async (connection: Connection) => {
    try {
        await connection.execute (`
            CREATE TABLE IF NOT EXISTS bookings(
                id INT AUTO_INCREMENT PRIMARY KEY,
                photo VARCHAR(255) NOT NULL,
                name VARCHAR(255) NOT NULL,
                orderDate DATE NOT NULL,
                orderTime TIME NOT NULL,
                checkinDate DATE NOT NULL,
                checkinTime TIME NOT NULL,
                checkout DATE NOT NULL,
                checkoutTime TIME NOT NULL,
                notes TEXT NOT NULL,
                roomId INT NOT NULL,
                status VARCHAR(255) NOT NULL,
                FOREIGN KEY (roomId) REFERENCES rooms(id)
            )
        `)
        console.log(`Tabla 'bookings' creada correctamente`)
    } catch (error) {
        console.error(`Error al crear la tabla 'bookings': `, error);        
    }
}

const run = async () => {
    const connection = await mysqlConnect();

    try {
        await createTableUsers(connection);
        await createTableContacts(connection);
        await createTableRooms(connection);
        await createTableBookings(connection)
    } catch (error) {
        console.error('Error durante la creación de tablas:', error);
    } finally {
        connection.end();
    }
    for (let i = 0; i < 10; i++) {
        await createRandomRoom();
        await createRandomUser();
        await createRandomContact();
        await createRandomBooking();        
    }
};

run();

// SELECT * FROM bookings INNER JOIN rooms WHERE bookings.roomId = rooms.id