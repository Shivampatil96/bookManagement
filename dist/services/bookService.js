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
exports.updateBook = exports.getBookById = exports.deleteBook = exports.addBook = exports.getAllBook = void 0;
const model_1 = require("../model/model");
class BookService {
    constructor() {
        this.getBookById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield model_1.Book.findById(req.params.id);
                res.json(data);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
        this.getAllBook = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield model_1.Book.find();
                res.json(data);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
        this.addBook = (req, res) => {
            this.addNewBook(req, res);
        };
        this.updateBook = (req, res) => {
            this.editBook(req, res);
        };
        this.deleteBook = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const data = yield model_1.Book.findByIdAndDelete(id);
                res.send(`Book title ${data.title} has been deleted..`);
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
    }
    addNewBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newBook = new model_1.Book({
                title: req.body.title,
                author: req.body.author,
                genre: req.body.genre,
                img: req.body.img
            });
            try {
                const dataToSave = yield newBook.save();
                res.status(200).json(dataToSave);
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
    }
    editBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const updatedData = req.body;
                const options = { new: true };
                const result = yield model_1.Book.findByIdAndUpdate(id, updatedData, options);
                res.send(result);
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
    }
}
const obj = new BookService();
const getAllBook = obj.getAllBook;
exports.getAllBook = getAllBook;
const addBook = obj.addBook;
exports.addBook = addBook;
const deleteBook = obj.deleteBook;
exports.deleteBook = deleteBook;
const getBookById = obj.getBookById;
exports.getBookById = getBookById;
const updateBook = obj.updateBook;
exports.updateBook = updateBook;
//# sourceMappingURL=bookService.js.map