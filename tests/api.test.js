const request = require('supertest');
const app = require('../app');
const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '../data/sleepData.json');

// Helper function to reset data file
const resetDataFile = () => {
  fs.writeFileSync(dataFilePath, '[]');
};

describe('Sleep Tracker API', () => {
  beforeEach(() => {
    resetDataFile();
  });

  afterAll((done) => {
    // Perform any global cleanup if necessary
    done();
  });

  test('POST /sleep should create a new sleep record', async () => {
    const newRecord = {
      userId: 'user1',
      hours: 8,
      timestamp: '2024-05-18T07:00:00Z'
    };

    const response = await request(app)
      .post('/sleep')
      .send(newRecord);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.userId).toBe(newRecord.userId);
    expect(response.body.hours).toBe(newRecord.hours);
    expect(response.body.timestamp).toBe(newRecord.timestamp);
  });

  test('GET /sleep/:userId should retrieve sleep records for the user', async () => {
    const sleepData = [
      { id: '1', userId: 'user1', hours: 8, timestamp: '2024-05-18T07:00:00Z' },
      { id: '2', userId: 'user1', hours: 6, timestamp: '2024-05-17T07:00:00Z' }
    ];
    fs.writeFileSync(dataFilePath, JSON.stringify(sleepData));

    const response = await request(app).get('/sleep/user1');

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);
    expect(response.body[0].id).toBe('2');
    expect(response.body[1].id).toBe('1');
  });

  test('DELETE /sleep/:recordId should delete the specified record', async () => {
    const sleepData = [
      { id: '1', userId: 'user1', hours: 8, timestamp: '2024-05-18T07:00:00Z' }
    ];
    fs.writeFileSync(dataFilePath, JSON.stringify(sleepData));

    const response = await request(app).delete('/sleep/1');

    expect(response.status).toBe(204);

    const remainingData = JSON.parse(fs.readFileSync(dataFilePath));
    expect(remainingData.length).toBe(0);
  });
});
