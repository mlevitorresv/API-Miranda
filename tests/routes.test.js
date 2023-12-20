const request = require('supertest');
const app = require('./app')
const rooms = require('../data/rooms.json')

describe('Room Endpoints', () => {
    it('should return all rooms', async () => {
        const res = await request(app)
            .get('/rooms');
        expect(res.statusCode).toEqual(201)
        expect(res).toEqual(rooms)
    })
})