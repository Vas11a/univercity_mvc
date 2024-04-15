const books = [
    {
        id: 1,
        title: "Test book",
        publishingYear: 1488,
        authorId: 1
    }
];

exports.listBooks = (req, res) => {
    res.render('books', { books });
};
