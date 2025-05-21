const express = require('express')
const router = express.Router()
const categoriaController = require('../controllers/categoriaController')

router.get('/', categoriaController.listCategoria)

router.post('/', categoriaController.createCategoria)

router.put('/:id', categoriaController.editCategoria)

router.delete('/:id', categoriaController.deleteCategoria)

router.get('/:id',categoriaController.getCategoriaById)

module.exports = router;