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
exports.deleteUser = exports.putUser = exports.postUser = exports.fetchUserById = exports.fetchAllUsers = void 0;
const user_1 = require("../models/user");
const fetchAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield user_1.UserModel.find();
    }
    catch (error) {
        console.error('Error, users were not obtained: ', error);
        throw error;
    }
});
exports.fetchAllUsers = fetchAllUsers;
const fetchUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield user_1.UserModel.findById(id);
    }
    catch (error) {
        console.error('Error, user were not obtained: ', error);
        throw error;
    }
});
exports.fetchUserById = fetchUserById;
const postUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = new user_1.UserModel({
            photo: user.photo,
            name: user.name,
            date: user.date,
            email: user.email,
            phone: user.phone,
            description: user.description,
            status: user.status
        });
        yield data.save();
        return { success: true, user: data };
    }
    catch (error) {
        console.error('Error, user not saved: ', error);
        throw error;
    }
});
exports.postUser = postUser;
const putUser = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield user_1.UserModel.findByIdAndUpdate(id, body);
    }
    catch (error) {
        console.error('Error, user not updated: ', error);
        throw error;
    }
});
exports.putUser = putUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_1.UserModel.findByIdAndDelete(id);
        return { success: true };
    }
    catch (error) {
        console.error('Error, booking not deleted: ', error);
        throw error;
    }
});
exports.deleteUser = deleteUser;
