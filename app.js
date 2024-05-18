// app.js
const express = require('express');
const bodyParser = require('body-parser');
const sleepRoutes = require('./routes/sleep');

const app = express();

app.use(bodyParser.json());
app.use('/sleep', sleepRoutes);

module.exports = app;
