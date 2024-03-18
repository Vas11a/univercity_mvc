const http = require('http');
const student = require("./views/student");
const home = require("./views/home");
const PORT = 3001;


const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (req.url === '/') {
        const htmlContent = home.renderPage()
        res.end(htmlContent);
    } else if (req.url === '/student') {
        const htmlContent = student.renderPage()
        res.end(htmlContent);
    } else {
        res.end('Not Found\n');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});


