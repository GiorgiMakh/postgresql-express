const request = require('supertest');
const app = require('../index.js');

describe('/api/users', () => {
    test('Should add new user', async () => {
      const data = {
        name:'Giorgi',
        lastname:'Jest'
      }
  
      const response = await request(app)
        .post('/api/users')
        .send(data);
  
      expect(response.statusCode).toBe(200);
    });
    test('Should get all users', async () => {

      const response = await request(app)
      .get('/api/users')

      expect(response.statusCode).toBe(200);
      console.log(response.body)
    })
  });