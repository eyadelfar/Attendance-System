const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "e@123321xzX",
    database: "attendance",
    port: "3306",
});

connection.connect((error) => {
    if (error)
        return console.error(error.message);
    else
        return console.log('Connected to the MySQL server.');
});

module.exports = connection;