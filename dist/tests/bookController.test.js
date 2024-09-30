var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const request = require('supertest');
const app = require('../App');
const bookService = require('../services/bookService');
// import { Book } from '../model/model';
// import { BookVo } from '../model/BookVo';
jest.mock('../services/bookService');
describe('Book Controller', () => {
    it('should return list of books', () => __awaiter(this, void 0, void 0, function* () {
        const mockBooks = { title: 'test', author: 'test author', genre: 'test genre', img: 'test img' };
        // (bookService.getAllBook as jest.Mock).mockResolvedValue(mockBooks);
        const response = yield request(app).post('/api/addBook').send(mockBooks);
        expect(response.statusCode).toBe(200);
        // expect(response.body).toEqual(mockBooks);
        // expect(true).toEqual(true);
    }));
    // describe('POST /api/addBook', () => {
    //     it('should create a new user', async () => {
    //       const newUser = { title: 'test', author: 'test author', genre: 'test genre', img: 'test img' };
    //       (bookService.addBook as jest.Mock).mockResolvedValue(newUser);
    //       const response = await request(app)
    //         .post('/users')
    //         .send(newUser);
    //       expect(response.status).toBe(201);
    //       expect(response.body).toEqual(newUser);
    //     });
    //   });
});
//# sourceMappingURL=bookController.test.js.map