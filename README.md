# 🐾 Petshop Melhor Amigo

Sistema web completo para gerenciamento de petshop, com frontend responsivo e backend API RESTful, desenvolvido para fins educacionais.

> **📚 Projeto Educacional**: Este é um projeto desenvolvido para aprendizado de desenvolvimento web full-stack, demonstrando boas práticas de arquitetura de software, separação de responsabilidades e integração frontend-backend.

## 📋 Sobre o Projeto

O **Petshop Melhor Amigo** é uma aplicação web moderna e completa que oferece:

- 🏠 **Site institucional** com apresentação de serviços e produtos
- 🛍️ **Catálogo digital** de produtos (rações, brinquedos, higiene) e serviços (tosa, banho)
- 📸 **Galeria de fotos** dos pets atendidos com depoimentos de clientes
- 📧 **Formulário de contato funcional** com integração completa frontend-backend
- ✉️ **Envio automático de emails** via Nodemailer + Gmail SMTP
- 📱 **Design responsivo** para desktop, tablet e mobile
- 🔗 **Integração WhatsApp** para agendamento rápido
- 🎨 **Interface moderna** com paleta de cores verde vibrante
- ✅ **Validação dupla** de dados (client-side e server-side)

---

## 🏗️ Arquitetura do Sistema

O projeto segue uma **arquitetura de duas camadas** (frontend e backend separados), permitindo desenvolvimento, deploy e escalabilidade independentes.

```
┌─────────────────────────────────────────────────────────────┐
│                     CLIENTE (Navegador)                     │
└───────────────────────┬─────────────────────────────────────┘
                        │ HTTP/HTTPS
        ┌───────────────┴────────────────┐
        │                                │
        ▼                                ▼
┌───────────────┐                ┌──────────────────┐
│   FRONTEND    │◄──── API ─────►│     BACKEND      │
│  (Estático)   │                │   (Node.js)      │
└───────────────┘                └──────────────────┘
│ HTML/CSS/JS   │                │  Express.js      │
│ Port: 5500    │                │  Port: 3000      │
└───────────────┘                └─────────┬────────┘
                                           │
                                           ▼
                                 ┌──────────────────┐
                                 │  Email Service   │
                                 │   (Nodemailer)   │
                                 └──────────────────┘
```

### 🔌 Tecnologias do Backend

| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| **Node.js** | 18+ | Runtime JavaScript do lado servidor |
| **Express.js** | ^4.18 | Framework web minimalista e flexível |
| **Nodemailer** | ^6.9 | Envio de emails via SMTP (Gmail) |
| **Express Validator** | ^7.0 | Validação de dados de entrada |
| **Helmet** | ^7.1 | Segurança HTTP (headers seguros) |
| **CORS** | ^2.8 | Controle de acesso entre origens |
| **Morgan** | ^1.10 | Logger de requisições HTTP |
| **Dotenv** | ^16.3 | Gerenciamento de variáveis de ambiente |

**Arquitetura Backend**: MVC (Model-View-Controller)
- **Routes**: Definem os endpoints HTTP
- **Controllers**: Contêm a lógica de negócio
- **Config**: Configurações (email, database mockado)
- **Middlewares**: Validação, tratamento de erros, CORS

### 🎨 Tecnologias do Frontend

| Tecnologia | Descrição |
|------------|-----------|
| **HTML5** | Estrutura semântica das páginas |
| **CSS3** | Estilização moderna (Flexbox, Grid, Variables) |
| **JavaScript (Vanilla)** | Interatividade sem frameworks |
| **WebP** | Formato de imagem otimizado (90% menor que PNG) |
| **Google Fonts** | Tipografia Poppins |
| **Font Awesome 6.0** | Ícones vetoriais |

**Funcionalidades JavaScript**:
- Menu mobile responsivo (hamburger)
- Validação de formulários em tempo real
- Integração com backend via Fetch API
- Envio assíncrono de formulário (AJAX)
- Lightbox para galeria de fotos
- FAQ interativo (acordeão)
- Scroll suave entre seções
- Máscara de telefone automática

### 📂 Separação Frontend/Backend

