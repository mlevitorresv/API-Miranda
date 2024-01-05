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
Object.defineProperty(exports, "__esModule", { value: true });
const request = require('supertest');
const app_1 = require("../app");
describe('login tests', () => {
    it('should return a json with credentials error', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(app_1.app)
            .post('/login')
            .send({ "email": "email", "password": "password" });
        expect(response.statusCode).toEqual(401);
        expect(response.body).toEqual({ "error": "Unauthorized: Invalid credentials" });
    }));
    it('should return a token', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(app_1.app)
            .post('/login')
            .send({ "email": process.env.USER_ADMIN, "password": process.env.PASSWORD_ADMIN });
        expect(response.statusCode).toEqual(200);
        expect(response.body).toHaveProperty('token');
    }));
});
