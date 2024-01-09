"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactModel = void 0;
const mongoose_1 = require("mongoose");
const contactSchema = new mongoose_1.Schema({
    photo: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    comment: { type: String, required: true },
    date: { type: String, required: true },
    dateTime: { type: String, required: true },
    archived: { type: Boolean, required: true }
});
exports.ContactModel = (0, mongoose_1.model)('Contact', contactSchema);
