"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const express_1 = __importDefault(require("express"));
const login_1 = require("../services/login");
exports.loginRouter = express_1.default.Router();
exports.loginRouter.post('/', (req, res) => {
    const { email, password } = req.body;
    if (email === process.env.USER_ADMIN && password === process.env.PASSWORD_ADMIN) {
        const userToken = (0, login_1.generateToken)(email);
        if (userToken) {
            return res.json({ token: userToken });
        }
        return res.status(500).json({ error: "Token was not generated internal error" });
    }
    return res.status(401).json({ error: "Unauthorized: Invalid credentials" });
});
