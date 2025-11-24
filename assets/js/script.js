/**
 * Script Principal do Frontend
 * 
 * Contém toda a lógica JavaScript do site.
 */

// ============================================
// CONFIGURAÇÃO DA API
// ============================================
const API_URL = 'http://localhost:3000/api';

// ============================================
// MENU MOBILE (HAMBURGER)
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Fechar menu ao clicar em um link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

// ============================================
// MÁSCARA DE TELEFONE
// ============================================
function aplicarMascaraTelefone(input) {
    input.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length > 11) {
            value = value.slice(0, 11);
        }
        
        if (value.length > 6) {
            value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
        } else if (value.length > 2) {
            value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        } else if (value.length > 0) {
            value = `(${value}`;
        }
        
        e.target.value = value;
    });
}

// Aplicar máscara ao campo de telefone
document.addEventListener('DOMContentLoaded', () => {
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        aplicarMascaraTelefone(telefoneInput);
    }
});

// ============================================
// FORMULÁRIO DE CONTATO
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contato-form');
    
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Desabilitar botão durante envio
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            
            // Coletar dados do formulário
            const dados = {
                nome: document.getElementById('nome').value,
                email: document.getElementById('email').value,
                telefone: document.getElementById('telefone').value,
                pet: document.getElementById('pet')?.value || '',
                servico: document.getElementById('servico')?.value || '',
                mensagem: document.getElementById('mensagem').value,
                newsletter: document.getElementById('newsletter')?.checked || false
            };
            
            try {
                const response = await fetch(`${API_URL}/contato`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dados)
                });
                
                const result = await response.json();
                
                if (response.ok) {
                    mostrarMensagem('success', result.message);
                    form.reset();
                } else {
                    const errorMsg = result.errors 
                        ? result.errors.map(e => e.message).join(', ')
                        : result.message;
                    mostrarMensagem('error', errorMsg);
                }
            } catch (error) {
                console.error('Erro:', error);
                mostrarMensagem('error', 'Erro de conexão com o servidor. Verifique se o backend está rodando.');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }
        });
    }
});

// ============================================
// MENSAGENS DE FEEDBACK
// ============================================
function mostrarMensagem(tipo, texto) {
    // Remover mensagem anterior se existir
    const msgAnterior = document.querySelector('.form-message');
    if (msgAnterior) {
        msgAnterior.remove();
    }
    
    // Criar elemento de mensagem
    const msg = document.createElement('div');
    msg.className = `form-message ${tipo}`;
    msg.innerHTML = `
        <i class="fas ${tipo === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${texto}</span>
    `;
    
    // Inserir após o formulário
    const form = document.getElementById('contato-form');
    if (form) {
        form.parentNode.insertBefore(msg, form.nextSibling);
        
        // Scroll para a mensagem
        msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Remover mensagem após 5 segundos
        setTimeout(() => {
            msg.remove();
        }, 5000);
    }
}

// ============================================
// LIGHTBOX PARA GALERIA
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const galeriaItems = document.querySelectorAll('.galeria-img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.querySelector('.close-lightbox');
    
    if (galeriaItems.length > 0 && lightbox && lightboxImg) {
        galeriaItems.forEach(img => {
            img.addEventListener('click', () => {
                lightbox.classList.add('active');
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                document.body.style.overflow = 'hidden';
            });
        });
        
        // Fechar lightbox
        if (closeLightbox) {
            closeLightbox.addEventListener('click', () => {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
        
        // Fechar ao clicar fora da imagem
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Fechar com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});

// ============================================
// FAQ ACORDEÃO
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Fechar todos os outros
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Toggle do atual
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
});

// ============================================
// TABS DE PRODUTOS
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const tabLinks = document.querySelectorAll('.tab-link');
    
    tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remover active de todos
            tabLinks.forEach(l => l.classList.remove('active'));
            
            // Adicionar active ao clicado
            link.classList.add('active');
            
            // Scroll suave para a seção
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ============================================
// SCROLL SUAVE PARA LINKS INTERNOS
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// ============================================
// HEADER FIXO COM SCROLL
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
});
