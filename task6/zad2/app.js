const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const homeRoute = require('./routes/home');
const booksRoute = require('./routes/books');
const authorsRoute = require('./routes/authors');


app.use('/', homeRoute);
app.use('/book', booksRoute);
app.use('/author', authorsRoute);



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
