/**
 * Controller de Produtos
 * 
 * Contém a lógica de negócio para manipulação de produtos.
 */

const { produtosMock } = require('../config/database');

/**
 * Lista todos os produtos
 * @param {Object} req - Request
 * @param {Object} res - Response
 */
const listarProdutos = (req, res) => {
    try {
        const { categoria } = req.query;
        
        let produtos = produtosMock.filter(p => p.ativo);
        
        if (categoria) {
            produtos = produtos.filter(p => p.categoria === categoria);
        }
        
        res.status(200).json({
            status: 'success',
            count: produtos.length,
            data: produtos
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Erro ao listar produtos',
            error: error.message
        });
    }
};

/**
 * Busca um produto por ID
 * @param {Object} req - Request
 * @param {Object} res - Response
 */
const buscarProdutoPorId = (req, res) => {
    try {
        const { id } = req.params;
        const produto = produtosMock.find(p => p.id === parseInt(id) && p.ativo);
        
        if (!produto) {
            return res.status(404).json({
                status: 'error',
                message: 'Produto não encontrado'
            });
        }
        
        res.status(200).json({
            status: 'success',
            data: produto
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Erro ao buscar produto',
            error: error.message
        });
    }
};

/**
 * Lista categorias de produtos
 * @param {Object} req - Request
 * @param {Object} res - Response
 */
const listarCategorias = (req, res) => {
    try {
        const categorias = [...new Set(produtosMock.map(p => p.categoria))];
        
        res.status(200).json({
            status: 'success',
            data: categorias
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Erro ao listar categorias',
            error: error.message
        });
    }
};

module.exports = {
    listarProdutos,
    buscarProdutoPorId,
    listarCategorias
};
