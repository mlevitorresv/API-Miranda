"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const secretKey = process.env.SECRET_KEY;
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader)
        return res.status(401).json({ error: true, message: 'no auth header' });
    const token = authHeader.split('Bearer ')[1];
    if (!token)
        return res.status(401).json({ error: 'Unauthorized: Missing Token' });
    if (!secretKey)
        return res.status(500).json({ error: 'internal server error' });
    try {
        const data = jsonwebtoken_1.default.verify(token, secretKey);
        req.user = data;
        next();
    }
    catch (e) {
        return res.status(403).json({ error: 'Invalid token' });
    }
};
exports.authMiddleware = authMiddleware;
