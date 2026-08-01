const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/cliente.controller');
const sessionAuth = require('../middlewares/sessionAuth');

router.use(sessionAuth); // Protege todas

router.get('/', clienteController.getClientes);
router.get('/:id', clienteController.getClienteById);
router.post('/', clienteController.createCliente);
router.put('/:id', clienteController.updateCliente);
router.delete('/:id', clienteController.deleteCliente);

module.exports = router;
