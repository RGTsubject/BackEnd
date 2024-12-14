import express from 'express';
import multer from 'multer';
import {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} from '../controllers/bookController.js';
import { getPaginationBooks } from '../controllers/pagingController.js';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'assets/img');
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});

const router = express.Router();
const upload = multer({ storage });

// 모든 책 조회
router.get('/books', getAllBooks);

// 특정 책 조회
router.get('/books/:id', getBookById);

// 책 생성 (이미지 업로드를 위한 multer 미들웨어 사용)
router.post('/books', upload.single('img'), createBook); // img 필드에서 파일 받기

// 책 수정
router.put('/books/:id', updateBook);

// 책 삭제
router.delete('/books/:id', deleteBook);

export default router;
