## 프로젝트 실행 방법

```
  git clone https://github.com/RGTsubject/BackEnd.git // clone
  npm i // 패키지 설치
  npm start // 프로젝트 시작
```

## 서버 프레임워크
Express.js: Node.js 환경에서 서버를 구축하기 위해 Express.js를 사용하고 있다. 
Express는 경량화된 웹 서버 프레임워크로, 라우팅 및 미들웨어 처리가 용이하다.

## 데이터베이스 설정
MySQL과의 연결을 위해 'mysql2' 패키지를 사용하고 있고 SQL 쿼리를 통해 데이터베이스 작업을 수행함

## 라우팅 설정
- GET /books: 모든 책 조회.
- GET /books/:id: 특정 ID의 책 조회.
- POST /books: 새 책 생성.
- PUT /books/:id: 기존 책 정보 수정.
- DELETE /books/:id: 특정 ID의 책 삭제.
- GET /books/limit: 페이지네이션을 위한 책 정보 조회.
