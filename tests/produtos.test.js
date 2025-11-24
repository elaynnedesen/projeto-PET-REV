/**
 * Testes de Produtos
 */

const request = require('supertest');
const app = require('../server');

describe('Endpoints de Produtos', () => {
    
    describe('GET /api/produtos', () => {
        it('deve listar todos os produtos', async () => {
            const response = await request(app)
                .get('/api/produtos')
                .expect(200);
            
            expect(response.body.status).toBe('success');
            expect(response.body).toHaveProperty('count');
            expect(response.body).toHaveProperty('data');
            expect(Array.isArray(response.body.data)).toBe(true);
        });
        
        it('deve filtrar produtos por categoria', async () => {
            const response = await request(app)
                .get('/api/produtos?categoria=racoes')
                .expect(200);
            
            expect(response.body.status).toBe('success');
            response.body.data.forEach(produto => {
                expect(produto.categoria).toBe('racoes');
            });
        });
    });
    
    describe('GET /api/produtos/:id', () => {
        it('deve buscar produto por ID', async () => {
            const response = await request(app)
                .get('/api/produtos/1')
                .expect(200);
            
            expect(response.body.status).toBe('success');
            expect(response.body.data).toHaveProperty('id', 1);
        });
        
        it('deve retornar 404 para produto inexistente', async () => {
            const response = await request(app)
                .get('/api/produtos/999')
                .expect(404);
            
            expect(response.body.status).toBe('error');
        });
    });
    
    describe('GET /api/produtos/categorias', () => {
        it('deve listar categorias de produtos', async () => {
            const response = await request(app)
                .get('/api/produtos/categorias')
                .expect(200);
            
            expect(response.body.status).toBe('success');
            expect(Array.isArray(response.body.data)).toBe(true);
        });
    });
});
