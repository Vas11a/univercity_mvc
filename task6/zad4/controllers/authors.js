const authors = [
    {
        id: 1,
        name: "TestAuth"
    }
];

exports.listAuthors = (req, res) => {
    res.render('authors', { authors });
};
