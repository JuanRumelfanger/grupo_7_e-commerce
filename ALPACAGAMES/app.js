const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.resolve(__dirname, './public')));

app.listen(3000, () => {
  console.log('Successfully started');
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/users/index.html'));
});

app.get('/productDetail', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/products/productDetail.html'));
});

app.get('/productCart', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/products/shop.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/users/register.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/users/login.html'));
});
