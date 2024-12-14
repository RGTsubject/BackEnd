import mysql from 'mysql2';
import dbconfig from '../config/db.js';

const connection = mysql.createConnection(dbconfig);

const paging = {
  getPaginationBooks: (limit, offset, callback) => {
    console.log('Pagination', limit, offset);
    connection.query(
      'SELECT * FROM book LIMIT ? OFFSET ?',
      [limit, offset],
      callback
    );
  },
};

export default paging;