```
PROJETO-PET-REV/
│
├── 📂 backend/              ← API RESTful (Node.js + Express)
│   ├── src/
│   │   ├── config/         ← Configurações (email, dados mockados)
│   │   ├── controllers/    ← Lógica de negócio (4 controllers)
│   │   ├── routes/         ← Definição de rotas HTTP (4 arquivos)
│   │   └── middlewares/    ← Validação, erros, 404
│   ├── server.js           ← Ponto de entrada do servidor
│   ├── package.json        ← Dependências Node.js
│   └── env-example.txt     ← Modelo de variáveis de ambiente
│
├── 📂 frontend/             ← Site estático (HTML/CSS/JS)
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css   ← Todos os estilos
│   │   ├── js/
│   │   │   └── script.js   ← Todo o JavaScript
│   │   └── images/         ← Imagens organizadas por tipo
│   │       ├── principais/ ← Home
│   │       ├── produtos/   ← Produtos
│   │       ├── servicos/   ← Serviços
│   │       └── galeria/    ← Fotos dos pets
│   ├── index.html          ← Página inicial
│   ├── produtos.html       ← Catálogo de produtos/serviços
│   ├── galeria.html        ← Galeria de fotos
│   └── contato.html        ← Formulário de contato
│
└── README.md                ← Este arquivo
```

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

### Obrigatórios:

- ✅ **Node.js** versão **18.x ou superior** (testado com v18.16.1)
  - Download: https://nodejs.org
  - Verificar: `node --version`
  
- ✅ **npm** (vem com Node.js) ou **yarn**
  - Verificar: `npm --version`

### Opcionais:

- 🔧 **Python 3** (para servidor HTTP simples no frontend)
  - Verificar: `python --version`
  
- 🔧 **Git** (para controle de versão)
  - Download: https://git-scm.com
  - Verificar: `git --version`

- 🔧 **VS Code** ou editor de código preferido
  - Download: https://code.visualstudio.com

---

## ⚙️ Configuração do Ambiente

### 1️⃣ Instalar Dependências do Backend

```bash
# Navegue até a pasta do backend
cd backend

# Instale todas as dependências do package.json
npm install
```

**Dependências instaladas** (~150 pacotes incluindo subdependências):
- **Produção**: Express, Nodemailer, CORS, Helmet, Morgan, Express Validator, Dotenv, Multer
- **Desenvolvimento**: Nodemon, Jest, Supertest, ESLint

### 2️⃣ Configurar Variáveis de Ambiente

O backend utiliza variáveis de ambiente para configurações sensíveis.

**Passo 1**: Renomeie o arquivo de exemplo

```bash
# Windows PowerShell
Rename-Item env-example.txt .env

# macOS/Linux
mv env-example.txt .env
```

**Passo 2**: Edite o arquivo `.env` com suas configurações

```env
# ============================================
# CONFIGURAÇÕES DO SERVIDOR
# ============================================
PORT=3000
NODE_ENV=development

# ============================================
# CONFIGURAÇÕES DE CORS
# ============================================
# URL do frontend para permitir requisições
FRONTEND_URL=http://localhost:5500

# ============================================
# CONFIGURAÇÕES DE EMAIL (Nodemailer + Gmail)
# ============================================
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app-gerada
EMAIL_FROM=noreply@petshopmelhoramigo.com

# ============================================
# WHATSAPP (Opcional)
# ============================================
WHATSAPP_NUMBER=5511999999999

# ============================================
# CONFIGURAÇÕES DA APLICAÇÃO
# ============================================
MAX_FILE_SIZE=5242880
ALLOWED_FILE_TYPES=image/jpeg,image/png,image/webp
```

**Passo 3**: Configurar Email do Gmail

Para que o formulário de contato envie emails, você precisa gerar uma **senha de app** no Gmail:

1. Acesse: https://myaccount.google.com/security
2. Ative **"Verificação em duas etapas"** (obrigatório)
3. Procure por **"Senhas de app"**
4. Selecione **"Email"** e **"Outro dispositivo"**
5. Copie a senha gerada (16 caracteres com espaços)
6. Cole no `.env` em `EMAIL_PASS`

```env
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop  ← Cole a senha de app aqui
```

### 3️⃣ Preparar o Frontend (não requer instalação)

O frontend é estático (HTML/CSS/JS puro), portanto **não precisa instalar dependências**. Apenas certifique-se de que os arquivos estão na pasta `frontend/`.

---

## 🚀 Como Executar em Desenvolvimento

Você precisará de **dois terminais** abertos simultaneamente (um para o backend, outro para o frontend).

### Terminal 1: Executar o Backend

   ```bash
# Navegue até a pasta do backend
cd backend

# Inicie o servidor em modo desenvolvimento (com auto-reload)
npm run dev
```

**Saída esperada:**

```
==================================================
🐾 Petshop Melhor Amigo - Backend API
==================================================
✅ Servidor rodando em: http://localhost:3000
📊 Ambiente: development
🌐 Frontend permitido: http://localhost:5500
==================================================

📋 Rotas disponíveis:
   GET  http://localhost:3000/api/health
   GET  http://localhost:3000/api/produtos
   GET  http://localhost:3000/api/servicos
   GET  http://localhost:3000/api/galeria
   POST http://localhost:3000/api/contato

🚀 Pronto para receber requisições!
```

