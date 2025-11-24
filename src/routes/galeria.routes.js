/**
 * Rotas de Galeria
 * 
 * Define os endpoints HTTP para a galeria de fotos.
 */

const express = require('express');
const router = express.Router();
const galeriaController = require('../controllers/galeria.controller');

// GET /api/galeria - Lista todas as fotos
router.get('/', galeriaController.listarFotos);

// GET /api/galeria/:id - Busca foto por ID
router.get('/:id', galeriaController.buscarFotoPorId);

module.exports = router;
