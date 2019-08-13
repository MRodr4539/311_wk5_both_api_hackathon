const express = require('express')
const salariesController = require('../controllers/salaries')
const router = express.Router()


router.get('/', salariesController.getSalaries)

router.get('/:id', salariesController.getSalariesById)


router.get('/salary/:salary', salariesController.getSalariesBySal)


module.exports = router

