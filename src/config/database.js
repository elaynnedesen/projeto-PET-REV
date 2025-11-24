/**
 * Banco de Dados Mockado
 * 
 * Este arquivo contém os dados mockados para fins educacionais.
 * Em produção, seria substituído por uma conexão real com MongoDB ou PostgreSQL.
 */

// ============================================
// PRODUTOS
// ============================================
const produtosMock = [
    {
        id: 1,
        nome: 'Ração Premium Sabor Frango',
        descricao: 'Ração de alta qualidade para cães adultos com ingredientes selecionados.',
        preco: 99.90,
        categoria: 'racoes',
        badge: 'Premium',
        imagem: '/images/produtos/Raçao Premium A.webp',
        peso: '15kg',
        ativo: true
    },
    {
        id: 2,
        nome: 'Ração Premium Raças Pequenas',
        descricao: 'Indicada para cães de pequeno porte com nutrientes balanceados.',
        preco: 89.90,
        categoria: 'racoes',
        badge: 'Especial',
        imagem: '/images/produtos/Raçao Premium B.webp',
        peso: '10kg',
        ativo: true
    },
    {
        id: 3,
        nome: 'Ração Natural Super Premium',
        descricao: 'Ingredientes naturais e nutritivos para uma alimentação saudável.',
        preco: 59.90,
        categoria: 'racoes',
        badge: 'Clássico',
        imagem: '/images/produtos/Raçao Premium C.webp',
        peso: '2kg / 7kg',
        ativo: true
    },
    {
        id: 4,
        nome: 'Bola Interativa',
        descricao: 'Estimula a atividade física do seu pet.',
        preco: 29.90,
        categoria: 'brinquedos',
        badge: 'Bestseller',
        imagem: '/images/produtos/Bola Pet.webp',
        tamanho: 'Médio',
        ativo: true
    },
    {
        id: 5,
        nome: 'Cogumelo Pet',
        descricao: 'Excelente para estímulos mentais do seu pet.',
        preco: 39.90,
        categoria: 'brinquedos',
        badge: 'Inteligente',
        imagem: '/images/produtos/Cogumelo Pet.webp',
        cor: 'Laranja',
        ativo: true
    },
    {
        id: 6,
        nome: 'Rope Tug Pet',
        descricao: 'Ótimo para brincadeiras de tração com o seu pet.',
        preco: 34.90,
        categoria: 'brinquedos',
        badge: 'Clássico',
        imagem: '/images/produtos/Rope Tug - Corda Pet.webp',
        tamanho: 'Grande',
        ativo: true
    },
    {
        id: 7,
        nome: 'Kit Shampoo + Condicionador',
        descricao: 'Limpeza suave e eficaz para o pelo do seu pet.',
        preco: 49.90,
        categoria: 'higiene',
        badge: 'Kit',
        imagem: '/images/produtos/Kit Shampoo e Condicionador.webp',
        ativo: true
    },
    {
        id: 8,
        nome: 'Kit Escova + Pente',
        descricao: 'Ideal para cuidados com a pelagem do seu pet.',
        preco: 29.90,
        categoria: 'higiene',
        badge: 'Essencial',
        imagem: '/images/produtos/Kit Escova e Pente.webp',
        ativo: true
    },
    {
        id: 9,
        nome: 'Kit Limpeza Completo',
        descricao: 'Cuidados auriculares, oculares e bucal para seu pet.',
        preco: 69.90,
        categoria: 'higiene',
        badge: 'Completo',
        imagem: '/images/produtos/kit Limpeza Completo.webp',
        itens: 4,
        ativo: true
    }
];

