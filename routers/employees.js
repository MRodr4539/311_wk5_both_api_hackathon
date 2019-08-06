
const express = require('express')
const employeesController = require('../controllers/employees')
const router = express.Router()

router.get('/', employeesController.getEmployees)

// router.get('/:id', employeeController.getEmployeeById)

// router.get('first_name/:first_name')

module.exports = router