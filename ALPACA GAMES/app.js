const express = require('express');
const path = require('path');

const PORT = 3002;

const app = express();

app.use(express.static('public'));

app.get(['/', '/home'], (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
