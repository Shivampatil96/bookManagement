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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose = __importStar(require("mongoose"));
const BookController_1 = require("./controller/BookController");
class App {
    // ******************* constructor Initilization ***************
    constructor() {
        this.express = (0, express_1.default)();
        this.mountRoutes();
        this.connectToDB();
    }
    mountRoutes() {
        // this.express.use(cors)
        // this.express.use(bodyParser.urlencoded({ extended: true }))
        // this.express.use(bodyParser.json());
        this.express.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "*");
            res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH,OPTIONS,DELETE");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            if (req.method == 'OPTIONS') {
                // req.header('Access-Control-Allow-Methods', 'GET', 'POST', 'OPTIONS', 'DELETE');
                // return res.status(200).json({});
            }
            next();
        });
    }
    connectToDB() {
        // const userName = process.env.MONGODB_USER_NAME
        // const password = process.env.MONGODB_PASSWORD
        const url = `mongodb+srv://shivampatil95:Cognizant%402024@bookmanagement.e57dn.mongodb.net/?retryWrites=true&w=majority&appName=BookManagement`;
        // const dbUrl = `mongodb+srv://${userName}:${password}@bookmanagement.e57dn.mongodb.net/`;
        mongoose.connect(url)
            .then(() => console.log('DB Connected successfully'))
            .catch((error) => console.error('connection error ', error));
        this.express.use(express_1.default.json());
        this.express.use('/api', BookController_1.bookController);
        // return this.express.router
    }
}
exports.default = new App().express;
// const app = new App().express;
// module.exports = app
//# sourceMappingURL=App.js.map