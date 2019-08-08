const express = require('express')
const employeesController = require('../controllers/employees')
const router = express.Router()

console.log(employeesController)
router.get('/', employeesController.getEmployees)

router.get('/:id', employeesController.getEmployeesById)


router.get('/firstName/:first_name', employeesController.getEmployeesByFirstName)

module.exports = router

