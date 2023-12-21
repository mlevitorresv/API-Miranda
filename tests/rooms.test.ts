const request = require('supertest');
import app from '../app'
import { generateToken } from '../middleware/auth';
import rooms from '../data/rooms.json'

describe('Rooms Endpoints', () => {
    const token = generateToken('test@test.com', 'test1234')
    it('should return all rooms', async () => {
        const response = await request(app)
            .get('/rooms')
            .set('Authorization', `Bearer ${token}`)
        expect(response.statusCode).toEqual(200)
        expect(response.body).toEqual(rooms)
    })

    it('should return status 401 (no token)', async () => {
        const response = await request(app)
            .get('/rooms')
        expect(response.statusCode).toEqual(401)
        expect(response.body).toEqual({ 'error': true, 'message': 'no auth header' })
    })

    it('should return room 101', async () => {
        const response = await request(app)
            .get('/rooms/101')
            .set('Authorization', `Bearer ${token}`)

        expect(response.statusCode).toEqual(200)
        expect(response.body).toEqual(rooms[100])
    })

    it('should return an object informing correctly about updated element', async () => {
        const response = await request(app)
            .put('/rooms/101')
            .set('Authorization', `Bearer ${token}`)

            expect(response.statusCode).toEqual(200)
            expect(response.body).toEqual({ 'success': true })

    })

    it('should return an object informing correctly about updated element and body data', async () => {
        const response = await request(app)
            .patch('/rooms/101')
            .send({id: 1, name: 'suite'})
            .set('Authorization', `Bearer ${token}`)

            expect(response.statusCode).toEqual(200)
            expect(response.body).toEqual({ 'success': true, room:{id: 1, name: 'suite'}})
    })

    it('should return an object informing correctly about removed element', async () => {
        const response = await request(app)
            .delete('/rooms/101')
            .set('Authorization', `Bearer ${token}`)

            expect(response.statusCode).toEqual(200)
            expect(response.body).toEqual({ 'success': true })

    })

    it('should return an object informing correctly about created element and body data', async () => {
        const response = await request(app)
            .post('/rooms/new')
            .send({id: 1, name: 'suite'})
            .set('Authorization', `Bearer ${token}`)

            expect(response.statusCode).toEqual(200)
            expect(response.body).toEqual({ 'success': true, room:{id: 1, name: 'suite'}})

    })
})