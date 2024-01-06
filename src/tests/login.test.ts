const request = require('supertest');
import { app } from '../app'

describe('login tests', () => {
    it('should return a json with credentials error', async () => {
        const response = await request(app)
            .post('/login')
            .send({ "email": "email", "password": "password" })

        expect(response.statusCode).toEqual(401)
        expect(response.body).toEqual({ "error": "Unauthorized: Invalid credentials" })
    })

    it('should return a token', async () => {
        const response = await request(app)
            .post('/login')
            .send({ "email": process.env.USER_ADMIN, "password": process.env.PASSWORD_ADMIN })

        expect(response.statusCode).toEqual(200)
        expect(response.body).toHaveProperty('token')
    })
})