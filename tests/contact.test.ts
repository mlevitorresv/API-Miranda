const request = require('supertest');
import { app } from '../app'
import { generateToken } from '../services/login';
import fs from 'fs'
import { ContactInterface } from '../models/contact';

const contacts: ContactInterface[] = JSON.parse(fs.readFileSync('./data/comment.json', 'utf-8'))

describe('Contacts Endpoints', () => {
    const token = process.env.USER_ADMIN && process.env.PASSWORD_ADMIN ? generateToken(process.env.USER_ADMIN) : ''
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
            .send({ id: 1, name: 'Andrés', comment: 'prueba' })
            .set('Authorization', `Bearer ${token}`)

        expect(response.statusCode).toEqual(200)
        expect(response.body).toEqual({ 'success': true, comment: { id: 1, name: 'Andrés', comment: 'prueba' } })
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
            .send({ id: 1, name: 'Andrés', comment: 'prueba' })
            .set('Authorization', `Bearer ${token}`)

        expect(response.statusCode).toEqual(200)
        expect(response.body).toEqual({ 'success': true, comment: { id: 1, name: 'Andrés', comment: 'prueba' } })

    })
})
