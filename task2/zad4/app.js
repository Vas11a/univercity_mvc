const http = require('http');
const routes = require('./routes/index');
const PORT = 3001;


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        routes.handleHome(req, res);
    } else if (req.url === '/student') {
        routes.handleStudent(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`
        <html>
        <head>
          <title>Error</title>
        </head>
        <body>
          <p>EROR 404</p>
        </body>
      </html>
        `);
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});


