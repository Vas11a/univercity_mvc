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
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const formData = querystring.parse(body);
        const htmlContent = studentView.renderPage(formData);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(htmlContent);
        saveToTXT(formData);
    });
};

const saveToTXT = (formData) => {
    const { code } = formData;
    const fileName = `${code}.txt`;
    const filePath = path.join(__dirname, '..', 'data', fileName);
    const fileContent = Object.entries(formData)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n');
    
    fs.writeFile(filePath, fileContent, (err) => {
        if (err) throw err;
        console.log(`${fileName} success`);
    });
};

module.exports = {
    handleHome,
    handleStudent
};
