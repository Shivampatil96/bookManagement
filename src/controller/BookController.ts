import express, { Router } from 'express';
import { getAllBook, addBook, deleteBook, getBookById, updateBook } from '../services/bookService';
import { NextFunction, Request, Response } from 'express';
import { BookVo } from '../model/BookVo';
import { Book } from '../model/model'


// import { authenticateToken, getToken } from '../service/AuthenticationService'

class BookController {
    public bookRoute: Router

    constructor() {
        this.bookRoute = express.Router()
        this.mountRoutes()
    }

    private mountRoutes(): void {

        this.bookRoute.get('/getAllBooks', (req: Request, res: Response) => {
            getAllBook(req, res);
        })

        this.bookRoute.post('/addBook', (req: Request, res: Response) => {
            addBook(req, res);
        })

        this.bookRoute.delete('/deleteBook/:id', (req: Request, res: Response) => {
            deleteBook(req, res);
        })

        this.bookRoute.patch('/updateBook/:id', (req: Request, res: Response) => {
            updateBook(req,res);
        })
        this.bookRoute.get('/getBook/:id', (req: Request, res: Response) => {
            getBookById(req, res);
        })
    }

}

const bookController = new BookController().bookRoute
export { bookController }
// module.exports = bookController

