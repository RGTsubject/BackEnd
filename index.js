import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql2';
import dbconfig from './config/db.js';
import bookRoutes from './routes/bookRoutes.js';
import paingRoutes from './routes/paingRoutes.js';
import cors from 'cors';

dotenv.config();

const connection = mysql.createConnection(dbconfig);

const app = express();
const PORT = process.env.PORT || 4000;

// 데이터베이스 연결 확인
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err.stack);
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId);
});

// 미들웨어 설정
app.use(bodyParser.json());
app.use('/assets', express.static('assets')); // 정적 파일 서빙

// CORS 설정
app.use(
  cors({
    origin: [process.env.FRONT_ADDRESS, process.env.FRONT_ADDRESS_DEPLOY],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

// 라우터 설정
app.use('/api', bookRoutes, paingRoutes); // '/api' 경로에 책 라우터 추가

// 기본 경로 확인
app.get('/', (req, res) => {
  res.send('Welcome to the Book API');
});

// 서버 리스닝
app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
