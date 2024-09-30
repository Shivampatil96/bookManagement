import mongoose, { Model, model } from "mongoose";
import { BookVo } from "./BookVo";

const bookSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    author: {
        required: true,
        type: String
    },
    genre: {
        required: true,
        type: String
    },
    img: {
        type: String
    }
})

// module.exports = mongoose.model('Data', dataSchema)
const Book = model('Book', bookSchema);
export { Book }