const querystring = require('querystring');
const fs = require('fs');
const path = require('path');
const homeView = require("../views/home");
const studentView = require("../views/student");

const handleHome = (req, res) => {
    const htmlContent = homeView.renderPage();
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlContent);
};

const handleStudent = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const htmlContent = studentView.renderPage();
    res.end(htmlContent);
};


module.exports = {
    handleHome,
    handleStudent
};
