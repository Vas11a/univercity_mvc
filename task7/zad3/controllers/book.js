const Book = require("../models/Book");
const User = require("../models/User");


const getBooksList = (request, response) => {
    const userId = request.session.userId;
    const books = Book.getAll();
    response.render("books", { title: "Books", userId, books });
};
const getBookDetails = (request, response) => {
    const userId = request.session.userId;
    const bookId = request.params.id;
    const book = Book.getAll().find(book => book.id == bookId);
    const didUserBorrowTheBook = userId && User.getAll().find(user => user.id == userId).findBorrowedBookById(bookId);
    response.render("book-details", { title: "Book Details", book, didUserBorrowTheBook });
};

const postBookBorrow = (request, response) => {
    const userId = request.session.userId;
    const bookId = request.params.id;
    const book = Book.getAll().find(book => book.id == bookId);
    const user = User.getAll().find(user => user.id == userId);
    
    if (book && user) {
        book.borrow();
        user.borrowBook(book);
        response.redirect("/books/borrow/success");
    } else {
    }
};

const getBookBorrowSuccess = (request, response) => {
    response.render("success", { title: "Success", message: "Book borrowed successfully" });
};

const postBookReturn = (request, response) => {
    const userId = request.session.userId;
    const bookId = request.params.id;
    const book = Book.getAll().find(book => book.id == bookId);
    const user = User.getAll().find(user => user.id == userId);

    if (book && user) {
        book.returnBook();
        user.returnBook(bookId);
        response.redirect("/books/return/success");
    } else {
    }
};

const getBookReturnSuccess = (request, response) => {
    response.render("success", { title: "Success", message: "Book returned successfully" });
};

module.exports = {getBooksList, getBookDetails, postBookBorrow, getBookBorrowSuccess, postBookReturn, getBookReturnSuccess };
