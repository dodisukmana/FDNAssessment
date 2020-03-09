const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

//Database
const db = require('./config/database');
db.authenticate()
    .then(() => console.log('database connected...'))
    .catch(err => console.log('error: ' +err))

//View Engine
app.engine('handlebars', exphbs());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

//Routes
app.use('/', require('./routes/index'));
app.use('/pivot', require('./routes/index'));
app.use('/facebook', require('./routes/index'));

//Server PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server listening at port ${PORT}`));