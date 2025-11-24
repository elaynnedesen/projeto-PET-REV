/**
 * Servidor Principal do Backend
 * 
 * Este arquivo inicializa o servidor Express e configura todos os middlewares,
 * rotas e tratamento de erros da aplicação.
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// Importar rotas
const produtosRoutes = require('./src/routes/produtos.routes');
const servicosRoutes = require('./src/routes/servicos.routes');
const galeriaRoutes = require('./src/routes/galeria.routes');
const contatoRoutes = require('./src/routes/contato.routes');

// Importar middlewares personalizados
const errorHandler = require('./src/middlewares/errorHandler');
const notFound = require('./src/middlewares/notFound');

// Inicializar aplicação Express
const app = express();
const PORT = process.env.PORT || 3000;

// ============================================
// MIDDLEWARES GLOBAIS
// ============================================

// Segurança com Helmet
app.use(helmet());

// CORS - Permitir requisições do frontend
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5500',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Parser de JSON e URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger de requisições (apenas em desenvolvimento)
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Servir arquivos estáticos
app.use('/uploads', express.static('uploads'));
app.use('/images', express.static('../frontend/assets/images'));

// ============================================
// ROTAS
// ============================================

// Rota de health check
app.get('/api/health', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'API do Petshop Melhor Amigo está funcionando!',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development'
    });
});

// Rotas da API
app.use('/api/produtos', produtosRoutes);
app.use('/api/servicos', servicosRoutes);
app.use('/api/galeria', galeriaRoutes);
app.use('/api/contato', contatoRoutes);

// ============================================
// TRATAMENTO DE ERROS
// ============================================

// Rota não encontrada (404)
app.use(notFound);

// Tratamento global de erros
app.use(errorHandler);

// ============================================
// INICIAR SERVIDOR
// ============================================

// Inicia o servidor apenas se não estiver em modo de teste
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log('='.repeat(50));
        console.log('🐾 Petshop Melhor Amigo - Backend API');
        console.log('='.repeat(50));
        console.log(`✅ Servidor rodando em: http://localhost:${PORT}`);
        console.log(`📊 Ambiente: ${process.env.NODE_ENV || 'development'}`);
        console.log(`🌐 Frontend permitido: ${process.env.FRONTEND_URL || 'http://localhost:5500'}`);
        console.log('='.repeat(50));
        console.log('\n📋 Rotas disponíveis:');
        console.log(`   GET  http://localhost:${PORT}/api/health`);
        console.log(`   GET  http://localhost:${PORT}/api/produtos`);
        console.log(`   GET  http://localhost:${PORT}/api/servicos`);
        console.log(`   GET  http://localhost:${PORT}/api/galeria`);
        console.log(`   POST http://localhost:${PORT}/api/contato`);
        console.log('\n🚀 Pronto para receber requisições!\n');
    });
}

module.exports = app;

