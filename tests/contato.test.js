/**
 * Testes de Contato
 */

const request = require('supertest');
const app = require('../server');

describe('Endpoints de Contato', () => {
    
    describe('POST /api/contato', () => {
        it('deve aceitar dados válidos', async () => {
            const dados = {
                nome: 'João Silva',
                email: 'joao@example.com',
                telefone: '11999999999',
                mensagem: 'Gostaria de agendar um serviço para meu pet.'
            };
            
            const response = await request(app)
                .post('/api/contato')
                .send(dados)
                .expect(200);
            
            expect(response.body.status).toBe('success');
            expect(response.body.data.enviado).toBe(true);
        });
        
        it('deve rejeitar quando nome não é fornecido', async () => {
            const dados = {
                email: 'joao@example.com',
                telefone: '11999999999',
                mensagem: 'Gostaria de agendar um serviço.'
            };
            
            const response = await request(app)
                .post('/api/contato')
                .send(dados)
                .expect(400);
            
            expect(response.body.status).toBe('error');
        });
        
        it('deve rejeitar email inválido', async () => {
            const dados = {
                nome: 'João Silva',
                email: 'email-invalido',
                telefone: '11999999999',
                mensagem: 'Gostaria de agendar um serviço.'
            };
            
            const response = await request(app)
                .post('/api/contato')
                .send(dados)
                .expect(400);
            
            expect(response.body.status).toBe('error');
            expect(response.body.errors.some(e => e.field === 'email')).toBe(true);
        });
        
        it('deve rejeitar mensagem muito curta', async () => {
            const dados = {
                nome: 'João Silva',
                email: 'joao@example.com',
                telefone: '11999999999',
                mensagem: 'Curta'
            };
            
            const response = await request(app)
                .post('/api/contato')
                .send(dados)
                .expect(400);
            
            expect(response.body.status).toBe('error');
        });
    });
    
    describe('GET /api/contato/info', () => {
        it('deve retornar informações de contato', async () => {
            const response = await request(app)
                .get('/api/contato/info')
                .expect(200);
            
            expect(response.body.status).toBe('success');
            expect(response.body.data).toHaveProperty('telefone');
            expect(response.body.data).toHaveProperty('email');
            expect(response.body.data).toHaveProperty('endereco');
        });
    });
});
