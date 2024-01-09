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
exports.deleteBooking = exports.putBooking = exports.postBooking = exports.fetchBookingById = exports.fetchAllBookings = void 0;
const booking_1 = require("../models/booking");
const fetchAllBookings = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield booking_1.BookingModel.find();
    }
    catch (error) {
        console.error('Error, bookings were not obtained: ', error);
        throw error;
    }
});
exports.fetchAllBookings = fetchAllBookings;
const fetchBookingById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield booking_1.BookingModel.findById(id);
    }
    catch (error) {
        console.error('Error, booking were not obtained: ', error);
        throw error;
    }
});
exports.fetchBookingById = fetchBookingById;
const postBooking = (booking) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = new booking_1.BookingModel({
            photo: booking.photo,
            name: booking.name,
            orderDate: booking.orderDate,
            orderTime: booking.orderTime,
            checkInDate: booking.checkInDate,
            checkInTime: booking.checkInTime,
            checkOut: booking.checkOut,
            checkOutTime: booking.checkOutTime,
            notes: booking.notes,
            room: booking.room,
            status: booking.status
        });
        yield data.save();
        return { success: true, booking: data };
    }
    catch (error) {
        console.error('Error, booking not saved: ', error);
        throw error;
    }
});
exports.postBooking = postBooking;
const putBooking = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield booking_1.BookingModel.findByIdAndUpdate(id, body);
    }
    catch (error) {
        console.error('Error, booking not updated: ', error);
        throw error;
    }
});
exports.putBooking = putBooking;
const deleteBooking = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield booking_1.BookingModel.findByIdAndDelete(id);
        return { success: true };
    }
    catch (error) {
        console.error('Error, booking not deleted: ', error);
        throw error;
    }
});
exports.deleteBooking = deleteBooking;
