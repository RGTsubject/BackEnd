import Book from '../models/bookModel.js';
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const getAllBooks = (req, res) => {
  Book.getAllBooks((error, results) => {
    if (error) return res.status(500).send(error);
    return res.json(results);
  });
};

const getBookById = (req, res) => {
  const id = req.params.id;
  Book.getBookById(id, (error, result) => {
    if (error) return res.status(500).send(error);
    if (result.length === 0)
      return res.status(404).send({ message: 'Book not found' });
    return res.json(result[0]);
  });
};

const createBook = (req, res) => {
  const newBook = req.body;
  const { bookTitle, author, salesQuantity, price, detail } = req.body;

  const data = {
    bookTitle,
    author,
    salesQuantity,
    price,
    detail,
  };

  Book.createBook(data, (error, result) => {
    if (error) {
      console.error('Error creating book:', error);
      return res.status(500).send(error);
    }
    return res.status(201).json({ id: result.insertId, ...newBook });
  });
};

const updateBook = (req, res) => {
  const id = req.params.id;
  const updatedBook = req.body;

  if (!id || !updatedBook) {
    return res
      .status(400)
      .json({ error: 'ID and updated book data are required.' });
  }

  Book.updateBook(id, updatedBook, (error, result) => {
    if (error) {
      console.error('Error updating book:', error); // 에러 로그
      return res.status(500).json({ error: 'Database update failed.' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Book not found.' });
    }

    return res.status(200).json({ message: 'Book updated successfully', id });
  });
};

const deleteBook = (req, res) => {
  const id = req.params.id;
  Book.deleteBook(id, (error) => {
    if (error) return res.status(500).send(error);
    return res.status(200).send({ message: 'Book deleted successfully' });
  });
};

export { getAllBooks, getBookById, createBook, updateBook, deleteBook };
