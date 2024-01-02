import { faker } from '@faker-js/faker'
import { RoomInterface, RoomModel } from './models/room'

const createRandomRoom = async () => {
    const room = new RoomModel({
        photo: faker.string.alpha(),
        id: faker.number.int(),
        type: faker.string.alpha(),
        bed: faker.string.alpha(),
        amenities: faker.string.alpha(),
        description: faker.string.alpha(),
        rate: faker.number.float(),
        price: faker.number.float(),
        discount: faker.number.int(),
        available: faker.datatype.boolean()
    })
    await room.save();
}



const run = async () => {
    for (let i = 0; i < 10; i++) {
        await createRandomRoom();
    }
};

run();