"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.saveBook = exports.getAllBook = void 0;
class BookService {
    constructor() {
        this.getAllBook = (req, res) => {
            res.send("get book details");
        };
        this.saveBook = (req, res) => {
            res.send('Post API');
        };
        this.deleteBook = (req, res) => {
        };
    }
}
const obj = new BookService();
const getAllBook = obj.getAllBook;
exports.getAllBook = getAllBook;
const saveBook = obj.saveBook;
exports.saveBook = saveBook;
const deleteBook = obj.deleteBook;
exports.deleteBook = deleteBook;
//# sourceMappingURL=bookService.js.map