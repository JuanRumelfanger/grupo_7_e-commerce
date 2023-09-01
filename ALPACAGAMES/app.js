const express = require('express');
const path = require('path');
const app = express();
const mainRouter = require('./routes/main');
const productsRouter = require('./routes/products');
const userViews = path.join(__dirname, '/views/users');
const productsViews = path.join(__dirname, '/views/products');

app.use(express.static(path.join(__dirname, './public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', [userViews, productsViews]);

app.use('/', mainRouter);
app.use('/products', productsRouter);

app.listen(3000, () => {
  console.log('Successfully started');
});
