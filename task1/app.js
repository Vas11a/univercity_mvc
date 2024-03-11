const http = require('http');
const student = require("./student");

const PORT = 3000;

const name = student.getStudentFullName(0);
const id = student.getStudentId(0);

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const htmlContent = `
    <html>
      <head>
        <title>About student</title>
      </head>
      <body>
        <p>My name is ${name}. My student ID is ${id}</p>
      </body>
    </html>
  `;

    res.end(htmlContent);
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    console.log(`My name is ${name}. My student ID is ${id}`);
});


