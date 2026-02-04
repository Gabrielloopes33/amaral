# Planejamento Estrutural - Gabriel Amaral Digital

> Estrutura de páginas Next.js para crescimento de marca e posicionamento digital

---

## 1. ARQUITETURA DE PÁGINAS

```
├── / (Home)
├── /diagnostico (Agende Diagnóstico)
├── /contato (Fale Comigo)
└── /links (Centralizador UTM)
```

---

## 2. STACK TECNOLÓGICO RECOMENDADO

### Framework Principal
- **Next.js 14+** (App Router) - SSR/SSG, performance otimizada
- **TypeScript** - Tipagem segura

### Estilização (Dark Mode Premium)
- **Tailwind CSS** - Utility-first, dark mode nativo
- **shadcn/ui** - Componentes acessíveis e customizáveis
- **Framer Motion** - Animações fluidas e interações

### Ícones
- **Lucide React** - Ícones minimalistas
- **Phosphor Icons** - Alternativa estilosa

### Formulários
- **React Hook Form** + **Zod** - Validação type-safe

### Analytics
- **Vercel Analytics** - Performance nativa
- **UTM tracking** customizado no centralizador

---

## 3. ESTÉTICA VISUAL (Dark Premium)

### Paleta de Cores

```css
/* Background */
--bg-primary: #0a0a0b      /* Preto absoluto */
--bg-secondary: #141416    /* Cinza escuro */
--bg-tertiary: #1c1c1f     /* Destaque sutil */

/* Texto */
--text-primary: #fafafa    /* Branco puro */
--text-secondary: #a1a1aa  /* Cinza médio */
--text-muted: #71717a      /* Cinza suave */

/* Destaques (Acentos) */
--accent-primary: #8b5cf6  /* Roxo premium */
--accent-secondary: #06b6d4 /* Ciano elétrico */
--accent-gradient: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)
```

### Tipografia
- **Títulos:** Inter ou Space Grotesk (moderna, geométrica)
- **Corpo:** Inter (legibilidade excelente)
- **Destaques:** JetBrains Mono (toque técnico/editorial)

### Elementos Visuais
- Glassmorphism sutil (backdrop-blur)
- Gradientes suaves nos CTAs
- Micro-interações em hover
- Sombras neon sutis (box-shadow com acentos)
- Bordas finas com opacidade baixa

---

## 4. ESTRUTURA DAS PÁGINAS

### A) HOME - "A Autoridade Silenciosa"

#### Seções:

1. **Hero Section**
   - Headline impactante sobre crescimento
   - Subheadline sobre autoridade digital
   - CTA duplo: "Quero crescer" / "Ver cases"
   - Background: Gradientes animados ou partículas sutis

2. **Problema → Solução**
   - "Marcas invisíveis não vendem"
   - Transformação visual (antes/depois conceitual)
   - Posicionamento único

3. **Serviços (sem mostrar rosto)**
   - Cards com ícones e gradientes
   - Estratégia de marca
   - Crescimento digital
   - Posicionamento premium

4. **Prova Social (Autoridade)**
   - Números impactantes
   - Depoimentos textuais
   - Marcas/clientes (logos)

5. **CTA Final**
   - "Comece sua transformação"
   - Botão para diagnóstico

---

### B) DIAGNÓSTICO GRÁTIS

**Objetivo:** Captar lead qualificado + disparar WhatsApp

#### Campos do Formulário:
- Nome
- Empresa/marca
- Instagram/site atual
- Principal desafio (select: visibilidade, conversão, posicionamento, crescimento)
- O que já tentou (textarea)
- Telefone/WhatsApp

#### Fluxo:
1. Usuário preenche
2. Dados salvos (Supabase/Firebase ou email)
3. Redirecionamento WhatsApp com mensagem pré-preenchida
4. Agradecimento + próximos passos

#### Integração WhatsApp:
```
https://wa.me/55[SEUNUMERO]?text=Olá!%20Sou%20[NOME]%20da%20[EMPRESA].%20Quero%20agendar%20meu%20diagnóstico%20gratuito!
```

---

### C) FALE COMIGO (Urgência)

