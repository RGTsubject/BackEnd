import express from 'express';
import { getPaginationBooks } from '../controllers/pagingController.js';

const router = express.Router();
// 데이터 페이징을 위한 경로 설정
router.get('/paging', getPaginationBooks);

export default router;
