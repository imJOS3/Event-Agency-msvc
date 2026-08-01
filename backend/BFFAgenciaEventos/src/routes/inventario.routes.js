const express = require('express');
const router = express.Router();
const inventarioController = require('../controllers/inventario.controller');

router.get('/', inventarioController.getInventario);
router.get('/:id', inventarioController.getProductoById);
router.post('/', inventarioController.createProducto);
router.put('/:id', inventarioController.updateProducto);
router.delete('/:id', inventarioController.deleteProducto);

module.exports = router;
