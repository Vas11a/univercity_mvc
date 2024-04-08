import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('Home');
});

app.get('/success', (req, res) => {
    res.render('Success');
});

app.get('/students-list', (req, res) => {
    res.render('List');
});


app.post('/add-student', (req, res) => {
    res.render('AddStudent');
});


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
