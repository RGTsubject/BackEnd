import paging from '../models/pagingModel.js';

const getPaginationBooks = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  console.log(`Request for page: ${offset}, limit: ${limit}`);

  paging.getPaginationBooks(limit, offset, (error, results) => {
    if (error) {
      console.error('Error fetching paginated books:', error);
      return res.status(500).send(error);
    }

    // 결과가 없는 경우에 대한 처리
    if (results.length === 0) {
      return res.status(404).json({
        message: 'No books found on this page.', // 클라이언트에 확실한 메시지 전달
      });
    }

    return res.json({
      page,
      limit,
      books: results, // 페이지당 책들을 반환
    });
  });
};

export { getPaginationBooks };
