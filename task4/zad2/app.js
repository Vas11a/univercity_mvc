const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;


app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

let students = [];

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>HOME</title>
      </head>
      <body>
        <p>HOME</p>
      </body>
    </html>
  `);
});

app.get('/student', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>STUDENT</title>
      </head>
      <body>
        <p>STUDENT</p>
      </body>
    </html>
  `);
});

app.get('/add-student', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>ADD-STUDENT</title>
      </head>
      <body>
        <form action="/student" method="POST">
          <h1>Form</h1>
          <input placeholder="name" type="text" id="firstName" name="firstName"><br>
          <input placeholder="lastname" type="text" id="lastName" name="lastName"><br>
          <input placeholder="major" type="text" id="major" name="major"><br>
          <button type="submit">Add student</button>
        </form>
      </body>
    </html>
  `);
});

app.post('/student', (req, res) => {
  const { firstName, lastName, major } = req.body;
  const student = { firstName, lastName, major };
  students.push(student);
  res.send(`Hello, ${firstName} ${lastName} on ${major} studies!`);
});


app.get('/users', (req, res) => {
  const userList = students.map(student => `<p>${student.firstName} ${student.lastName} - ${student.major}</p>`).join('');
  res.send(`<html><body><ul>${userList}</ul></body></html>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
