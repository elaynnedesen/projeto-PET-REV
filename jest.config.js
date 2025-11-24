/**
 * Configuração do Jest para Testes
 */

module.exports = {
    testEnvironment: 'node',
    coveragePathIgnorePatterns: ['/node_modules/'],
    testMatch: ['**/tests/**/*.test.js'],
    collectCoverageFrom: [
        'src/**/*.js',
        'server.js',
        '!src/**/index.js'
    ],
    verbose: true,
    setupFiles: ['<rootDir>/tests/setup.js']
};

