const express = require('express');
const path = require('path');
const mainRouter = require('./routes/main');
const productsRouter = require('./routes/products');
const app = express();

app.use(express.static(path.join(__dirname, './public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use('/', mainRouter);
app.use('/products', productsRouter);

app.listen(3000, () => {
  console.log('Successfully started');
});
