
import { Document } from "mongoose"

export interface BookVo extends Document {
    title: String,
    author: String,
    genre: String,
    img:String | null,
}