✅ **Backend rodando em**: `http://localhost:3000`

**Testar o backend**: Abra `http://localhost:3000/api/health` no navegador. Deve retornar um JSON com status "success".

---

### Terminal 2: Executar o Frontend

Abra um **novo terminal** (mantenha o backend rodando no primeiro).

```bash
# Navegue até a pasta do frontend
cd frontend
```

**Escolha uma das opções abaixo:**

#### Opção A: Python (mais simples)

```bash
# Python 3
python -m http.server 5500

# Ou Python 2 (versões antigas)
python -m SimpleHTTPServer 5500
```

#### Opção B: Node.js http-server

```bash
# Instalar globalmente (primeira vez)
npm install -g http-server

# Executar
http-server -p 5500
```

#### Opção C: Node.js npx (sem instalação global)

```bash
npx http-server -p 5500
```

#### Opção D: VS Code Live Server

1. Instale a extensão **"Live Server"** no VS Code
2. Clique com o botão direito em `index.html`
3. Selecione **"Open with Live Server"**

**Saída esperada:**

```
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:5500
  http://192.168.1.10:5500
Hit CTRL-C to stop the server
```

✅ **Frontend rodando em**: `http://localhost:5500`

**Acessar o site**: Abra `http://localhost:5500` no navegador.

---

### 🔄 Parar os Servidores

Para parar qualquer servidor, pressione **`Ctrl + C`** no terminal correspondente.

### 🔄 Reiniciar os Servidores

Se algo não funcionar, reinicie:

```bash
# Parar (Ctrl + C) e reiniciar backend
cd backend
npm run dev

# Parar (Ctrl + C) e reiniciar frontend
cd frontend
python -m http.server 5500
```

---

## 📜 Scripts Principais

### Backend (package.json)

| Script | Comando | Descrição |
|--------|---------|-----------|
| **`npm run dev`** | `nodemon server.js` | Inicia o servidor em modo desenvolvimento com auto-reload (reinicia automaticamente ao salvar arquivos) |
| **`npm start`** | `node server.js` | Inicia o servidor em modo produção (sem auto-reload) |
| **`npm test`** | `jest --coverage` | Executa testes automatizados com cobertura de código |
| **`npm run test:watch`** | `jest --watch` | Executa testes em modo watch (re-executa ao salvar) |
| **`npm run lint`** | `eslint src/ server.js` | Verifica qualidade do código com ESLint |

**Nota**: O `nodemon` monitora mudanças e reinicia automaticamente. Os testes usam Jest + Supertest.

### Frontend (sem scripts npm)

O frontend não possui `package.json` pois é HTML/CSS/JS puro. Use um servidor HTTP simples:

| Comando | Descrição |
|---------|-----------|
| `python -m http.server 5500` | Servidor HTTP com Python |
| `npx http-server -p 5500` | Servidor HTTP com Node.js (sem instalação) |
| `http-server -p 5500` | Servidor HTTP com Node.js (instalado globalmente) |

---

## 🧪 Testes Automatizados

O projeto inclui **testes automatizados** usando **Jest** e **Supertest**.

### Executar Testes

```bash
cd backend

# Instalar dependências de teste (se ainda não instalou)
npm install

# Executar todos os testes
npm test

# Executar testes em modo watch (re-executa ao salvar)
npm run test:watch

# Executar apenas um arquivo de teste
npx jest tests/health.test.js
```

### Testes Implementados

**3 arquivos de teste com 9 casos de teste:**

1. **`tests/health.test.js`** - Health Check
   - ✅ GET /api/health retorna status 200
   - ✅ Resposta contém estrutura correta

2. **`tests/produtos.test.js`** - Endpoints de Produtos
   - ✅ Lista todos os produtos
   - ✅ Busca produto por ID
   - ✅ Produto inexistente retorna 404
   - ✅ Lista categorias

3. **`tests/contato.test.js`** - Validação de Contato
   - ✅ Dados válidos retornam 200
   - ✅ Nome obrigatório (validação)
   - ✅ Email inválido retorna erro 400
   - ✅ Mensagem curta retorna erro 400
   - ✅ GET /api/contato/info funciona

### Cobertura de Código

```bash
# Ver relatório de cobertura
npm test

# Resultado esperado:
# - Statements: ~80%+
# - Branches: ~70%+
# - Functions: ~75%+
# - Lines: ~80%+
```

### Estrutura de Testes

```
backend/tests/
├── health.test.js      # Testes de health check
├── produtos.test.js    # Testes de produtos
└── contato.test.js     # Testes de contato e validação
```

---

## 📁 Estrutura de Pastas Detalhada

