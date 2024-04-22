const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const errorRoutes = require('./routes/error');
const bookRoutes = require('./routes/book');
const userRoutes = require('./routes/user');

const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'publick')));

app.use('/user', userRoutes);
app.use('/', bookRoutes);

app.use('*', errorRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
