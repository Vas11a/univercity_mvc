class User {
    constructor(id, login, borrowedBooks = []) {
        this.id = id;
        this.login = login;
        this.borrowedBooks = borrowedBooks;
    }

    static getAll() {
        return [
            new User(1, "user1"),
            new User(2, "user2"),
        ];
    }
}

module.exports = User;
