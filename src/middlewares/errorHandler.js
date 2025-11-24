/**
 * Middleware de Tratamento de Erros
 * 
 * Captura e formata erros da aplicação.
 */

const errorHandler = (err, req, res, _next) => {
    console.error('❌ Erro:', err.message);
    console.error(err.stack);
    
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Erro interno do servidor';
    
    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
};

module.exports = errorHandler;
