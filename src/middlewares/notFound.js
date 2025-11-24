/**
 * Middleware de Rota Não Encontrada (404)
 * 
 * Captura requisições para rotas inexistentes.
 */

const notFound = (req, res, _next) => {
    res.status(404).json({
        status: 'error',
        statusCode: 404,
        message: `Rota não encontrada: ${req.method} ${req.originalUrl}`,
        suggestion: 'Verifique a URL e o método HTTP utilizados'
    });
};

module.exports = notFound;
