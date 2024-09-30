"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dataSchema = new mongoose_1.default.Schema({
    title: {
        required: true,
        type: String
    },
    author: {
        required: true,
        type: Number
    },
    genre: {
        required: true,
        type: Number
    },
    image: {
        url: {
            type: String,
            id: String
        }
    }
});
module.exports = mongoose_1.default.model('Data', dataSchema);
//# sourceMappingURL=model.js.map