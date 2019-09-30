const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')


const getEmployees = (req, res) => {
    pool.query("SELECT * FROM employees", (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
} 




const getEmployeesById = (req, res) => {
    pool.query(`SELECT * FROM employees WHERE emp_no = ${req.params.id}`, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
} 

const getEmployeesByFirstName = (req, res) => {
    pool.query(`SELECT * FROM employees WHERE first_name = ${req.params.first_name}`, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
}





module.exports = { 
    getEmployeesByFirstName,
    getEmployees,
    getEmployeesById,
   
}
