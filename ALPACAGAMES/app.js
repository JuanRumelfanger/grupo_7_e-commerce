const express = require('express');
const path = require('path');
const app = express();

const methodOverride =  require('method-override');

const mainRouter = require('./routes/main');
const productsRouter = require('./routes/products');
<<<<<<< HEAD
const usersRouter = require('./routes/users');

const cookieParser = require('cookie-parser');
=======
>>>>>>> cf531119eb1837969d26ab4c84a48b9451db4a21

const userViews = path.join(__dirname, '/views/users');
const productsViews = path.join(__dirname, '/views/products');

app.use(express.static(path.join(__dirname, './public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', [userViews, productsViews]);

app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);

app.listen(3000, () => {
  console.log('Successfully started');
});