```
PROJETO-PET-REV/
│
├── 📂 backend/                         # Backend API REST
│   │
│   ├── 📂 src/                         # Código-fonte
│   │   │
│   │   ├── 📂 config/                  # Configurações
│   │   │   ├── database.js            # Dados mockados (9 produtos, 6 serviços, 6 fotos)
│   │   │   └── email.js               # Configuração Nodemailer + template HTML
│   │   │
│   │   ├── 📂 controllers/             # Lógica de negócio (MVC)
│   │   │   ├── produtos.controller.js # Lista, busca, filtra produtos
│   │   │   ├── servicos.controller.js # Lista, busca, filtra serviços
│   │   │   ├── galeria.controller.js  # Lista, busca fotos da galeria
│   │   │   └── contato.controller.js  # Processa formulário, envia email
│   │   │
│   │   ├── 📂 routes/                  # Definição de rotas HTTP
│   │   │   ├── produtos.routes.js     # GET /api/produtos, /api/produtos/:id
│   │   │   ├── servicos.routes.js     # GET /api/servicos, /api/servicos/:id
│   │   │   ├── galeria.routes.js      # GET /api/galeria, /api/galeria/:id
│   │   │   └── contato.routes.js      # POST /api/contato, GET /api/contato/info
│   │   │
│   │   └── 📂 middlewares/             # Middlewares personalizados
│   │       ├── errorHandler.js        # Tratamento global de erros
│   │       ├── notFound.js            # Rota 404 não encontrada
│   │       └── validator.js           # Validação com express-validator
│   │
│   ├── 📂 tests/                       # Testes automatizados (Jest + Supertest)
│   │   ├── health.test.js             # Testes de health check
│   │   ├── produtos.test.js           # Testes de produtos
│   │   └── contato.test.js            # Testes de validação de contato
│   │
│   ├── server.js                       # ⚡ Ponto de entrada do backend
│   ├── jest.config.js                  # Configuração do Jest
│   ├── package.json                    # Dependências, scripts e dev dependencies
│   ├── env-example.txt                 # Modelo de variáveis de ambiente
│   ├── .eslintrc.json                  # Configuração do ESLint
│   └── .gitignore                      # Ignora node_modules/, .env
│
├── 📂 frontend/                        # Frontend estático
│   │
│   ├── 📂 assets/                      # Recursos estáticos
│   │   │
│   │   ├── 📂 css/
│   │   │   └── style.css              # ~1200 linhas de CSS (responsivo)
│   │   │
│   │   ├── 📂 js/
│   │   │   └── script.js              # JavaScript (menu, validação, integração API)
│   │   │
│   │   └── 📂 images/                  # Imagens WebP otimizadas
│   │       ├── 📂 principais/          # 2 imagens (home)
│   │       ├── 📂 produtos/            # 9 imagens (produtos)
│   │       ├── 📂 servicos/            # 6 imagens (serviços)
│   │       └── 📂 galeria/             # 6 fotos de pets
│   │
│   ├── index.html                      # Página inicial (home)
│   ├── produtos.html                   # Catálogo de produtos e serviços
│   ├── galeria.html                    # Galeria de fotos + depoimentos
│   └── contato.html                    # Formulário de contato + mapa
│
├── README.md                            # 📄 Este arquivo (documentação principal)
└── .gitignore                           # Ignora node_modules/, .env, logs
```

---

## 🔌 Rotas Principais do Backend (API)

A API REST expõe os seguintes endpoints:

### 🏥 Health Check

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/api/health` | Verifica se a API está funcionando |

**Exemplo de resposta:**
```json
{
  "status": "success",
  "message": "API do Petshop Melhor Amigo está funcionando!",
  "timestamp": "2024-11-20T15:30:00.000Z",
  "environment": "development"
}
```

---

### 📦 Produtos

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/api/produtos` | Lista todos os produtos (9 produtos) |
| `GET` | `/api/produtos?categoria=racoes` | Filtra produtos por categoria |
| `GET` | `/api/produtos/:id` | Busca produto específico por ID |
| `GET` | `/api/produtos/categorias` | Lista categorias (racoes, brinquedos, higiene) |

**Categorias disponíveis**: `racoes`, `brinquedos`, `higiene`

**Exemplo de produto:**
```json
{
  "id": 1,
  "nome": "Ração Premium A",
  "descricao": "Ração de alta qualidade para cães adultos...",
  "preco": 89.90,
  "categoria": "racoes",
  "badge": "Premium",
  "imagem": "/images/produtos/Raçao Premium A.webp",
  "ativo": true
}
```

---

