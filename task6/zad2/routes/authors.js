const express = require('express');
const router = express.Router();
const authorsController = require('../controllers/authors');


router.get('/list', authorsController.listAuthors);

module.exports = router;
