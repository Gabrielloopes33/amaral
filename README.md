# Gabriel Amaral Digital

<p align="center">
  <img src="client/public/opengraph.jpg" alt="Gabriel Amaral Digital" width="800"/>
</p>

<p align="center">
  <b>Estratégia de marca e crescimento digital para quem quer autoridade — sem fórmulas mágicas.</b>
</p>

<p align="center">
  <a href="#-sobre">Sobre</a> •
  <a href="#-stack">Stack</a> •
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-como-executar">Como Executar</a> •
  <a href="#-estrutura">Estrutura</a>
</p>

---

## 📋 Sobre

Site profissional de **Gabriel Amaral Digital** — consultoria especializada em posicionamento de marca e estratégia digital. O projeto apresenta o método **N.O.R.T.E**, um framework estruturado para transformar talento em reconhecimento e crescimento previsível no digital.

### O Método N.O.R.T.E

| Letra | Significado | Descrição |
|-------|-------------|-----------|
| **N** | Negócio | Análise profunda de modelo, ticket e diferenciação |
| **O** | Organização | Estrutura interna para suportar o crescimento |
| **R** | Reposicionamento | Ajuste de percepção e narrativa de autoridade |
| **T** | Trajetória | Planejamento de longo prazo e marcos de sucesso |
| **E** | Execução | Ação guiada com foco no que traz resultado real |

---

## 🚀 Stack

### Frontend
- **React 19** — Biblioteca UI moderna
- **TypeScript** — Tipagem estática
- **Tailwind CSS 4** — Estilização utilitária
- **Framer Motion** — Animações fluidas
- **Radix UI** — Componentes acessíveis
- **Wouter** — Roteamento leve

### Backend
- **Express.js** — Framework web
- **Drizzle ORM** — ORM type-safe
- **PostgreSQL** — Banco de dados relacional

### Ferramentas
- **Vite** — Build tool ultrarrápido
- **Zod** — Validação de schemas
- **React Hook Form** — Gerenciamento de formulários

---

## ✨ Funcionalidades

### 🏠 Landing Page
- Design moderno e dark theme
- Animações suaves com Framer Motion
- Efeitos visuais (blur, gradientes, grid)
- Totalmente responsivo

### 📊 Página de Diagnóstico
- Formulário estratégico com validação
- Integração com WhatsApp para agendamento
- Fluxo de captação de leads qualificados

### 📱 Página de Links
- Central de links profissional
- Redirecionamento para redes sociais

### 📞 Página de Contato
- Formulário de contato direto
- Informações de atendimento

---

## 🛠️ Como Executar

### Pré-requisitos
- Node.js 20+
- PostgreSQL 16+

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Gabrielloopes33/amaral.git
cd amaral

# Instale as dependências
npm install

# Configure as variáveis de ambiente
# Crie um arquivo .env na raiz:
DATABASE_URL=postgresql://user:password@localhost:5432/amaral
PORT=5000

# Execute as migrações do banco
npm run db:push
```

### Desenvolvimento

```bash
# Modo desenvolvimento (cliente)
npm run dev:client

# Modo desenvolvimento (full-stack)
npm run dev
```

### Produção

```bash
# Build da aplicação
npm run build

# Iniciar servidor de produção
npm start
```

A aplicação estará disponível em `http://localhost:5000`

---

## 📁 Estrutura

```
📦 amaral
├── 📂 client                 # Frontend React
│   ├── 📂 public            # Assets estáticos
│   ├── 📂 src
│   │   ├── 📂 components    # Componentes UI
│   │   ├── 📂 hooks         # Custom React hooks
│   │   ├── 📂 lib           # Utilitários
│   │   ├── 📂 pages         # Páginas da aplicação
│   │   ├── App.tsx          # Componente principal
│   │   └── main.tsx         # Entry point
│   └── index.html           # Template HTML
├── 📂 server                # Backend Express
│   ├── index.ts             # Entry point do servidor
│   ├── routes.ts            # Rotas da API
│   ├── storage.ts           # Camada de dados
│   └── vite.ts              # Configuração Vite SSR
├── 📂 shared                # Código compartilhado
│   └── schema.ts            # Schemas Drizzle
├── 📄 package.json          # Dependências
├── 📄 vite.config.ts        # Configuração Vite
└── 📄 drizzle.config.ts     # Configuração Drizzle
```

---

## 📝 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor em modo desenvolvimento |
| `npm run dev:client` | Inicia apenas o cliente Vite |
| `npm run build` | Compila aplicação para produção |
| `npm start` | Inicia servidor de produção |
| `npm run check` | Verifica tipos TypeScript |
| `npm run db:push` | Sincroniza schema com banco de dados |

---

## 🎨 Design System

O projeto utiliza um design system customizado baseado em:

- **Tipografia**: Space Grotesk (títulos), Inter (corpo), JetBrains Mono (código)
- **Cores**: Esquema dark com accent violet/cyan
- **Componentes**: Biblioteca Radix UI + estilos customizados
- **Animações**: Framer Motion para transições suaves

---

## 🌐 Deploy

O projeto pode ser facilmente deployado em plataformas como:

- **Railway**
- **Render**
- **Vercel**
- **Netlify**

Configure as variáveis de ambiente necessárias e utilize `npm run build` seguido de `npm start`.

---

## 📄 Licença

Este projeto é privado e de uso exclusivo de Gabriel Amaral Digital.

---

<p align="center">
  Desenvolvido com ❤️ por <strong>Gabriel Amaral</strong>
</p>
