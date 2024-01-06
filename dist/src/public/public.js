"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicRouter = void 0;
const express_1 = __importDefault(require("express"));
const express_list_endpoints_1 = __importDefault(require("express-list-endpoints"));
const app_1 = require("../app");
exports.publicRouter = express_1.default.Router();
exports.publicRouter.get('/', (req, res) => {
    const endpoints = (0, express_list_endpoints_1.default)(app_1.app);
    res.json({ name: 'Hotel Miranda', endpoints: endpoints });
});
