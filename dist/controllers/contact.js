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
exports.contactRouter = void 0;
const express_1 = __importDefault(require("express"));
const contact_1 = require("../services/contact");
exports.contactRouter = express_1.default.Router();
exports.contactRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allContacts = yield (0, contact_1.fetchAllContacts)();
        res.json({ contacts: allContacts });
    }
    catch (error) {
        console.error('Error getting the contacts: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.contactRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const contact = yield (0, contact_1.fetchContactById)(parseInt(id));
        res.json({ contact: contact });
    }
    catch (error) {
        console.error('Error getting the contact: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.contactRouter.post('/', (req, res) => {
    try {
        res.json((0, contact_1.postContact)(req.body));
    }
    catch (error) {
        console.error('Error saving the contact: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.contactRouter.put('/:id', (req, res) => {
    try {
        res.json((0, contact_1.putContact)(req.body));
    }
    catch (error) {
        console.error('Error updating the contact: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.contactRouter.delete('/:id', (req, res) => {
    try {
        const id = req.params.id;
        res.json((0, contact_1.deleteContact)(id));
    }
    catch (error) {
        console.error('Error deleting the contact: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
