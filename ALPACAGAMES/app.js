const express = require('express');
const path = require('path');
const mainRouter = require('./routes/main.js')
const app = express();

app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.use('/', mainRouter);

app.listen(3000, () => {
  console.log('Successfully started');
});
