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
exports.bookingRouter = void 0;
const express_1 = __importDefault(require("express"));
const booking_1 = require("../services/booking");
exports.bookingRouter = express_1.default.Router();
exports.bookingRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allBookings = yield (0, booking_1.fetchAllBookings)();
        res.json({ bookings: allBookings });
    }
    catch (error) {
        console.error('Error getting the bookings: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.bookingRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const booking = yield (0, booking_1.fetchBookingById)(parseInt(id));
        res.json({ booking: booking });
    }
    catch (error) {
        console.error('Error getting the booking: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.bookingRouter.post('/', (req, res) => {
    try {
        res.json((0, booking_1.postBooking)(req.body));
    }
    catch (error) {
        console.error('Error saving the booking: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.bookingRouter.put('/:id', (req, res) => {
    try {
        res.json((0, booking_1.putBooking)(req.body));
    }
    catch (error) {
        console.error('Error updating the booking: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.bookingRouter.delete('/:id', (req, res) => {
    try {
        const id = req.params.id;
        res.json((0, booking_1.deleteBooking)(id));
    }
    catch (error) {
        console.error('Error deleting the booking: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
