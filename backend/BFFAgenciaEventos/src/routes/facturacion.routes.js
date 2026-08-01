const express = require('express');
const router = express.Router();
const facturacionController = require('../controllers/facturacion.controller');

router.get('/', facturacionController.getFacturas);
router.get('/:id', facturacionController.getFacturaById);
router.post('/', facturacionController.createFactura);
router.put('/:id', facturacionController.updateFactura);
router.delete('/:id', facturacionController.deleteFactura);

module.exports = router;
