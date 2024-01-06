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
exports.roomRouter = void 0;
const express_1 = __importDefault(require("express"));
const room_1 = require("../services/room");
exports.roomRouter = express_1.default.Router();
exports.roomRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allRooms = yield (0, room_1.fetchAllRooms)();
        res.json({ rooms: allRooms });
    }
    catch (error) {
        console.error('Error getting the rooms: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.roomRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const room = yield (0, room_1.fetchRoomById)(parseInt(id));
        res.json({ room: room });
    }
    catch (error) {
        console.error('Error getting the rooom: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.roomRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, room_1.postRoom)(req.body);
        res.json(result);
    }
    catch (error) {
        console.error('Error saving the room: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.roomRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, room_1.putRoom)(req.body);
        res.json(result);
    }
    catch (error) {
        console.error('Error updating the room: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.roomRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield (0, room_1.deleteRoom)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error deleting the room: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
