const express = require('express');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const session = require('express-session');

const mainRouter = require('./routes/main');
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');

const userViews = path.join(__dirname, '/views/users');
const productsViews = path.join(__dirname, '/views/products');

app.use(express.static(path.join(__dirname, './public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(
  session({
    secret: 'Secreto',
    resave: false,
    saveUninitialized: true,
  }),
);

app.set('view engine', 'ejs');
app.set('views', [userViews, productsViews]);

app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);

app.listen(3000, () => {
  console.log('Successfully started');
});
