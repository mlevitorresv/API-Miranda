const request = require('supertest');
import app from '../app'
import { generateToken } from '../middleware/auth';
import fs from 'fs'
import { UserInterface } from '../models/user';

const users: UserInterface[] = JSON.parse(fs.readFileSync('./data/users.json', 'utf-8'))

describe('Users Endpoints', () => {
    const token = process.env.USER_ADMIN && process.env.PASSWORD_ADMIN ? generateToken(process.env.USER_ADMIN, process.env.PASSWORD_ADMIN): ''    
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