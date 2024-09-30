"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const mongoose = __importStar(require("mongoose"));
const BookRoute_1 = require("./route/BookRoute");
class App {
    // ******************* constructor Initilization ***************
    constructor() {
        this.express = express();
        this.connectToDB();
    }
    connectToDB() {
        // const userName = process.env.MONGODB_USER_NAME
        // const password = process.env.MONGODB_PASSWORD
        const url = `mongodb+srv://shivampatil95:Cognizant%402024@bookmanagement.e57dn.mongodb.net/?retryWrites=true&w=majority&appName=BookManagement`;
        // const dbUrl = `mongodb+srv://${userName}:${password}@bookmanagement.e57dn.mongodb.net/`;
        mongoose.connect(url)
            .then(() => console.log('DB Connected successfully'))
            .catch((error) => console.error('connection error ', error));
        this.express.use(express.json());
        this.express.use('/api', BookRoute_1.bookRoute);
    }
}
exports.default = new App().express;
