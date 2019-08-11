const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')


const getTitles = (req, res) => {
    pool.query("SELECT * FROM titles LIMIT 10", (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
} 


const getTitlesById = (req, res) => {
    pool.query(`SELECT * FROM titles WHERE emp_no = ${req.params.id} LIMIT 10`, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
} 

const getTitlesByT = (req, res) => {
    pool.query(`SELECT * FROM titles WHERE title = ${req.params.title} LIMIT 10`, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
}





module.exports = { 
    getTitles,
    getTitlesByT,
    getTitlesById,
}