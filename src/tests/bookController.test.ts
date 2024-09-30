const request = require('supertest');
const app = require('../App');
const bookService = require('../services/bookService');
// import { Book } from '../model/model';
// import { BookVo } from '../model/BookVo';

jest.mock('../services/bookService');

describe('Book Controller', () => {
    it('should return list of books', async () => {
        const mockBooks = { title: 'test', author: 'test author', genre: 'test genre', img: 'test img' };
        // (bookService.getAllBook as jest.Mock).mockResolvedValue(mockBooks);
        const response =  await request(app).post('/api/addBook').send(mockBooks)
        expect(response.statusCode).toBe(200);
        // expect(response.body).toEqual(mockBooks);
        // expect(true).toEqual(true);
    })

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
})

