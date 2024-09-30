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
        this.mountRoutes();
    }
    mountRoutes() {
        this.bookRoute = express_1.default.Router();
        this.bookRoute.get('/getBooks', (req, res) => {
            (0, bookService_1.getAllBook)(req, res);
        });
    }
}
const bookRoute = new BookRoute().bookRoute;
exports.bookRoute = bookRoute;
//  class Router {
// //Post Method
// router.post('/post', (req, res) => {
//     res.send('Post API')
// })
// //Get all Method
// router.get('/getAll', (req, res) => {
//     bookService.getBook(req,res);
//     // res.send('Get All API')
// })
// //Get by ID Method
// router.get('/getOne/:id', (req, res) => {
//     res.send('Get by ID API')
// })
// //Update by ID Method
// router.patch('/update/:id', (req, res) => {
//     res.send('Update by ID API')
// })
// //Delete by ID Method
// router.delete('/delete/:id', (req, res) => {
//     res.send('Delete by ID API')
// })
// }
