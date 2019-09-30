const express = require('express')
const salariesController = require('../controllers/departments')
const router = express.Router()



router.get('/', departmentsController.departments)