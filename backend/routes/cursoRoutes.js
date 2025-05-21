const express = require('express')
const router = express.Router()
const cursoController = require('../controllers/cursoController')

router.get('/',cursoController.listCurso)

router.post('/', cursoController.createCurso)

router.put('/:id',cursoController.editCurso)

router.delete('/:id', cursoController.deleteCurso)

module.exports = router;