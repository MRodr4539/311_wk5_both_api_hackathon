const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')


const getSalaries = (req, res) => {
    pool.query("SELECT * FROM salaries LIMIT 10", (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
} 




const getSalariesById = (req, res) => {
    pool.query(`SELECT * FROM salaries WHERE emp_no = ${req.params.id} LIMIT 10`, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
} 

const getSalariesBySal = (req, res) => {
    pool.query(`SELECT * FROM salaries WHERE salary = ${req.params.salary}`, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
}





module.exports = { 
    getSalaries,
    getSalariesBySal,
    getSalariesById,
}