// ============================================
// SERVIÇOS
// ============================================
const servicosMock = [
    {
        id: 1,
        nome: 'Tosa Completa',
        descricao: 'Transformação total para o seu pet com corte estilizado.',
        preco: 60.00,
        categoria: 'tosa',
        badge: 'Mais Pedido',
        imagem: '/images/servicos/TOSA COMPLETA.webp',
        duracao: '2 horas',
        inclui: 'Corte de unhas, higienização e acabamento',
        ativo: true
    },
    {
        id: 2,
        nome: 'Tosa Higiênica',
        descricao: 'Focada na saúde e bem-estar do pet.',
        preco: 40.00,
        categoria: 'tosa',
        badge: 'Higiênica',
        imagem: '/images/servicos/TOSA HIGIENICA.webp',
        duracao: '1 hora',
        inclui: 'Limpeza, aparos e cuidados essenciais',
        ativo: true
    },
    {
        id: 3,
        nome: 'Tosa Criativa',
        descricao: 'Estilo único e personalizado para seu pet.',
        preco: 75.00,
        categoria: 'tosa',
        badge: 'Criativa',
        imagem: '/images/servicos/TOSA CRIATIVA.webp',
        duracao: '2.5 horas',
        inclui: 'Detalhes artísticos e diferenciados',
        ativo: true
    },
    {
        id: 4,
        nome: 'Banho Relaxante',
        descricao: 'Banho com produtos de qualidade premium.',
        preco: 30.00,
        categoria: 'banho',
        badge: 'Relaxante',
        imagem: '/images/servicos/Banho Relaxante.webp',
        duracao: '1 hora',
        inclui: 'Lavagem, secagem e perfume',
        ativo: true
    },
    {
        id: 5,
        nome: 'Banho Terapêutico',
        descricao: 'Ideal para pets com alergias ou pele sensível.',
        preco: 45.00,
        categoria: 'banho',
        badge: 'Terapêutico',
        imagem: '/images/servicos/Banho Terapeutico.webp',
        duracao: '1.5 horas',
        inclui: 'Shampoo medicinal + cuidados especiais',
        ativo: true
    },
    {
        id: 6,
        nome: 'Combo Banho + Tosa',
        descricao: 'Limpeza completa + corte profissional.',
        preco: 80.00,
        categoria: 'combo',
        badge: 'Combo',
        imagem: '/images/servicos/Combo Banho e tosa.webp',
        duracao: '3 horas',
        inclui: 'Serviço completo de banho e tosa',
        ativo: true
    }
];

// ============================================
// GALERIA
// ============================================
const galeriaMock = [
    {
        id: 1,
        nome: 'Bella',
        descricao: 'Tosa completa + banho relaxante e escovação',
        imagem: '/images/galeria/BELLAPET.webp',
        data: '2024-01-15',
        ativo: true
    },
    {
        id: 2,
        nome: 'Luna',
        descricao: 'Banho relaxante com hidratação especial',
        imagem: '/images/galeria/Luna Pet.webp',
        data: '2024-01-20',
        ativo: true
    },
    {
        id: 3,
        nome: 'Max',
        descricao: 'Banho completo com produtos premium',
        imagem: '/images/galeria/max.webp',
        data: '2024-02-01',
        ativo: true
    },
    {
        id: 4,
        nome: 'Nina',
        descricao: 'Banho e hidratação profunda',
        imagem: '/images/galeria/Nina.webp',
        data: '2024-02-10',
        ativo: true
    },
    {
        id: 5,
        nome: 'Thor',
        descricao: 'Banho relaxante e perfumado',
        imagem: '/images/galeria/Thor.webp',
        data: '2024-02-15',
        ativo: true
    },
    {
        id: 6,
        nome: 'Toby',
        descricao: 'Banho completo e escovação',
        imagem: '/images/galeria/tob.webp',
        data: '2024-02-20',
        ativo: true
    }
];

// ============================================
// INFORMAÇÕES DE CONTATO
// ============================================
const contatoInfo = {
    telefone: '(11) 9999-9999',
    email: 'contato@melhoramigo.com',
    endereco: 'Rua dos Pets, 123 - Centro',
    whatsapp: '5500000000000',
    horario: {
        semana: 'Segunda à Sexta: 8h às 18h',
        sabado: 'Sábado: 8h às 16h',
        domingo: 'Domingo: 9h às 15h'
    },
    redesSociais: {
        facebook: '#',
        instagram: '#',
        whatsapp: '#'
    }
};

module.exports = {
    produtosMock,
    servicosMock,
    galeriaMock,
    contatoInfo
};
