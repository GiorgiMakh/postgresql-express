const request = require('supertest');
const app = require('../index.js');
const { pool } = require('../db/db.js');

describe('Testing Route /api/users', () => {
  jest.setTimeout(10000);

  afterAll((done) => {
    app.close(done);
  });

    test('Should add new user', async () => {
      const data = {
        name:'Name',
        lastname:'Lastname'
      }
  
      const response = await request(app)
        .post('/api/users')
        .send(data);
  
      expect(response.statusCode).toBe(200);
    });
    test('Should get all users', async () => {
      const result = await pool.query('SELECT * FROM users');

      const response = await request(app)
      .get('/api/users')

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual(result.rows);
    })
  });