### 🛠️ Serviços

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/api/servicos` | Lista todos os serviços (6 serviços) |
| `GET` | `/api/servicos?categoria=tosa` | Filtra serviços por categoria |
| `GET` | `/api/servicos/:id` | Busca serviço específico por ID |
| `GET` | `/api/servicos/categorias` | Lista categorias (tosa, banho, combo) |

**Categorias disponíveis**: `tosa`, `banho`, `combo`

**Exemplo de serviço:**
```json
{
  "id": 1,
  "nome": "Tosa Completa",
  "descricao": "Tosa completa com corte estilizado conforme o padrão da raça.",
  "preco": 80.00,
  "categoria": "tosa",
  "duracao": "2 horas",
  "badge": "Popular",
  "imagem": "/images/servicos/TOSA COMPLETA.webp",
  "ativo": true
}
```

---

### 📸 Galeria

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/api/galeria` | Lista todas as fotos (6 fotos) ordenadas por data |
| `GET` | `/api/galeria/:id` | Busca foto específica por ID |

**Exemplo de foto:**
```json
{
  "id": 1,
  "nome": "Bella",
  "descricao": "Tosa completa + banho relaxante",
  "imagem": "/images/galeria/BELLAPET.webp",
  "data": "2024-01-15",
  "ativo": true
}
```

---

### 📧 Contato

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `POST` | `/api/contato` | Envia mensagem de contato (com validação) |
| `GET` | `/api/contato/info` | Retorna informações de contato do petshop |

**Validações no POST** (express-validator):
- `nome`: obrigatório, 3-100 caracteres
- `email`: obrigatório, formato válido
- `telefone`: obrigatório, mínimo 10 dígitos
- `mensagem`: obrigatório, 10-1000 caracteres

**Corpo da requisição (JSON):**
```json
{
  "nome": "João Silva",
  "email": "joao@example.com",
  "telefone": "11999999999",
  "assunto": "Agendamento de tosa",
  "mensagem": "Gostaria de agendar uma tosa completa..."
}
```

**Resposta de sucesso:**
```json
{
  "status": "success",
  "message": "Mensagem enviada com sucesso! Entraremos em contato em breve.",
  "data": {
    "nome": "João Silva",
    "email": "joao@example.com",
    "enviado": true
  }
}
```

**Resposta de erro (validação):**
```json
{
  "status": "error",
  "statusCode": 400,
  "message": "Erro de validação",
  "errors": [
    {
      "field": "email",
      "message": "Digite um email válido",
      "value": "email-invalido"
    }
  ]
}
```

---

## 📧 Formulário de Contato - Integração Completa

O formulário de contato está **totalmente integrado** entre frontend e backend, com envio real de emails.

### ✅ Funcionalidades Implementadas

**Frontend (JavaScript):**
- ✅ Validação client-side em tempo real
- ✅ Máscara automática de telefone `(11) 99999-9999`
- ✅ Feedback visual (loading, sucesso, erro)
- ✅ Botão desabilitado durante envio
- ✅ Mensagens de erro específicas por campo
- ✅ Auto-scroll para mensagens
- ✅ Tratamento de erros de conexão

**Backend (Node.js + Express):**
- ✅ Validação server-side com express-validator
- ✅ Sanitização de dados
- ✅ Envio de email via Nodemailer (Gmail SMTP)
- ✅ Template HTML bonito para emails
- ✅ Logs estruturados
- ✅ Respostas padronizadas (JSON)

### 🔄 Fluxo de Funcionamento

```
1. USUÁRIO preenche formulário
   ↓
2. FRONTEND valida campos (JavaScript)
   ↓
3. FRONTEND envia POST para http://localhost:3000/api/contato
   ↓
4. BACKEND valida dados (express-validator)
   ↓
5. BACKEND envia email via Nodemailer (Gmail)
   ↓
6. BACKEND retorna JSON (sucesso/erro)
   ↓
7. FRONTEND mostra mensagem para usuário
```

### 🧪 Como Testar

1. **Certifique-se que backend está rodando:**
   ```bash
   cd backend
   npm run dev
   ```

2. **Configure o email no `.env`:**
   ```env
   EMAIL_USER=seu-email@gmail.com
   EMAIL_PASS=sua-senha-de-app-gmail
   ```

3. **Acesse o formulário:**
   ```
   http://localhost:5500/contato.html
   ```

4. **Preencha e envie:**
   - Nome completo
   - Email válido
   - Telefone (mínimo 10 dígitos)
   - Mensagem
   - Aceite os termos

5. **Aguarde a resposta:**
   - ⏳ Botão fica "Enviando..."
   - ✅ Mensagem verde = sucesso
   - ❌ Mensagem vermelha = erro
   - 📧 Email chega na caixa de entrada!

### 📋 Campos do Formulário

