const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const errorRoutes = require('./routes/error');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'publick')));

app.set('view engine', 'ejs');


app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('*', errorRoutes);

app.use(bodyParser.urlencoded({ extended: true }));


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
