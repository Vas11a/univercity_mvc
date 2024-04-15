const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const PORT = 3000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    if (req.body && req.body._method) {
        req.method = req.body._method;
        delete req.body._method;
    }
    next();
});

const homeRoute = require('./routes/home');
const booksRoute = require('./routes/books');
const authorsRoute = require('./routes/authors');


app.use('/', homeRoute);
app.use('/book', booksRoute);
app.use('/author', authorsRoute);



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
