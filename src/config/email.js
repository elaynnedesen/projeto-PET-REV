/**
 * Configuração de Email com Nodemailer
 * 
 * Este arquivo configura o transporter do Nodemailer para envio de emails
 * e inclui o template HTML para os emails de contato.
 */

const nodemailer = require('nodemailer');

/**
 * Cria e retorna o transporter do Nodemailer
 * @returns {Object} Transporter configurado
 */
const createTransporter = () => {
    return nodemailer.createTransport({
        host: process.env.EMAIL_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.EMAIL_PORT) || 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
};

/**
 * Gera o template HTML para o email de contato
 * @param {Object} dados - Dados do formulário de contato
 * @returns {string} HTML formatado
 */
const emailTemplate = (dados) => {
    const { nome, email, telefone, pet, servico, mensagem, newsletter } = dados;
    
    return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nova Mensagem de Contato</title>
    </head>
    <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #00d4aa, #00b894); padding: 30px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px;">🐾 Petshop Melhor Amigo</h1>
                <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Nova mensagem de contato</p>
            </div>
            
            <!-- Content -->
            <div style="padding: 30px;">
                <h2 style="color: #333; margin-top: 0;">Dados do Cliente</h2>
                
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666; width: 120px;"><strong>Nome:</strong></td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${nome}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Email:</strong></td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;"><a href="mailto:${email}" style="color: #00d4aa;">${email}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Telefone:</strong></td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${telefone}</td>
                    </tr>
                    ${pet ? `
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Pet:</strong></td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${pet}</td>
                    </tr>
                    ` : ''}
                    ${servico ? `
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Serviço:</strong></td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${servico}</td>
                    </tr>
                    ` : ''}
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Newsletter:</strong></td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${newsletter ? 'Sim, deseja receber' : 'Não'}</td>
                    </tr>
                </table>
                
                <h2 style="color: #333; margin-top: 30px;">Mensagem</h2>
                <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; border-left: 4px solid #00d4aa;">
                    <p style="color: #333; margin: 0; line-height: 1.6;">${mensagem}</p>
                </div>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #f9f9f9; padding: 20px; text-align: center; border-top: 1px solid #eee;">
                <p style="color: #666; margin: 0; font-size: 12px;">
                    Email enviado em ${new Date().toLocaleString('pt-BR')}
                </p>
                <p style="color: #999; margin: 10px 0 0 0; font-size: 11px;">
                    Este email foi gerado automaticamente pelo formulário de contato do site.
                </p>
            </div>
        </div>
    </body>
    </html>
    `;
};

module.exports = {
    createTransporter,
    emailTemplate
};
