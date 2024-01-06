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
exports.deleteContact = exports.putContact = exports.postContact = exports.fetchContactById = exports.fetchAllContacts = void 0;
const contact_1 = require("../models/contact");
const fetchAllContacts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield contact_1.ContactModel.find();
    }
    catch (error) {
        console.error('Error, contacts were not obtained: ', error);
        throw error;
    }
});
exports.fetchAllContacts = fetchAllContacts;
const fetchContactById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield contact_1.ContactModel.findOne({ id: id });
    }
    catch (error) {
        console.error('Error, contact were not obtained: ', error);
        throw error;
    }
});
exports.fetchContactById = fetchContactById;
const postContact = (contact) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = new contact_1.ContactModel({
            photo: contact.photo,
            id: contact.id,
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
            comment: contact.comment,
            date: contact.date,
            dateTime: contact.dateTime,
            archived: contact.archived
        });
        yield data.save();
        return { success: true, contact: data };
    }
    catch (error) {
        console.error('Error, contact not saved: ', error);
        throw error;
    }
});
exports.postContact = postContact;
const putContact = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield contact_1.ContactModel.findOneAndUpdate({ id: body.id }, body);
    }
    catch (error) {
        console.error('Error, contact not updated: ', error);
        throw error;
    }
});
exports.putContact = putContact;
const deleteContact = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield contact_1.ContactModel.findOneAndDelete({ id: id });
        return { success: true };
    }
    catch (error) {
        console.error('Error, booking not deleted: ', error);
        throw error;
    }
});
exports.deleteContact = deleteContact;
