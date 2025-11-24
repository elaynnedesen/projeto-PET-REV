/**
 * Rotas de Produtos
 * 
 * Define os endpoints HTTP para produtos.
 */

const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtos.controller');

// GET /api/produtos - Lista todos os produtos
router.get('/', produtosController.listarProdutos);

// GET /api/produtos/categorias - Lista categorias
router.get('/categorias', produtosController.listarCategorias);

// GET /api/produtos/:id - Busca produto por ID
router.get('/:id', produtosController.buscarProdutoPorId);

module.exports = router;
