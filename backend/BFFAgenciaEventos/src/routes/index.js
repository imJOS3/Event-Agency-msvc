const express = require('express');
const router = express.Router();


router.use('/clientes', require('./clientes.routes'));
router.use('/eventos', require('./eventos.routes'));
router.use('/reservas', require('./reservas.routes'));
router.use('/proveedores', require('./proveedores.routes'));
router.use('/pagos', require('./pagos.routes'));
router.use('/inventario', require('./inventario.routes'));
router.use('/facturacion', require('./facturacion.routes'));
router.use('/auth', require('./auth.routes'));
router.use('/users', require('./users.routes'));

module.exports = router;
