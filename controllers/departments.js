const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')



const getSalaries = (req, res) => {
    pool.query("SELECT * FROM departments LIMIT 10", (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
} 






