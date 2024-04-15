const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');


router.get('/list', booksController.listBooks);

router.get('/add', (req, res) => {
    res.render('add-book');
});


router.post('/add', booksController.addBook);

router.delete('/delete/:id', booksController.deleteBook);

module.exports = router;
