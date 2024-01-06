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
exports.mongoConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const db_collection = process.env.DB_COLLECTION;
const db_cluster = process.env.DB_CLUSTER;
const db_name = process.env.DB_NAME;
const mongoConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(`mongodb+srv://${db_user}:${db_password}@${db_collection}.${db_cluster}.mongodb.net/${db_name}`);
        console.log('Success connection...');
    }
    catch (e) {
        console.error('DB error: ', e);
    }
});
exports.mongoConnect = mongoConnect;