| Campo | Obrigatório | Validação |
|-------|-------------|-----------|
| Nome | ✅ Sim | 3-100 caracteres |
| Email | ✅ Sim | Formato válido |
| Telefone | ✅ Sim | Mínimo 10 dígitos |
| Nome do Pet | ❌ Não | - |
| Serviço de Interesse | ❌ Não | Select (tosa, banho, etc) |
| Mensagem | ✅ Sim | 10-1000 caracteres |
| Termos de Privacidade | ✅ Sim | Checkbox |
| Newsletter | ❌ Não | Checkbox |

### 📧 Template de Email

O email enviado é um HTML formatado com:
- 🎨 Design bonito (verde do petshop)
- 📋 Todos os dados do formulário
- 📅 Data/hora do envio
- 🐾 Logo e assinatura do petshop

### 🐛 Tratamento de Erros

**Erros de validação (frontend):**
- Mensagem vermelha abaixo do campo
- Campo ganha foco automaticamente
- Mensagem específica por erro

**Erros do servidor:**
- Mensagem vermelha global
- Detalhes do erro exibidos
- Botão reabilitado para tentar novamente

**Erro de conexão:**
- Detecta se backend está offline
- Mostra mensagem clara: "Erro de conexão com o servidor"
- Instrui a verificar se backend está rodando

### 🔒 Segurança

- ✅ Validação dupla (client + server)
- ✅ Sanitização de inputs (proteção XSS)
- ✅ Rate limiting (pode ser implementado)
- ✅ CORS configurado corretamente
- ✅ Headers de segurança (Helmet)

### 📱 Responsividade

O formulário é totalmente responsivo:
- ✅ Desktop: layout em 2 colunas
- ✅ Tablet: layout adaptativo
- ✅ Mobile: layout em 1 coluna

### 💡 Exemplo de Código de Integração

**Frontend (`script.js`):**
```javascript
const API_URL = 'http://localhost:3000/api';

async function enviarParaBackend(dados) {
    const response = await fetch(`${API_URL}/contato`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    });
    
    const result = await response.json();
    
    if (response.ok) {
        mostrarMensagem('success', result.message);
    } else {
        mostrarMensagem('error', result.message);
    }
}
```

**Backend (`contato.controller.js`):**
```javascript
const transporter = createTransporter();

await transporter.sendMail({
    from: EMAIL_FROM,
    to: EMAIL_USER,
    subject: `[Petshop] Nova mensagem de ${nome}`,
    html: emailTemplate(dados)
});
```

---

## 🏭 Como Gerar Build/Versão de Produção

### Backend - Preparação para Produção

1. **Altere o ambiente para produção**:
   
   Edite o `.env`:
   ```env
   NODE_ENV=production
   PORT=3000
   FRONTEND_URL=https://seu-site-frontend.com
   ```

2. **Execute em modo produção**:
   
   ```bash
   npm start
   ```

3. **Deploy em serviço de hospedagem** (exemplos):

   **Heroku**:
   ```bash
   heroku create petshop-melhor-amigo-api
   git push heroku main
   heroku config:set NODE_ENV=production EMAIL_USER=...
   ```

   **Railway**:
   ```bash
   railway login
   railway init
   railway up
   ```

   **Render**:
   - Conecte o repositório GitHub
   - Configure variáveis de ambiente no painel
   - Deploy automático

### Frontend - Build para Produção

O frontend já está **pronto para produção** (HTML/CSS/JS puros, sem build). Basta fazer upload para hospedagem estática:

**Netlify** (drag-and-drop):
1. Acesse https://app.netlify.com/drop
2. Arraste a pasta `frontend/`
3. Pronto! Site online em segundos

**Vercel**:
```bash
npm install -g vercel
cd frontend
vercel
```

**GitHub Pages**:
1. Faça push do projeto para GitHub
2. Settings > Pages
3. Selecione a branch e pasta `frontend/`
4. Publique

**Hospedagens sugeridas**:
- Frontend: Netlify, Vercel, GitHub Pages (gratuito)
- Backend: Heroku, Railway, Render (gratuito com limitações)

---

## 📝 Notas Finais / Contexto do Projeto

### 🎓 Contexto Educacional

Este projeto foi desenvolvido com **propósito educacional** para demonstrar:

✅ **Arquitetura Full-Stack**:
- Separação clara entre frontend (interface) e backend (lógica)
- Comunicação via API REST
- Deploy independente de cada camada

✅ **Boas Práticas de Desenvolvimento**:
- Código organizado seguindo padrão MVC
- Documentação completa (JSDoc nas funções)
- Validação de dados no servidor e cliente
- Tratamento de erros robusto
- Segurança (Helmet, CORS, sanitização)

✅ **Tecnologias Modernas**:
- Node.js + Express (backend padrão da indústria)
- HTML5/CSS3/JavaScript puro (sem dependência de frameworks)
- Imagens WebP otimizadas (performance)