#### Design:
- Página minimalista
- Botão principal gigante com efeito pulse
- Múltiplos canais (WhatsApp prioritário)
- Resposta em até X horas (gerar urgência)

#### Elementos:
- WhatsApp (principal)
- Email corporativo
- Formulário rápido (alternativa)

---

### D) CENTRALIZADOR DE LINKS (Linktree Pro)

#### Funcionalidades:
- URLs com UTM tracking automático
- Analytics de cliques
- Links categorizados:
  - Conteúdo (YouTube, Blog, Podcast)
  - Redes sociais
  - Contato/Diagnóstico
  - Recursos gratuitos

#### UTM Tracking:
```
?utm_source=bio&utm_medium=instagram&utm_campaign=[nome_da_campanha]
```

---

## 5. COPY ESTRATÉGICA

### Home - Headlines Sugeridas:

**Opção 1 (Desejo):**
> "Sua marca está invisível enquanto concorrentes dominam o digital."

**Opção 2 (Autoridade):**
> "Estratégias que transformam seguidores em clientes. Sem fórmulas mágicas. Apenas método."

**Opção 3 (Curiosidade):**
> "O que separa marcas que crescem de marcas que sobrevivem? Posicionamento."

### Subheadlines:
- "Estratégia de marca e crescimento digital para quem quer mais do que likes"
- "Diagnóstico gratuito. Resultados reais."

---

### Copy da Página de Diagnóstico:

> **"Vamos descobrir o que está travando o crescimento da sua marca"**

> Em 30 minutos, você terá clareza sobre:
> - Por que sua marca não está convertendo
> - Os 3 gargalos que impedem seu crescimento
> - Um roadmap personalizado para os próximos 90 dias

> **Gratuito. Sem compromisso. Só estratégia.**

---

### CTAs (Call-to-Action):

**Primários:**
- "Quero meu diagnóstico gratuito"
- "Falar com especialista"
- "Descobrir meu potencial"

**Secundários:**
- "Ver estratégias"
- "Entender o método"
- "Explorar recursos"

---

## 6. COMPONENTES REUTILIZÁVEIS (shadcn/ui)

### Instalação:
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card input textarea select dialog badge
```

### Componentes Custom:
- `GradientButton` - CTA com gradiente animado
- `GlassCard` - Card com efeito glassmorphism
- `AnimatedCounter` - Números animados (prova social)
- `MagneticButton` - Efeito magnético no hover

---

## 7. ESTRUTURA DE PASTAS

```
app/
├── (routes)/
│   ├── page.tsx              # Home
│   ├── diagnostico/
│   │   └── page.tsx
│   ├── contato/
│   │   └── page.tsx
│   └── links/
│       └── page.tsx
├── components/
│   ├── ui/                   # shadcn
│   ├── sections/             # Seções da home
│   └── animations/           # Framer Motion
├── hooks/
├── lib/
│   └── utils.ts
└── styles/
    └── globals.css
```

---

## 8. ANIMAÇÕES E INTERAÇÕES (Framer Motion)

- **Scroll reveal:** Elementos surgem suavemente
- **Hover effects:** Botões com glow, cards elevando
- **Stagger:** Sequência de elementos aparecendo
- **Micro-interactions:** Feedback visual em todos os cliques

---

## 9. SEO E PERFORMANCE

- Meta tags otimizadas para "consultoria digital", "crescimento de marca"
- Open Graph para compartilhamento
- Core Web Vitals (Next.js otimizado)
- Sitemap.xml
- Schema markup (Organization, Service)

---

## 10. PRÓXIMOS PASSOS SUGERIDOS

1. **Setup inicial:** `npx create-next-app@latest`
2. **Instalar dependências:** shadcn, framer-motion, lucide-react
3. **Configurar tema dark** no Tailwind
4. **Desenvolver componentes base**
5. **Criar páginas uma a uma**
6. **Testar integrações (formulários, WhatsApp)**
7. **Deploy na Vercel**

---

## NOTAS

- Projeto: Gabriel Amaral Digital
- Conceito: Dark mode, autoridade, sem mostrar o rosto
- Público: Marcas que querem crescimento digital e posicionamento
- Tom de voz: Autoridade, desejo, exclusividade
