const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'Node-First-App',
    password: '72156zl!q'
})

module.exports = pool.promise()