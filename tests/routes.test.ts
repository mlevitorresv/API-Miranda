const request = require('supertest');
import app from '../app'
import { generateToken } from '../middleware/auth';
import rooms from '../data/rooms.json'
import users from '../data/users.json'
import contacts from '../data/comment.json'
import bookings from '../data/bookings.json'

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


describe('Users Endpoints', () => {
    const token = generateToken('test@test.com', 'test1234')
    it('should return all users', async () => {
        const response = await request(app)
            .get('/users')
            .set('Authorization', `Bearer ${token}`)
        expect(response.statusCode).toEqual(200)
        expect(response.body).toEqual(users)
    })

    it('should return status 401 (no token)', async () => {
        const response = await request(app)
            .get('/users')
        expect(response.statusCode).toEqual(401)
        expect(response.body).toEqual({ 'error': true, 'message': 'no auth header' })
    })

    it('should return user 101', async () => {
        const response = await request(app)
            .get('/users/101')
            .set('Authorization', `Bearer ${token}`)

        expect(response.statusCode).toEqual(200)
        expect(response.body).toEqual(users[100])
    })

    it('should return an object informing correctly about updated element', async () => {
        const response = await request(app)
            .put('/users/101')
            .set('Authorization', `Bearer ${token}`)

            expect(response.statusCode).toEqual(200)
            expect(response.body).toEqual({ 'success': true })

    })

    it('should return an object informing correctly about updated element and body data', async () => {
        const response = await request(app)
            .patch('/users/101')
            .send({id: 1, name: 'Andrés'})
            .set('Authorization', `Bearer ${token}`)

            expect(response.statusCode).toEqual(200)
            expect(response.body).toEqual({ 'success': true, user:{id: 1, name: 'Andrés'}})
    })

    it('should return an object informing correctly about removed element', async () => {
        const response = await request(app)
            .delete('/users/101')
            .set('Authorization', `Bearer ${token}`)

            expect(response.statusCode).toEqual(200)
            expect(response.body).toEqual({ 'success': true })

    })

    it('should return an object informing correctly about created element and body data', async () => {
        const response = await request(app)
            .post('/users/new')
            .send({id: 1, name: 'Andrés'})
            .set('Authorization', `Bearer ${token}`)

            expect(response.statusCode).toEqual(200)
            expect(response.body).toEqual({ 'success': true, user:{id: 1, name: 'Andrés'}})

    })
})


describe('Contacts Endpoints', () => {
    const token = generateToken('test@test.com', 'test1234')
    it('should return all contacts', async () => {
        const response = await request(app)
            .get('/contacts')
            .set('Authorization', `Bearer ${token}`)
        expect(response.statusCode).toEqual(200)
        expect(response.body).toEqual(contacts)
    })

    it('should return status 401 (no token)', async () => {
        const response = await request(app)
            .get('/contacts')
        expect(response.statusCode).toEqual(401)
        expect(response.body).toEqual({ 'error': true, 'message': 'no auth header' })
    })

    it('should return contact 101', async () => {
        const response = await request(app)
            .get('/contacts/101')
            .set('Authorization', `Bearer ${token}`)

        expect(response.statusCode).toEqual(200)
        expect(response.body).toEqual(contacts[100])
    })

    it('should return an object informing correctly about updated element', async () => {
        const response = await request(app)
            .put('/contacts/101')
            .set('Authorization', `Bearer ${token}`)

            expect(response.statusCode).toEqual(200)
            expect(response.body).toEqual({ 'success': true })

    })

    it('should return an object informing correctly about updated element and body data', async () => {
        const response = await request(app)
            .patch('/contacts/101')
            .send({id: 1, name: 'Andrés', comment: 'prueba'})
            .set('Authorization', `Bearer ${token}`)

            expect(response.statusCode).toEqual(200)
            expect(response.body).toEqual({ 'success': true, comment:{id: 1, name: 'Andrés', comment: 'prueba'}})
    })

    it('should return an object informing correctly about removed element', async () => {
        const response = await request(app)
            .delete('/contacts/101')
            .set('Authorization', `Bearer ${token}`)

            expect(response.statusCode).toEqual(200)
            expect(response.body).toEqual({ 'success': true })

    })

    it('should return an object informing correctly about created element and body data', async () => {
        const response = await request(app)
            .post('/contacts/new')
            .send({id: 1, name: 'Andrés', comment: 'prueba'})
            .set('Authorization', `Bearer ${token}`)

            expect(response.statusCode).toEqual(200)
            expect(response.body).toEqual({ 'success': true, comment:{id: 1, name: 'Andrés', comment: 'prueba'}})

    })
})


describe('Bookings Endpoints', () => {
    const token = generateToken('test@test.com', 'test1234')
    it('should return all bookings', async () => {
        const response = await request(app)
            .get('/bookings')
            .set('Authorization', `Bearer ${token}`)
        expect(response.statusCode).toEqual(200)
        expect(response.body).toEqual(bookings)
    })

    it('should return status 401 (no token)', async () => {
        const response = await request(app)
            .get('/bookings')
        expect(response.statusCode).toEqual(401)
        expect(response.body).toEqual({ 'error': true, 'message': 'no auth header' })
    })

    it('should return booking 101', async () => {
        const response = await request(app)
            .get('/bookings/101')
            .set('Authorization', `Bearer ${token}`)

        expect(response.statusCode).toEqual(200)
        expect(response.body).toEqual(bookings[100])
    })

    it('should return an object informing correctly about updated element', async () => {
        const response = await request(app)
            .put('/bookings/101')
            .set('Authorization', `Bearer ${token}`)

            expect(response.statusCode).toEqual(200)
            expect(response.body).toEqual({ 'success': true })

    })

    it('should return an object informing correctly about updated element and body data', async () => {
        const response = await request(app)
            .patch('/bookings/101')
            .send({id: 1, name: 'Andrés', notes: 'prueba'})
            .set('Authorization', `Bearer ${token}`)

            expect(response.statusCode).toEqual(200)
            expect(response.body).toEqual({ 'success': true, booking:{id: 1, name: 'Andrés', notes: 'prueba'}})
    })

    it('should return an object informing correctly about removed element', async () => {
        const response = await request(app)
            .delete('/bookings/101')
            .set('Authorization', `Bearer ${token}`)

            expect(response.statusCode).toEqual(200)
            expect(response.body).toEqual({ 'success': true })

    })

    it('should return an object informing correctly about created element and body data', async () => {
        const response = await request(app)
            .post('/bookings/new')
            .send({id: 1, name: 'Andrés', notes: 'prueba'})
            .set('Authorization', `Bearer ${token}`)

            expect(response.statusCode).toEqual(200)
            expect(response.body).toEqual({ 'success': true, booking:{id: 1, name: 'Andrés', notes: 'prueba'}})

    })
})