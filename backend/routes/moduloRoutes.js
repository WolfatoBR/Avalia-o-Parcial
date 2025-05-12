const express = require('express')
const router = express.Router()
const moduloController = require('../controllers/moduloController')

router.get('/', moduloController.listModulo)

router.post('/', moduloController.createModulo)

router.put('/:id',moduloController.editModulo)

router.delete('/:id', moduloController.deleteModulo)

router.get('/:id', moduloController.getModuloById)

module.exports = router;