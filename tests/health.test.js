/**
 * Testes de Health Check
 */

const request = require('supertest');
const app = require('../server');

describe('Health Check Endpoint', () => {
    
    it('GET /api/health deve retornar status 200', async () => {
        const response = await request(app)
            .get('/api/health')
            .expect(200);
        
        expect(response.body.status).toBe('success');
    });
    
    it('GET /api/health deve retornar estrutura correta', async () => {
        const response = await request(app)
            .get('/api/health')
            .expect(200);
        
        expect(response.body).toHaveProperty('status');
        expect(response.body).toHaveProperty('message');
        expect(response.body).toHaveProperty('timestamp');
        expect(response.body).toHaveProperty('environment');
    });
});
