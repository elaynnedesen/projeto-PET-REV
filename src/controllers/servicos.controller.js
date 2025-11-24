/**
 * Controller de Serviços
 * 
 * Contém a lógica de negócio para manipulação de serviços.
 */

const { servicosMock } = require('../config/database');

/**
 * Lista todos os serviços
 * @param {Object} req - Request
 * @param {Object} res - Response
 */
const listarServicos = (req, res) => {
    try {
        const { categoria } = req.query;
        
        let servicos = servicosMock.filter(s => s.ativo);
        
        if (categoria) {
            servicos = servicos.filter(s => s.categoria === categoria);
        }
        
        res.status(200).json({
            status: 'success',
            count: servicos.length,
            data: servicos
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Erro ao listar serviços',
            error: error.message
        });
    }
};

/**
 * Busca um serviço por ID
 * @param {Object} req - Request
 * @param {Object} res - Response
 */
const buscarServicoPorId = (req, res) => {
    try {
        const { id } = req.params;
        const servico = servicosMock.find(s => s.id === parseInt(id) && s.ativo);
        
        if (!servico) {
            return res.status(404).json({
                status: 'error',
                message: 'Serviço não encontrado'
            });
        }
        
        res.status(200).json({
            status: 'success',
            data: servico
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Erro ao buscar serviço',
            error: error.message
        });
    }
};

/**
 * Lista categorias de serviços
 * @param {Object} req - Request
 * @param {Object} res - Response
 */
const listarCategorias = (req, res) => {
    try {
        const categorias = [...new Set(servicosMock.map(s => s.categoria))];
        
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
    listarServicos,
    buscarServicoPorId,
    listarCategorias
};
