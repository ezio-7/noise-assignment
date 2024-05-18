const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '../data/sleepData.json');

// Helper function to read data from file
const readData = () => {
  const data = fs.readFileSync(dataFilePath);
  return JSON.parse(data);
};

// Helper function to write data to file
const writeData = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

// POST /sleep
router.post('/', (req, res) => {
  const { userId, hours, timestamp } = req.body;
  if (!userId || !hours || !timestamp) {
    return res.status(400).json({ error: 'userId, hours, and timestamp are required' });
  }

  const sleepData = readData();
  const newRecord = { id: Date.now().toString(), userId, hours, timestamp };
  sleepData.push(newRecord);
  writeData(sleepData);

  res.status(201).json(newRecord);
});

// GET /sleep/:userId
router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  const sleepData = readData();
  const userSleepData = sleepData.filter(record => record.userId === userId);

  userSleepData.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

  res.json(userSleepData);
});

// DELETE /sleep/:recordId
router.delete('/:recordId', (req, res) => {
  const { recordId } = req.params;
  const sleepData = readData();
  const recordIndex = sleepData.findIndex(record => record.id === recordId);

  if (recordIndex === -1) {
    return res.status(404).json({ error: 'Record not found' });
  }

  sleepData.splice(recordIndex, 1);
  writeData(sleepData);

  res.status(204).end();
});

module.exports = router;
