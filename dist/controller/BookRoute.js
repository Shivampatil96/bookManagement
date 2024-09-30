"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRoute = void 0;
const express_1 = __importDefault(require("express"));
const bookService_1 = require("../services/bookService");
// import { authenticateToken, getToken } from '../service/AuthenticationService'
class BookRoute {
    constructor() {
        this.bookRoute = express_1.default.Router();
        this.mountRoutes();
    }
    mountRoutes() {
        this.bookRoute.get('/getBooks', (req, res) => {
            (0, bookService_1.getAllBook)(req, res);
        });
    }
}
const bookRoute = new BookRoute().bookRoute;
exports.bookRoute = bookRoute;
//# sourceMappingURL=BookRoute.js.map