const express = require('express')
const router = express.Router()
const moduleController = require('../controllers/moduloController')

router.get('/', moduleController.listModulo)

router.post('/', moduleController.createModulo)

router.put('/:id',moduleController.editModulo)

router.delete('/:id', moduleController.deleteModulo)

module.exports = router;