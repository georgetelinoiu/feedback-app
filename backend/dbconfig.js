import mysql from 'mysql2';

const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: "Divizibilitate",
  database: 'feedback',
  connectionLimit: 20
});

export default

    pool.getConnection()
        .then(conn => {
            console.log("Connected to the database!");
            conn.release();
        })
        .catch(err => {
            console.log(err);
        })