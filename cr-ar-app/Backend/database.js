var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    database: 'ar_app',
    user: 'root',
    password: 'root',
    port: '3310'
})

module.exports = connection;
