const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3001;

app.use((req, res, next) => {
  const date = new Date().toISOString();
  console.log(`Request ${req.method} on path ${req.url} ${date}`);
  next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const viewsPath = path.join(__dirname, 'views');
let students = [];

app.get('/', (req, res) => {
  res.sendFile(path.join(viewsPath, 'home.html'));
});

app.get('/add-student', (req, res) => {
  res.sendFile(path.join(viewsPath, 'add-student.html'));
});

app.post('/student', (req, res) => {
  const { firstName, lastName, major } = req.body;
  const student = { firstName, lastName, major };
  students.push(student);
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>User List</title>
      <link rel="stylesheet" href="/css/main.css">
    </head>
    <body>
      <h1>Hello, ${firstName} ${lastName} on ${major} studies!</h1>
      <div class="nav">
      <a href="/">Home</a>
        <a href="/add-student">Add student</a>
        <a href="/users">Users</a>
      </div>
    </body>
    </html>
  `);
});


app.get('/users', (req, res) => {
  const userListHTML = students.map(student => `<p>${student.firstName} ${student.lastName} - ${student.major}</p>`).join('');
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>User List</title>
      <link rel="stylesheet" href="/css/main.css">
    </head>
    <body>
      <h1>User List</h1>
      <div>${userListHTML}</div>
      <div class="nav">
        <a href="/">Home</a>
        <a href="/add-student">Add student</a>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