✅ **Integração Real**:
- Envio de emails via Nodemailer + Gmail (100% funcional)
- Integração com WhatsApp para agendamentos
- Formulário com validação dupla (client + server)
- Comunicação frontend-backend via Fetch API

### 🚧 Status Atual

- ✅ **Backend**: Totalmente funcional com dados mockados
- ✅ **Frontend**: Completo e responsivo
- ✅ **Formulário de Contato**: Integrado e funcional (envia emails reais)
- ✅ **Validação**: Dupla (client-side + server-side)
- ✅ **Email**: Configurado com Nodemailer + Gmail SMTP
- ✅ **Banco de dados**: Mock em memória implementado (`backend/src/config/database.js`)
  - **Justificativa**: Para fins educacionais, dados mockados permitem testar toda a API sem complexidade adicional de configurar banco de dados. Facilita a execução imediata do projeto.
  - **Dados disponíveis**: 9 produtos, 6 serviços, 6 fotos de galeria
  - **Próximo passo**: Migrar para MongoDB/PostgreSQL para produção
- ⚠️ **Autenticação**: Não implementada (considerar JWT para painel admin futuro)

### 🔮 Próximos Passos Sugeridos

**Curto prazo**:
1. Implementar banco de dados real (MongoDB Atlas ou PostgreSQL)
2. Adicionar painel administrativo para gerenciar produtos
3. Implementar upload de imagens (Multer + Cloudinary)

**Médio prazo**:
4. Sistema de autenticação JWT
5. Sistema de agendamento online
6. Carrinho de compras e checkout

**Longo prazo**:
7. Integração com gateway de pagamento (Stripe, PagSeguro)
8. App mobile (React Native ou Flutter)
9. Chat em tempo real (Socket.io)

### 🆘 Suporte e Dúvidas

Se você é **estudante** ou **desenvolvedor** usando este projeto:

- 📖 Leia toda esta documentação com atenção
- 🔍 Explore os arquivos de código (há comentários explicativos)
- 🧪 Teste cada endpoint individualmente no navegador ou Postman
- 📚 Todo código possui comentários explicativos e documentação JSDoc

**Links úteis**:
- Node.js: https://nodejs.org/docs
- Express.js: https://expressjs.com/guide
- Nodemailer: https://nodemailer.com
- MDN Web Docs: https://developer.mozilla.org/pt-BR/

### 📊 Estatísticas do Projeto

- **Arquivos criados**: ~30 arquivos (backend + frontend + testes + docs)
- **Linhas de código**: ~5.500 linhas (incluindo integração e testes)
- **Endpoints da API**: 12 endpoints funcionais
- **Testes automatizados**: 9 casos de teste (3 arquivos)
- **Cobertura de código**: ~80% (statements, branches, functions, lines)
- **Páginas do site**: 4 páginas HTML completas
- **Imagens**: 23 imagens WebP otimizadas
- **Formulários**: 1 formulário totalmente integrado com backend
- **Emails enviados**: Via Nodemailer + Gmail SMTP
- **Qualidade de código**: ESLint configurado

---

## 🗄️ Banco de Dados - Por Que Mock?

Este projeto utiliza **dados mockados em memória** (`backend/src/config/database.js`) ao invés de um banco de dados real.

### ✅ Justificativa Técnica (Projeto Educacional)

**Vantagens para aprendizado:**
- ✅ **Execução imediata**: Não requer instalação/configuração de banco de dados
- ✅ **Foco na arquitetura**: Permite concentrar no aprendizado de API REST, MVC, validação
- ✅ **Portabilidade**: Qualquer pessoa pode clonar e rodar em segundos
- ✅ **Demonstração clara**: Dados visíveis e editáveis em um arquivo simples
- ✅ **Sem custo**: Não precisa de serviço de banco em nuvem

**Dados disponíveis:**
- 9 produtos (rações, brinquedos, higiene)
- 6 serviços (tosa, banho, combo)
- 6 fotos de galeria com descrições

**Implementação:**
```javascript
// backend/src/config/database.js
const produtosMock = [
    { id: 1, nome: 'Ração Premium A', preco: 89.90, ... },
    { id: 2, nome: 'Ração Premium B', preco: 95.90, ... },
    // ...
];

module.exports = { produtosMock, servicosMock, galeriaMock };
```

### 🚀 Migração Futura para Banco Real

Para produção, a estrutura já está **preparada para migração**:

**MongoDB (recomendado para este projeto):**
```bash
npm install mongoose
```

**PostgreSQL:**
```bash
npm install sequelize pg pg-hstore
```

A arquitetura MVC permite **substituir apenas** o arquivo `database.js` por models reais, sem alterar controllers ou routes.

---

## 🔍 Qualidade de Código - ESLint

