import express from 'express'
import * as mongoose from 'mongoose'
import { bookController } from './controller/BookController'

class App {

    // ******************* Static Members ************************
    public express
  
    // ******************* constructor Initilization ***************
    constructor() {
      this.express = express()
      this.mountRoutes()
      this.connectToDB()
    }
    private mountRoutes(): void {
      // this.express.use(cors)
      // this.express.use(bodyParser.urlencoded({ extended: true }))
      // this.express.use(bodyParser.json());
  
      this.express.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");
        res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH,OPTIONS,DELETE");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
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

const url = `mongodb+srv://shivampatil95:Cognizant%402024@bookmanagement.e57dn.mongodb.net/?retryWrites=true&w=majority&appName=BookManagement`
// const dbUrl = `mongodb+srv://${userName}:${password}@bookmanagement.e57dn.mongodb.net/`;
mongoose.connect( url)
.then(()=>console.log('DB Connected successfully'))
.catch((error) => console.error('connection error ', error))

this.express.use(express.json());
this.express.use('/api',bookController)
// return this.express.router
    }
}

export default new App().express
// const app = new App().express;
// module.exports = app