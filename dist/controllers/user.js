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
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../services/user");
exports.userRouter = express_1.default.Router();
exports.userRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield (0, user_1.fetchAllUsers)();
        res.json({ users: allUsers });
    }
    catch (error) {
        console.error('Error getting the bookings: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.userRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const user = yield (0, user_1.fetchUserById)(parseInt(id));
        res.json({ user: user });
    }
    catch (error) {
        console.error('Error getting the booking: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.userRouter.post('/', (req, res) => {
    try {
        res.json((0, user_1.postUser)(req.body));
    }
    catch (error) {
        console.error('Error saving the booking: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.userRouter.put('/:id', (req, res) => {
    try {
        res.json((0, user_1.putUser)(req.body));
    }
    catch (error) {
        console.error('Error updating the booking: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.userRouter.delete('/:id', (req, res) => {
    try {
        const id = req.params.id;
        res.json((0, user_1.deleteUser)(id));
    }
    catch (error) {
        console.error('Error deleting the booking: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
