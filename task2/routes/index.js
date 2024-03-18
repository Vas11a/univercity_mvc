const homeView = require("../views/home");
const studentView = require("../views/student");

const handleHome = (req, res) => {
    const htmlContent = homeView.renderPage();
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlContent);
};

const handleStudent = (req, res) => {
    const htmlContent = studentView.renderPage();
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlContent);
};

module.exports = {
    handleHome,
    handleStudent
};
