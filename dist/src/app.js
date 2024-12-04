"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const room_1 = require("./controllers/room");
const user_1 = require("./controllers/user");
const contact_1 = require("./controllers/contact");
const booking_1 = require("./controllers/booking");
const auth_1 = require("./middleware/auth");
const public_1 = require("./public/public");
const login_1 = require("./controllers/login");
const mongo_1 = require("./config/mongo");
exports.app = (0, express_1.default)();
const corsOptions = {
    "origin": "https://miranda-hotel-dashboard.vercel.app",
    "credentials": true,
    "methods": "GET,PUT,PATCH,POST,DELETE",
    "allowedHeaders": "Content-Type,Authorization",
};
(0, mongo_1.mongoConnect)();
exports.app.use((0, cors_1.default)(corsOptions));
exports.app.use(express_1.default.json());
exports.app.use('/login', login_1.loginRouter);
exports.app.use('/public', public_1.publicRouter);
exports.app.use(auth_1.authMiddleware);
exports.app.use('/rooms', room_1.roomRouter);
exports.app.use('/users', user_1.userRouter);
exports.app.use('/contacts', contact_1.contactRouter);
exports.app.use('/bookings', booking_1.bookingRouter);
