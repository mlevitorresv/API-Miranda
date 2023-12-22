const request = require('supertest');
import {app} from '../app'
import { generateToken } from '../services/login';
import { BookingInterface } from '../models/booking';
import fs from 'fs'

const bookings: BookingInterface[] = JSON.parse(fs.readFileSync('./data/bookings.json', 'utf-8'))

describe('Bookings Endpoints', () => {

    const token = process.env.USER_ADMIN && process.env.PASSWORD_ADMIN ? generateToken(process.env.USER_ADMIN): ''
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