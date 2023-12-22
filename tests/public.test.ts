const request = require('supertest');
import {app} from '../app'


describe('public tests', () => {
    it('should return html code with all routes and his methods', async() => {
        const response = await request(app)
            .get('/public')

        expect(response.text).toContain('MIRANDA HOTEL');
    })
})