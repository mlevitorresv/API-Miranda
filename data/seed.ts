import { faker } from '@faker-js/faker'
import { RoomModel } from '../models/room'
import { mongoConnect } from '../config/mongo'
import { UserModel } from '../models/user';
import { ContactModel } from '../models/contact';
import { BookingModel } from '../models/booking';
import { postRoom } from '../services/room';
import { postUser } from '../services/user';
import { postContact } from '../services/contact';
import { postBooking } from '../services/booking';

mongoConnect();

const createRandomRoom = () => {
    const room = new RoomModel({
        photo: faker.image.urlPicsumPhotos().toString(),
        id: faker.number.int(),
        type: faker.string.alpha(),
        bed: faker.helpers.arrayElement(["Single Bed", "Double bed", "Suite"]),
        amenities: faker.string.alpha(),
        description: faker.string.alpha(),
        rate: faker.number.float(),
        price: faker.number.float(),
        discount: faker.number.int(),
        available: faker.datatype.boolean()
    })
    postRoom(room);
}

const createRandomUser = () => {
    const user = new UserModel({
        photo: faker.image.urlPicsumPhotos().toString(),
        id: faker.number.int(),
        name: faker.person.fullName().toString(),
        date: faker.date.birthdate().toLocaleDateString(),
        email: faker.internet.email().toString(),
        phone: faker.phone.number().toString(),
        description: faker.string.alpha(),
        status: faker.helpers.arrayElement(["ACTIVE", "INACTIVE"])
    })
    postUser(user);
}

const createRandomContact = () => {
    const contact = new ContactModel({
        photo: faker.image.urlPicsumPhotos().toString(),
        id: faker.number.int(),
        name: faker.person.fullName().toString(),
        email: faker.internet.email().toString(),
        phone: faker.phone.number().toString(),
        comment: faker.lorem.paragraph(3).toString(),
        date: faker.date.recent().toLocaleDateString(),
        dateTime: faker.date.recent().toLocaleTimeString(),
        archived: faker.datatype.boolean()

    })
    postContact(contact);
}

const createRandomBooking = () => {
    const booking = new BookingModel({
        photo: faker.image.urlPicsumPhotos().toString(),
        name: faker.person.fullName().toString(),
        id: faker.number.int(),
        orderDate: faker.date.past().toLocaleDateString(),
        orderTime: faker.date.past().toLocaleTimeString(),
        checkInDate: faker.date.soon().toLocaleDateString(),
        checkInTime: faker.date.soon().toLocaleTimeString(),
        checkOut: faker.date.future().toLocaleDateString(),
        checkOutTime: faker.date.future().toLocaleTimeString(),
        notes: faker.lorem.paragraph(1).toString(),
        room: faker.number.int().toString(),
        status: faker.helpers.arrayElement(["pending", "booked", "refund"])
    })
    postBooking(booking);
}



const run = async () => {
    for (let i = 0; i < 10; i++) {
        createRandomRoom();
        createRandomUser();
        createRandomContact();
        createRandomBooking();        
    }
};

run();