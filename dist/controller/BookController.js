"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookController = void 0;
const express_1 = __importDefault(require("express"));
const bookService_1 = require("../services/bookService");
const uuid_1 = require("uuid");
const multer_1 = __importDefault(require("multer"));
class BookController {
    constructor() {
        this.bookRoute = express_1.default.Router();
        this.mountRoutes();
    }
    mountRoutes() {
        const uniqueId = (0, uuid_1.v4)();
        const storage = multer_1.default.diskStorage({
            destination: function (req, file, cb) {
                cb(null, "./uploads");
            },
            filename: function (req, file, cb) {
                cb(null, uniqueId + file.originalname);
            },
        });
        const upload = (0, multer_1.default)({
            storage: storage
        });
        this.bookRoute.get('/getAllBooks', (req, res) => {
            (0, bookService_1.getAllBook)(req, res);
        });
        this.bookRoute.post('/addBook', upload.single('files'), (req, res) => {
            (0, bookService_1.addBook)(req, res);
        });
        this.bookRoute.delete('/deleteBook/:id', (req, res) => {
            (0, bookService_1.deleteBook)(req, res);
        });
        this.bookRoute.patch('/updateBook/:id', (req, res) => {
            (0, bookService_1.updateBook)(req, res);
        });
        this.bookRoute.get('/getBook/:id', (req, res) => {
            (0, bookService_1.getBookById)(req, res);
        });
    }
}
const bookController = new BookController().bookRoute;
exports.bookController = bookController;
// module.exports = bookController
//# sourceMappingURL=BookController.js.map