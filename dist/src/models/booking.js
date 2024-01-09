"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingModel = void 0;
const mongoose_1 = require("mongoose");
const bookingSchema = new mongoose_1.Schema({
    photo: { type: String, required: true },
    name: { type: String, required: true },
    orderDate: { type: String, required: true },
    orderTime: { type: String, required: true },
    checkInDate: { type: String, required: true },
    checkInTime: { type: String, required: true },
    checkOut: { type: String, required: true },
    checkOutTime: { type: String, required: true },
    notes: { type: String, required: true },
    room: { type: String, required: true },
    status: { type: String, required: true }
});
exports.BookingModel = (0, mongoose_1.model)('Booking', bookingSchema);
