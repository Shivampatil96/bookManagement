import { NextFunction, Request, Response } from 'express';
import { BookVo } from '../model/BookVo';
import { Book } from '../model/model'
import { json } from 'stream/consumers';

class BookService {

    getBookById = async (req: Request, res: Response) => {
        try {
            const data = await Book.findById(req.params.id);
            res.json(data)
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    getAllBook = async (req: Request, res: Response) => {
        try {
            const data = await Book.find();
            res.json(data)
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    addBook = (req: Request, res: Response) => {
        this.addNewBook(req, res);
    }

    updateBook = (req: Request, res: Response) => {
        this.editBook(req, res)
    }
    deleteBook = async(req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const data = await Book.findByIdAndDelete(id)
            res.send(`Book title ${data.title} has been deleted..`)
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

    private async addNewBook(req: Request, res: Response) {
        const newBook = new Book({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image
        })

        try {
            const dataToSave = await newBook.save();
            res.status(200).json(dataToSave)
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

    private async editBook(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const updatedData = req.body;
            const options = { new: true };

            const result = await Book.findByIdAndUpdate(
                id, updatedData, options
            )

            res.send(result)
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

}

const obj = new BookService()
const getAllBook = obj.getAllBook
const addBook = obj.addBook
const deleteBook = obj.deleteBook
const getBookById = obj.getBookById
const updateBook = obj.updateBook
export { getAllBook, addBook, deleteBook, getBookById, updateBook }
