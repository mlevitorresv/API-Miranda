"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomModel = void 0;
const mongoose_1 = require("mongoose");
const roomSchema = new mongoose_1.Schema({
    photo: { type: String, required: true },
    id: { type: Number, required: true },
    type: { type: String, required: true },
    bed: { type: String, required: true },
    amenities: { type: String, required: true },
    description: { type: String, required: true },
    rate: { type: Number, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    available: { type: Boolean, required: true }
});
exports.RoomModel = (0, mongoose_1.model)('Room', roomSchema);
