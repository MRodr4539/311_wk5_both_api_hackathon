const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')


const getEmployees = (req, res) => {
    pool.query("SELECT * FROM employees", (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
} 


// const getEmployeesById = (req, res) => {
//     pool.query(`SELECT * FROM employees WHERE ?? = ${req.params.emp_no}`, (err, rows) => {
//         if (err) return handleSQLError(res, err)
//         return res.json(rows);
//     })
// } 

// const getEmployeesByFirstName = () => {
//     pool.query(`SELECT * FROM employees WHERE ?? = ${req.params.first_name}`, (err, rows) => {
//         if (err) return handleSQLError(res, err)
//         return res.json(rows);
//     })
// }





module.exports = getEmployees;
    // getEmployeesById, 
    // getEmployeesByFirstName 
