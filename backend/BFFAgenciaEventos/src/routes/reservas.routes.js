const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reserva.controller');

router.get('/', reservaController.getReservas);
router.get('/:id', reservaController.getReservaById);
router.post('/', reservaController.createReserva);
router.put('/:id', reservaController.updateReserva);
router.delete('/:id', reservaController.deleteReserva);

module.exports = router;
