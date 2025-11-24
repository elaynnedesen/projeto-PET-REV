/**
 * Setup de Testes
 * 
 * Configuração inicial para os testes Jest.
 */

// Definir ambiente de teste
process.env.NODE_ENV = 'test';
process.env.PORT = 3001;

// Silenciar logs durante testes
console.log = jest.fn();
console.error = jest.fn();
