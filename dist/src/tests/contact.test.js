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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request = require('supertest');
const app_1 = require("../app");
const login_1 = require("../services/login");
const fs_1 = __importDefault(require("fs"));
const contacts = JSON.parse(fs_1.default.readFileSync('./data/comment.json', 'utf-8'));
describe('Contacts Endpoints', () => {
    const token = process.env.USER_ADMIN && process.env.PASSWORD_ADMIN ? (0, login_1.generateToken)(process.env.USER_ADMIN) : '';
    it('should return all contacts', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(app_1.app)
            .get('/contacts')
            .set('Authorization', `Bearer ${token}`);
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual({ contacts: contacts });
    }));
    it('should return status 401 (no token)', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(app_1.app)
            .get('/contacts');
        expect(response.statusCode).toEqual(401);
        expect(response.body).toEqual({ 'error': true, 'message': 'no auth header' });
    }));
    it('should return contact 101', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(app_1.app)
            .get('/contacts/101')
            .set('Authorization', `Bearer ${token}`);
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual({ contact: contacts[100] });
    }));
    it('should return an object informing correctly about updated element', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(app_1.app)
            .put('/contacts/101')
            .set('Authorization', `Bearer ${token}`);
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual({ 'success': true });
    }));
    it('should return an object informing correctly about updated element and body data', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(app_1.app)
            .patch('/contacts/101')
            .send({ id: 1, name: 'Andrés', comment: 'prueba' })
            .set('Authorization', `Bearer ${token}`);
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual({ 'success': true, contact: { id: 1, name: 'Andrés', comment: 'prueba' } });
    }));
    it('should return an object informing correctly about removed element', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(app_1.app)
            .delete('/contacts/101')
            .set('Authorization', `Bearer ${token}`);
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual({ 'success': true });
    }));
    it('should return an object informing correctly about created element and body data', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(app_1.app)
            .post('/contacts')
            .send({ id: 1, name: 'Andrés', comment: 'prueba' })
            .set('Authorization', `Bearer ${token}`);
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual({ 'success': true, contact: { id: 1, name: 'Andrés', comment: 'prueba' } });
    }));
});
