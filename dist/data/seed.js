"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const room_1 = require("../models/room");
const mongo_1 = require("../config/mongo");
const user_1 = require("../models/user");
const contact_1 = require("../models/contact");
const booking_1 = require("../models/booking");
const createRandomRoom = () => __awaiter(void 0, void 0, void 0, function* () {
    const room = new room_1.RoomModel({
        photo: faker_1.faker.image.urlPicsumPhotos().toString(),
        id: faker_1.faker.number.int(),
        type: faker_1.faker.string.alpha(),
        bed: faker_1.faker.helpers.arrayElement(["Single Bed", "Double bed", "Suite"]),
        amenities: faker_1.faker.string.alpha(),
        description: faker_1.faker.string.alpha(),
        rate: faker_1.faker.number.float(),
        price: faker_1.faker.number.float(),
        discount: faker_1.faker.number.int(),
        available: faker_1.faker.datatype.boolean()
    });
    yield room.save();
});
const createRandomUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const user = new user_1.UserModel({
        photo: faker_1.faker.image.urlPicsumPhotos().toString(),
        id: faker_1.faker.number.int(),
        name: faker_1.faker.person.fullName().toString(),
        date: faker_1.faker.date.birthdate().toLocaleDateString(),
        email: faker_1.faker.internet.email().toString(),
        phone: faker_1.faker.phone.number().toString(),
        description: faker_1.faker.string.alpha(),
        status: faker_1.faker.helpers.arrayElement(["ACTIVE", "INACTIVE"])
    });
    yield user.save();
});
const createRandomContact = () => __awaiter(void 0, void 0, void 0, function* () {
    const contact = new contact_1.ContactModel({
        photo: faker_1.faker.image.urlPicsumPhotos().toString(),
        id: faker_1.faker.number.int(),
        name: faker_1.faker.person.fullName().toString(),
        email: faker_1.faker.internet.email().toString(),
        phone: faker_1.faker.phone.number().toString(),
        comment: faker_1.faker.lorem.paragraph(3).toString(),
        date: faker_1.faker.date.recent().toLocaleDateString(),
        dateTime: faker_1.faker.date.recent().toLocaleTimeString(),
        archived: faker_1.faker.datatype.boolean()
    });
    yield contact.save();
});
const createRandomBooking = () => __awaiter(void 0, void 0, void 0, function* () {
    const rooms = yield room_1.RoomModel.find();
    const random = Math.floor(Math.random() * rooms.length);
    const roomId = rooms[random].id;
    const booking = new booking_1.BookingModel({
        photo: faker_1.faker.image.urlPicsumPhotos().toString(),
        name: faker_1.faker.person.fullName().toString(),
        id: faker_1.faker.number.int(),
        orderDate: faker_1.faker.date.past().toLocaleDateString(),
        orderTime: faker_1.faker.date.past().toLocaleTimeString(),
        checkInDate: faker_1.faker.date.soon().toLocaleDateString(),
        checkInTime: faker_1.faker.date.soon().toLocaleTimeString(),
        checkOut: faker_1.faker.date.future().toLocaleDateString(),
        checkOutTime: faker_1.faker.date.future().toLocaleTimeString(),
        notes: faker_1.faker.lorem.paragraph(1).toString(),
        room: roomId,
        status: faker_1.faker.helpers.arrayElement(["pending", "booked", "refund"])
    });
    console.log(booking);
    yield booking.save();
});
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    (0, mongo_1.mongoConnect)();
    for (let i = 0; i < 10; i++) {
        yield createRandomRoom();
        yield createRandomUser();
        yield createRandomContact();
        yield createRandomBooking();
    }
});
run();
