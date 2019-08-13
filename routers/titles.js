const express = require('express')
const titlesController = require('../controllers/Titles')
const router = express.Router()


router.get('/', titlesController.getTitles)

router.get('/:id', titlesController.getTitlesById)


router.get('/titles/:title', titlesController.getTitlesByT)


module.exports = router

