/**
 * Rotas de Serviços
 * 
 * Define os endpoints HTTP para serviços.
 */

const express = require('express');
const router = express.Router();
const servicosController = require('../controllers/servicos.controller');

// GET /api/servicos - Lista todos os serviços
router.get('/', servicosController.listarServicos);

// GET /api/servicos/categorias - Lista categorias
router.get('/categorias', servicosController.listarCategorias);

// GET /api/servicos/:id - Busca serviço por ID
router.get('/:id', servicosController.buscarServicoPorId);

module.exports = router;
