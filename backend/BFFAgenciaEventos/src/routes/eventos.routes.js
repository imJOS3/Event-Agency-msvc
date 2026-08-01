const express = require('express');
const router = express.Router();
const eventoController = require('../controllers/evento.controller');

router.get('/', eventoController.getEventos);
router.get('/:id', eventoController.getEventoById);
router.post('/', eventoController.createEvento);
router.put('/:id', eventoController.updateEvento);
router.delete('/:id', eventoController.deleteEvento);

module.exports = router;
