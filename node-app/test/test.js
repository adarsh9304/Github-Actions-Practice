const request = require('supertest');
const app = require('../index.js');  // Import the Express app

describe('GET /', () => {
  it('should return a welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('This is from Node app');
  });
});
