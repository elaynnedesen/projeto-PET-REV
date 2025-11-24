/**
 * Rotas de Contato
 * 
 * Define os endpoints HTTP para o formulário de contato.
 */

const express = require('express');
const router = express.Router();
const contatoController = require('../controllers/contato.controller');
const { validarContato } = require('../middlewares/validator');

// POST /api/contato - Envia mensagem de contato
router.post('/', validarContato, contatoController.enviarContato);

// GET /api/contato/info - Obtém informações de contato
router.get('/info', contatoController.obterInfoContato);

module.exports = router;
