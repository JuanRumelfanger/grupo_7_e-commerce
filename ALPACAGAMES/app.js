const express = require('express');
const path = require('path');
const mainRouter = require('./routes/main');
const app = express();
//config
app.use(express.static(path.resolve(__dirname, './public')));

//config ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'./views'))

//routes
app.use('/', mainRouter);

app.listen(3000, () => {
  console.log('Successfully started');
});