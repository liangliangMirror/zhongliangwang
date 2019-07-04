const mysql = require('mysql');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'h51902',
    multipleStatements: true
})

function query(sql) {
    return new Promise((resolove, reject) => {
        pool.query(sql, (error, rows) => {
            if (error) return reject(error);
            resolove(rows);
        })
    })
}

module.exports = query;