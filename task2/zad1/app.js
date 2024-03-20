const http = require('http');
const home = require('./views/home');
const student = require('./views/student');
const PORT = 3001;


const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(home.renderPage());
  } else if (req.url === '/student') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(student.renderPage())
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('Error 404');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});


