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
exports.deleteRoom = exports.putRoom = exports.postRoom = exports.fetchRoomById = exports.fetchAllRooms = void 0;
const room_1 = require("../models/room");
const fetchAllRooms = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield room_1.RoomModel.find();
    }
    catch (error) {
        console.error('Error, rooms were not obtained: ', error);
        throw error;
    }
});
exports.fetchAllRooms = fetchAllRooms;
const fetchRoomById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield room_1.RoomModel.findOne({ id: id });
    }
    catch (error) {
        console.error('Error, room were not obtained: ', error);
        throw error;
    }
});
exports.fetchRoomById = fetchRoomById;
const postRoom = (room) => {
    try {
        const data = new room_1.RoomModel({
            photo: room.photo,
            id: room.id,
            type: room.type,
            bed: room.bed,
            amenities: room.amenities,
            description: room.description,
            rate: room.rate,
            price: room.price,
            discount: room.discount,
            available: room.available
        });
        data.save();
        return { success: true, room: data };
    }
    catch (error) {
        console.error('Error, room not saved: ', error);
        throw error;
    }
};
exports.postRoom = postRoom;
const putRoom = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield room_1.RoomModel.findOneAndUpdate({ id: body.id }, body);
    }
    catch (error) {
        console.error('Error, room not updated: ', error);
        throw error;
    }
});
exports.putRoom = putRoom;
const deleteRoom = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield room_1.RoomModel.findOneAndDelete({ id: id });
        return { success: true };
    }
    catch (error) {
        console.error('Error, room not deleted: ', error);
        throw error;
    }
});
exports.deleteRoom = deleteRoom;
