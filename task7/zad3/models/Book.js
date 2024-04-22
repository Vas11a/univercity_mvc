class Book {
    constructor(id, title, author, year, available = true) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.available = available;
    }

    static getAll() {
        return [
            new Book(1, "Star wars", "Lukas", 1977),
            new Book(2, "GGVP", "IAM", 2005),
            new Book(3, "Test", "Test autor", 12312),
        ];
    }

    borrow() {
        this.available = false;
    }

    returnBook() {
        this.available = true;
    }
}

module.exports = Book;
