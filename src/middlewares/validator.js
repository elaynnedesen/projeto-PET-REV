/**
 * Middleware de Validação
 * 
 * Valida dados de entrada usando express-validator.
 */

const { body, validationResult } = require('express-validator');

/**
 * Regras de validação para o formulário de contato
 */
const validarContato = [
    body('nome')
        .trim()
        .notEmpty().withMessage('Nome é obrigatório')
        .isLength({ min: 3, max: 100 }).withMessage('Nome deve ter entre 3 e 100 caracteres'),
    
    body('email')
        .trim()
        .notEmpty().withMessage('Email é obrigatório')
        .isEmail().withMessage('Digite um email válido'),
    
    body('telefone')
        .trim()
        .notEmpty().withMessage('Telefone é obrigatório')
        .isLength({ min: 10 }).withMessage('Telefone deve ter no mínimo 10 dígitos'),
    
    body('mensagem')
        .trim()
        .notEmpty().withMessage('Mensagem é obrigatória')
        .isLength({ min: 10, max: 1000 }).withMessage('Mensagem deve ter entre 10 e 1000 caracteres'),
    
    // Middleware para processar erros de validação
    (req, res, next) => {
        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            return res.status(400).json({
                status: 'error',
                statusCode: 400,
                message: 'Erro de validação',
                errors: errors.array().map(err => ({
                    field: err.path,
                    message: err.msg,
                    value: err.value
                }))
            });
        }
        
        next();
    }
];

module.exports = {
    validarContato
};
