import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import path from 'path';
import * as studentsController from './controllers/students.js';
import * as errorController from './controllers/error.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 3000;

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

app.get('/', studentsController.getAddNewStudentPage);
app.post('/add-student', studentsController.addNewStudent);
app.get('/students-list', studentsController.getStudentsListPage);
app.get('/success', studentsController.getAddingNewStudentSuccessPage);

app.use('*', errorController.getNotFoundPage);


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