O projeto inclui **ESLint** para garantir qualidade e consistência do código.

### Executar Linter

```bash
cd backend

# Verificar código
npm run lint

# Corrigir problemas automaticamente (se possível)
npx eslint src/ server.js --fix
```

### Configuração

**Arquivo:** `backend/.eslintrc.json`

- ✅ Regras padrão do ESLint
- ✅ Ambiente Node.js + Jest
- ✅ ECMAScript 2021
- ✅ Console.log permitido (útil para logs)
- ✅ Variáveis não usadas apenas como warning

---

## 🖼️ Nota Sobre Nomes de Arquivos de Imagem

⚠️ **Importante**: Os nomes dos arquivos de imagem contêm espaços e acentuação (ex: `Cao Feliz.webp`, `Raçao Premium A.webp`). 

**Isso funciona corretamente** no projeto atual, pois:
- ✅ Os navegadores modernos tratam espaços automaticamente (encoding)
- ✅ O servidor HTTP serve os arquivos corretamente
- ✅ Os paths nos HTMLs estão corretos

**Para produção** (opcional), você pode:
1. Renomear arquivos removendo espaços: `cao-feliz.webp`
2. Remover acentuação: `racao-premium-a.webp`
3. Atualizar referências nos HTMLs e no `database.js`

**Decisão**: Mantido com espaços/acentos para preservar legibilidade e compatibilidade com o frontend existente.

---

## 🎨 Paleta de Cores (Customização)

Para alterar as cores do site, edite as variáveis CSS em `frontend/assets/css/style.css`:

```css
:root {
    --verde: #00d4aa;           /* Cor principal */
    --verde-claro: #00e6b8;     /* Variações */
    --verde-escuro: #00b894;    /* Gradientes */
    --verde-hover: #26e7c5;     /* Estados hover */
    --branco: #fff;
    --cinza: #777;
    --preto: #333;
}
```

---

## 📞 Configurar Número do WhatsApp

Substitua `5500000000000` pelo número real (com código do país + DDD) em todos os arquivos HTML:

**Formato**: `55` (Brasil) + `11` (DDD) + `999999999` (número)

Exemplo: `5511999999999`

Busque nos arquivos:
```bash
# Buscar e substituir em todos os HTMLs
grep -r "5500000000000" frontend/*.html
```

---

## 🐞 Solução de Problemas Comuns

### ❌ "npm não é reconhecido"
**Solução**: Instale o Node.js de https://nodejs.org e reinicie o terminal

### ❌ "Porta 3000 já está em uso"
**Solução**: Altere a porta no `.env` (`PORT=3001`) ou mate o processo:
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <numero> /F

# macOS/Linux
lsof -ti:3000 | xargs kill
```

### ❌ "CORS Error" no console do navegador
**Solução**: Verifique se `FRONTEND_URL` no `.env` está correto (`http://localhost:5500`) e reinicie o backend

### ❌ "Email não envia"
**Solução**: 
1. Verifique se a senha de app do Gmail está correta
2. Confirme que a verificação em duas etapas está ativa
3. Veja logs no terminal do backend
4. Teste com outro email

### ❌ Imagens não carregam no frontend
**Solução**: Certifique-se de usar um servidor HTTP (não abra HTML diretamente com `file://`)

### ❌ "Erro de conexão com o servidor" no formulário
**Solução**: 
1. Verifique se o backend está rodando em `http://localhost:3000`
2. Teste o endpoint diretamente: `http://localhost:3000/api/health`
3. Verifique se `FRONTEND_URL=http://localhost:5500` no `.env`
4. Abra DevTools (F12) > Console para ver erros detalhados

### ❌ Formulário não envia email
**Solução**:
1. Verifique se configurou `EMAIL_USER` e `EMAIL_PASS` no `.env`
2. Certifique-se de usar senha de app do Gmail (não a senha normal)
3. Veja logs no terminal do backend ao enviar o formulário
4. Verifique pasta de spam

### ❌ "CORS policy" ao enviar formulário
**Solução**:
1. Verifique se `FRONTEND_URL=http://localhost:5500` no `.env` do backend
2. Reinicie o backend após alterar o `.env`
3. Certifique-se de acessar o frontend via `http://localhost:5500` (não `http://127.0.0.1:5500`)

---

## 📜 Licença

Este projeto é **código aberto** e está disponível para uso **pessoal e educacional**. Sinta-se livre para estudar, modificar e aprender com o código.

---

## 🙏 Agradecimentos

Este projeto foi desenvolvido como material educacional para demonstrar conceitos de desenvolvimento web full-stack.

---

**Desenvolvido com ❤️ para o Petshop Melhor Amigo**

🐶 🐱 **Cuidando do seu melhor amigo!** 🐾

