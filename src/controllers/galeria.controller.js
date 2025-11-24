/**
 * Controller de Galeria
 * 
 * Contém a lógica de negócio para manipulação da galeria de fotos.
 */

const { galeriaMock } = require('../config/database');

/**
 * Lista todas as fotos da galeria
 * @param {Object} req - Request
 * @param {Object} res - Response
 */
const listarFotos = (req, res) => {
    try {
        const fotos = galeriaMock
            .filter(f => f.ativo)
            .sort((a, b) => new Date(b.data) - new Date(a.data));
        
        res.status(200).json({
            status: 'success',
            count: fotos.length,
            data: fotos
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Erro ao listar fotos',
            error: error.message
        });
    }
};

/**
 * Busca uma foto por ID
 * @param {Object} req - Request
 * @param {Object} res - Response
 */
const buscarFotoPorId = (req, res) => {
    try {
        const { id } = req.params;
        const foto = galeriaMock.find(f => f.id === parseInt(id) && f.ativo);
        
        if (!foto) {
            return res.status(404).json({
                status: 'error',
                message: 'Foto não encontrada'
            });
        }
        
        res.status(200).json({
            status: 'success',
            data: foto
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Erro ao buscar foto',
            error: error.message
        });
    }
};

module.exports = {
    listarFotos,
    buscarFotoPorId
};
