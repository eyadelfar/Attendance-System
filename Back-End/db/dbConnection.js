const mysql = require('mysql');
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "attendance",
    port: "3306",
});
//hhhh

module.exports = pool;