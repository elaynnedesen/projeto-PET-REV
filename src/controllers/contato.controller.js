/**
 * Controller de Contato
 * 
 * Contém a lógica de negócio para o formulário de contato e envio de emails.
 */

const { contatoInfo } = require('../config/database');
const { createTransporter, emailTemplate } = require('../config/email');

/**
 * Processa o formulário de contato e envia email
 * @param {Object} req - Request
 * @param {Object} res - Response
 */
const enviarContato = async (req, res) => {
    try {
        const { nome, email, telefone, pet, servico, mensagem, newsletter } = req.body;
        
        // Log da mensagem recebida
        console.log('📧 Nova mensagem de contato recebida:');
        console.log(`   Nome: ${nome}`);
        console.log(`   Email: ${email}`);
        console.log(`   Telefone: ${telefone}`);
        
        // Verificar se as credenciais de email estão configuradas
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            try {
                const transporter = createTransporter();
                
                await transporter.sendMail({
                    from: process.env.EMAIL_FROM || 'noreply@petshopmelhoramigo.com',
                    to: process.env.EMAIL_USER,
                    subject: `[Petshop Melhor Amigo] Nova mensagem de ${nome}`,
                    html: emailTemplate({ nome, email, telefone, pet, servico, mensagem, newsletter })
                });
                
                console.log('✅ Email enviado com sucesso!');
            } catch (emailError) {
                console.error('⚠️ Erro ao enviar email:', emailError.message);
                // Continua mesmo se o email falhar
            }
        } else {
            console.log('⚠️ Credenciais de email não configuradas. Email não enviado.');
        }
        
        res.status(200).json({
            status: 'success',
            message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
            data: {
                nome,
                email,
                enviado: true
            }
        });
    } catch (error) {
        console.error('❌ Erro ao processar contato:', error);
        res.status(500).json({
            status: 'error',
            message: 'Erro ao processar mensagem de contato',
            error: error.message
        });
    }
};

/**
 * Retorna informações de contato do petshop
 * @param {Object} req - Request
 * @param {Object} res - Response
 */
const obterInfoContato = (req, res) => {
    try {
        res.status(200).json({
            status: 'success',
            data: contatoInfo
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Erro ao obter informações de contato',
            error: error.message
        });
    }
};

module.exports = {
    enviarContato,
    obterInfoContato
};
