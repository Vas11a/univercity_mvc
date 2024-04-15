let books = [
];

exports.listBooks = (req, res) => {
    res.render('books', { books });
};

exports.addBook = (req, res) => {
    const { title, publishingYear, author } = req.body;
    const newBook = {
        id: books.length + 1,
        title: title,
        publishingYear: publishingYear,
        authorId: author
    };
    books.push(newBook);
    res.redirect('/book/list');
};

exports.deleteBook = (req, res) => {
    const id = parseInt(req.params.id);
    books = books.filter(book => book.id !== id);
    res.redirect('/book/list');
};
