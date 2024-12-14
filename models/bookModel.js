import mysql from 'mysql2';
import dbconfig from '../config/db.js';

const connection = mysql.createConnection(dbconfig);

const Book = {
  getAllBooks: (callback) => {
    connection.query('SELECT * FROM book', callback);
  },
  getBookById: (id, callback) => {
    connection.query('SELECT * FROM book WHERE id = ?', [id], callback);
  },
  createBook: (newBook, callback) => {
    connection.query(
      'INSERT INTO book (bookTitle, author, salesQuantity, price, detail) VALUES (?, ?, ?, ?, ?)',
      [
        newBook.bookTitle,
        newBook.author,
        newBook.salesQuantity,
        newBook.price,
        newBook.detail,
      ],
      callback
    );
  },
  updateBook: (id, updatedBook, callback) => {
    const { bookTitle, author, salesQuantity, price, detail } = updatedBook;

    connection.query(
      'UPDATE book SET bookTitle = ?, author = ?, salesQuantity = ?, price = ?, detail = ? WHERE id = ?',
      [bookTitle, author, salesQuantity, price, detail, id],
      callback
    );
  },
  deleteBook: (id, callback) => {
    connection.query('DELETE FROM book WHERE id = ?', [id], callback);
  },
};

export default Book;
