import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  ArrowRight, 
  Sparkles, 
  Compass,
  Instagram, 
  FileText,
  Layers,
  CheckCircle2, 
  XCircle,
  Target,
  Layout,
  RefreshCcw,
  Navigation,
  Play,
  ChevronRight,
  MessageCircle,
  TrendingUp,
  AlertTriangle,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const FAQ_ITEMS = [
  {
    q: "Como funciona o acompanhamento?",
    a: "Trabalhamos com reuniões estratégicas quinzenais ou mensais (dependendo do pacote), além de um canal direto de comunicação para ajustes rápidos e dúvidas táticas."
  },
  {
    q: "Quanto tempo demora para ver resultados?",
    a: "O roadmap é de 90 dias. A primeira fase foca em clareza e estrutura, onde as mudanças de percepção começam em 30 dias. Resultados de crescimento previsível tendem a amadurecer ao longo do segundo mês."
  },
  {
    q: "Eu preciso de uma equipe para executar?",
    a: "O escopo é adaptado. Se você é um profissional solo, focamos em automações e estratégias enxutas. Se tem equipe, fornecemos a direção estratégica para eles executarem com precisão."
  },
  {
    q: "O diagnóstico é realmente gratuito?",
    a: "Sim. É o meu filtro para entender se consigo te ajudar e a sua oportunidade de ter um plano real em mãos antes de qualquer investimento."
  }
];

const METODO_ETAPAS = [
  { 
    letra: "N", 
    titulo: "Negócio", 
    descricao: "Diagnóstico profundo do modelo de negócio, ticket médio e diferenciais reais.",
    resultado: "Clareza sobre o que vender, para quem e por quanto.",
    icon: Target,
    cor: "from-violet-500/20 to-purple-500/20",
    iconeCor: "text-violet-400"
  },
  { 
    letra: "O", 
    titulo: "Organização", 
    descricao: "Estrutura interna e processos para suportar o crescimento sustentável.",
    resultado: "Operação enxuta que escala sem caos.",
    icon: Layout,
    cor: "from-purple-500/20 to-fuchsia-500/20",
    iconeCor: "text-purple-400"
  },
  { 
    letra: "R", 
    titulo: "Reposicionamento", 
    descricao: "Ajuste de percepção do mercado e construção de narrativa de autoridade.",
    resultado: "Você passa a ser percebido como referência, não mais uma opção.",
    icon: RefreshCcw,
    cor: "from-fuchsia-500/20 to-pink-500/20",
    iconeCor: "text-fuchsia-400"
  },
  { 
    letra: "T", 
    titulo: "Trajetória", 
    descricao: "Planejamento de longo prazo com marcos claros e métricas de sucesso.",
    resultado: "Rota definida do ponto A ao ponto B do seu crescimento.",
    icon: Navigation,
    cor: "from-pink-500/20 to-rose-500/20",
    iconeCor: "text-pink-400"
  },
  { 
    letra: "E", 
    titulo: "Execução", 
    descricao: "Ação guiada com foco absoluto no que gera resultado mensurável.",
    resultado: "Movimento estratégico consistente, sem desperdício de energia.",
    icon: Play,
    cor: "from-rose-500/20 to-orange-500/20",
    iconeCor: "text-rose-400"
  },
];

const ENTREGAS = [
  { titulo: "Diagnóstico estratégico", descricao: "Mapeamento completo de gargalos e oportunidades reais do seu negócio" },
  { titulo: "Documento de posicionamento", descricao: "Sua nova narrativa de autoridade e arquitetura de marca" },
  { titulo: "Roadmap de 90 dias", descricao: "Plano de ação detalhado com prioridades e marcos claros" },
  { titulo: "Estratégia sob medida", descricao: "Soluções adaptadas ao seu momento e capacidade de investimento" },
  { titulo: "Acompanhamento próximo", descricao: "Suporte direto durante toda a implementação das ações" },
  { titulo: "Execução guiada", descricao: "Direção técnica para garantir qualidade em cada entrega" },
];

const SERVICOS = [
  { category: "Posicionamento & Marca", services: ["Diagnóstico e Reposicionamento", "Branding Estratégico", "Proposta de Valor"] },
  { category: "Comunicação & Conteúdo", services: ["Estratégia de Conteúdo", "Copy Estratégica", "Auditoria"] },
  { category: "Visibilidade & Aquisição", services: ["Crescimento Orgânico", "Funis de Leads", "Tráfego Pago"] },
  { category: "Vendas & Conversão", services: ["Social Selling", "Processo Comercial", "Scripts"] },
  { category: "Estratégia & Direção", services: ["Consultoria de Negócio", "Mentoria", "Advisory"] }
];

const DOR_ITEMS = [
  "Crescimento instável e imprevisível",
  "Investimento em marketing sem retorno claro",
  "Baixa percepção de valor do seu trabalho",
  "Muito esforço, pouca estratégia",
  "Estratégia baseada em achismo, não em dados"
];

const TRANSFORMACAO_ITEMS = [
  "Crescimento consistente e previsível",
  "Cada real investido volta multiplicado",
  "Reconhecimento como referência no seu mercado",
  "Esforço direcionado, máximo de resultado",
  "Decisões baseadas em pesquisa e dados"
];

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500 origin-left z-[100]"
      style={{ scaleX }}
    />
  );
}

export default function HomePage() {
  const metodoRef = useRef<HTMLElement>(null);

  const scrollToMetodo = () => {
    metodoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#faf8f5] font-sans overflow-x-hidden selection:bg-violet-500/30">
      <ScrollProgress />
      
      {/* Background Dinâmico Global */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.12, 0.08] 
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-violet-600/10 blur-[150px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.06, 0.1, 0.06] 
          }}
          transition={{ duration: 18, repeat: Infinity, delay: 3 }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-cyan-600/8 blur-[150px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.05, 0.08, 0.05] 
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 6 }}
          className="absolute top-[40%] left-[30%] w-[40%] h-[40%] rounded-full bg-purple-600/8 blur-[120px]" 
        />
      </div>

      {/* HEADER / MENU SUPERIOR */}
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <Link href="/">
            <a className="group flex items-center gap-2">
              <span className="font-display text-lg font-bold tracking-tight text-[#faf8f5]">GABRIEL AMARAL</span>
              <span className="hidden text-sm text-white/40 md:inline font-mono">DIGITAL</span>
            </a>
          </Link>

          <nav className="hidden items-center gap-1 text-sm font-medium md:flex">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-4 py-2 text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/5"
            >
              Home
            </a>
            <a 
              href="#metodo" 
              className="flex items-center gap-2 px-4 py-2 text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/5"
            >
              <Compass className="h-4 w-4" />
              Método
            </a>
            <a 
              href="#servicos" 
              className="flex items-center gap-2 px-4 py-2 text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/5"
            >
              <Layers className="h-4 w-4" />
              Serviços Extras
            </a>
            <a 
              href="#documentos" 
              className="flex items-center gap-2 px-4 py-2 text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/5"
            >
              <FileText className="h-4 w-4" />
              Documentos
            </a>
            <a 
              href="https://www.instagram.com/gabrielamaral.digital" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/5"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a 
              href="https://wa.me/554898026102" 
              target="_blank" 
              rel="noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <Link href="/diagnostico">
              <Button size="sm" className="rounded-full bg-[#faf8f5] text-black hover:bg-white px-5 font-bold">
                Agendar Diagnóstico
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* HERO - Seção Escura */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <motion.div
              initial="hidden"
              animate="show"
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="mb-8">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold uppercase tracking-widest text-white/70">
                  <Sparkles className="h-3.5 w-3.5" />
                  Posicionamento & Direção Estratégica
                </span>
              </motion.div>
              
              <motion.h1 
                variants={fadeUp} 
                className="font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl text-[#faf8f5]"
              >
                Clareza e direcionamento
                <br />
                <span className="text-white/50">para empresários que querem</span>
                <br />
                <span className="text-gradient">crescer com consistência</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeUp} 
                className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl"
              >
                Pare de agir no improviso e construa uma estrutura digital que te tira do invisível e te posiciona como referência no seu mercado.
              </motion.p>
              
              <motion.div variants={fadeUp} className="mt-12">
                <Link href="/diagnostico">
                  <Button size="lg" className="h-16 rounded-full bg-[#faf8f5] px-10 text-base font-bold text-black hover:bg-white hover:scale-105 transition-all shadow-lg shadow-white/10">
                    Quero sair do invisível
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>

              {/* Indicador de scroll */}
              <motion.div 
                variants={fadeUp}
                className="mt-20 flex flex-col items-center gap-2"
              >
                <span className="text-xs uppercase tracking-widest text-white/30">Role para explorar</span>
                <motion.div 
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
                >
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SEÇÃO DOR → TRANSFORMAÇÃO - Seção Off-white/Bege */}
        <section className="relative py-24 md:py-32 bg-[#f5f2ed] text-[#1a1a1a] overflow-hidden">
          {/* Textura sutil de fundo */}
          <div className="absolute inset-0 bg-grid-light opacity-50" />
          
          {/* Elementos decorativos */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-violet-500/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-500/5 to-transparent rounded-full blur-3xl" />
          
          <div className="relative mx-auto max-w-7xl px-4">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid gap-8 lg:grid-cols-2 lg:gap-0"
            >
              {/* Lado Esquerdo - DOR */}
              <motion.div 
                variants={slideInLeft}
                className="relative p-8 md:p-12 lg:pr-16"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-red-600">O Problema</span>
                </div>
                
                <h2 className="font-display text-3xl font-bold md:text-4xl leading-tight text-[#1a1a1a] mb-6">
                  Se você faz muito e
                  <span className="text-gradient-danger"> cresce pouco</span>,
                  <br />o problema não é esforço
                </h2>
                
                <p className="text-lg text-[#1a1a1a]/70 mb-8">
                  É <span className="font-bold text-[#1a1a1a]">falta de estrutura estratégica</span>. Você está trabalhando duro, mas sem o direcionamento certo.
                </p>

                <div className="space-y-4">
                  {DOR_ITEMS.map((item, i) => (
                    <motion.div 
                      key={i}
                      variants={fadeUp}
                      className="flex items-start gap-4 p-4 rounded-xl bg-red-50/50 border border-red-100"
                    >
                      <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-[#1a1a1a]/80">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Elemento Central - Transição Visual */}
              <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-xl shadow-violet-500/20">
                    <Compass className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 blur-xl opacity-50" />
                </motion.div>
              </div>

              {/* Lado Direito - TRANSFORMAÇÃO */}
              <motion.div 
                variants={slideInRight}
                className="relative p-8 md:p-12 lg:pl-16"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                    <TrendingUp className="h-5 w-5 text-emerald-600" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">A Transformação</span>
                </div>
                
                <h2 className="font-display text-3xl font-bold md:text-4xl leading-tight text-[#1a1a1a] mb-6">
                  Crescimento consistente é
                  <span className="text-gradient-success"> consequência</span>
                  <br />de clareza + execução
                </h2>
                
                <p className="text-lg text-[#1a1a1a]/70 mb-8">
                  Com o método certo, você transforma esforço em <span className="font-bold text-[#1a1a1a]">resultado previsível</span> e escalável.
                </p>

                <div className="space-y-4">
                  {TRANSFORMACAO_ITEMS.map((item, i) => (
                    <motion.div 
                      key={i}
                      variants={fadeUp}
                      className="flex items-start gap-4 p-4 rounded-xl bg-emerald-50/50 border border-emerald-100"
                    >
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-[#1a1a1a]/80">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div variants={fadeUp} className="mt-8">
                  <button 
                    onClick={scrollToMetodo}
                    className="inline-flex items-center gap-2 text-violet-600 font-bold hover:text-violet-700 transition-colors group"
                  >
                    Conheça o método
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SEÇÃO MÉTODO N.O.R.T.E - Seção Escura */}
        <section ref={metodoRef} id="metodo" className="relative py-24 md:py-32 overflow-hidden">
          {/* Background decorativo */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent" />
          
          <div className="relative mx-auto max-w-7xl px-4">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-16 md:mb-24"
            >
              <motion.div variants={fadeUp} className="mb-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/70">
                  <Compass className="h-3.5 w-3.5" />
                  O Método
                </span>
              </motion.div>
              
              <motion.h2 
                variants={fadeUp} 
                className="font-display text-3xl font-bold md:text-5xl lg:text-6xl mb-6 text-[#faf8f5]"
              >
                Do diagnóstico à execução:
                <br />
                <span className="text-white/50">um método para sair da invisibilidade</span>
              </motion.h2>
              
              <motion.p variants={fadeUp} className="text-white/50 text-lg max-w-2xl mx-auto">
                Cada etapa é uma peça do quebra-cabeça do seu crescimento. Não pule etapas — elas foram desenhadas na ordem certa.
              </motion.p>
            </motion.div>

            {/* Timeline do Método */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="relative"
            >
              {/* Linha conectora */}
              <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              <div className="grid gap-6 md:grid-cols-5">
                {METODO_ETAPAS.map((etapa, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="relative group"
                  >
                    {/* Card */}
                    <div className="relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1 h-full">
                      {/* Número/Letra grande no fundo */}
                      <div className="absolute -right-2 -top-2 text-7xl font-display font-bold text-white/5 group-hover:text-white/10 transition-colors select-none">
                        {etapa.letra}
                      </div>
                      
                      {/* Ícone */}
                      <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${etapa.cor} border border-white/10`}>
                        <etapa.icon className={`h-6 w-6 ${etapa.iconeCor}`} />
                      </div>
                      
                      {/* Título */}
                      <h3 className="font-display text-xl font-bold mb-2 text-[#faf8f5]">
                        {etapa.letra} — {etapa.titulo}
                      </h3>
                      
                      {/* Descrição */}
                      <p className="text-sm text-white/50 mb-4 leading-relaxed">
                        {etapa.descricao}
                      </p>
                      
                      {/* Resultado esperado */}
                      <div className="pt-4 border-t border-white/10">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">Resultado</span>
                        <p className="text-sm text-white/70">{etapa.resultado}</p>
                      </div>
                    </div>
                    
                    {/* Seta conectora (exceto no último) */}
                    {i < METODO_ETAPAS.length - 1 && (
                      <div className="hidden lg:flex absolute -right-3 top-24 z-10 items-center justify-center w-6 h-6 rounded-full bg-white/10 border border-white/20">
                        <ChevronRight className="h-3 w-3 text-white/60" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* SEÇÃO O QUE VOCÊ RECEBE - Seção Off-white */}
        <section id="entregaveis" className="relative py-24 md:py-32 bg-[#f5f2ed] text-[#1a1a1a] overflow-hidden">
          <div className="absolute inset-0 bg-grid-light opacity-30" />
          
          <div className="relative mx-auto max-w-6xl px-4">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="text-center mb-16">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#1a1a1a]/10 bg-[#1a1a1a]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#1a1a1a]/60 mb-6">
                  <Award className="h-3.5 w-3.5" />
                  Entregas
                </span>
                
                <h2 className="font-display text-3xl font-bold md:text-5xl text-[#1a1a1a] mb-4">
                  O que você vai receber ao aplicar o método
                </h2>
                <p className="text-[#1a1a1a]/60 text-lg max-w-2xl mx-auto">
                  Não é teoria. São entregas concretas que vão estruturar seu crescimento.
                </p>
              </motion.div>

              {/* Checklist Visual Grande */}
              <motion.div 
                variants={staggerContainer}
                className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
              >
                {ENTREGAS.map((entrega, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="group p-6 rounded-2xl bg-white border border-[#1a1a1a]/5 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 flex-shrink-0 group-hover:bg-violet-500 group-hover:text-white transition-colors">
                        <CheckCircle2 className="h-5 w-5 text-violet-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1a1a1a] mb-1">{entrega.titulo}</h3>
                        <p className="text-sm text-[#1a1a1a]/60">{entrega.descricao}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SEÇÃO ARQUITETURA DE SERVIÇOS - Seção Escura */}
        <section id="servicos" className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent" />
          
          <div className="relative mx-auto max-w-6xl px-4">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="text-center mb-16">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/60 mb-6">
                  <Layers className="h-3.5 w-3.5" />
                  Serviços Extras
                </span>
                
                <h2 className="font-display text-3xl font-bold md:text-5xl text-[#faf8f5] mb-4">
                  Arquitetura de Serviços
                </h2>
                <p className="text-white/50 text-lg max-w-2xl mx-auto">
                  Além do método, ofereço serviços especializados que podem ser combinados conforme sua necessidade.
                </p>
              </motion.div>

              <motion.div 
                variants={staggerContainer}
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {SERVICOS.map((grupo, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all"
                  >
                    <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-4">{grupo.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {grupo.services.map((servico, j) => (
                        <span 
                          key={j} 
                          className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-medium text-white/70 hover:text-white transition-colors cursor-default"
                        >
                          {servico}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SEÇÃO DOCUMENTOS - Seção Off-white */}
        <section id="documentos" className="relative py-24 md:py-32 bg-[#f5f2ed] text-[#1a1a1a] overflow-hidden">
          <div className="absolute inset-0 bg-grid-light opacity-30" />
          
          <div className="relative mx-auto max-w-4xl px-4">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center"
            >
              <motion.div variants={fadeUp} className="mb-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#1a1a1a]/10 bg-[#1a1a1a]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#1a1a1a]/60">
                  <FileText className="h-3.5 w-3.5" />
                  Downloads Gratuitos
                </span>
              </motion.div>
              
              <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold md:text-4xl text-[#1a1a1a] mb-4">
                Documentos e Recursos
              </motion.h2>
              
              <motion.p variants={fadeUp} className="text-[#1a1a1a]/60 text-lg mb-12 max-w-2xl mx-auto">
                Materiais gratuitos para começar a estruturar seu posicionamento hoje mesmo.
              </motion.p>

              <motion.div variants={fadeUp} className="grid gap-4 md:grid-cols-2">
                <div className="p-6 rounded-2xl bg-white border border-[#1a1a1a]/5 hover:border-violet-300 transition-colors group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 group-hover:bg-violet-500 transition-colors">
                      <FileText className="h-6 w-6 text-violet-600 group-hover:text-white transition-colors" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-[#1a1a1a]">Guia de Posicionamento</h3>
                      <p className="text-sm text-[#1a1a1a]/60">PDF • Download gratuito</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-[#1a1a1a]/30 ml-auto group-hover:text-violet-500 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-[#1a1a1a]/5 hover:border-violet-300 transition-colors group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 group-hover:bg-violet-500 transition-colors">
                      <FileText className="h-6 w-6 text-violet-600 group-hover:text-white transition-colors" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-[#1a1a1a]">Checklist de Estratégia</h3>
                      <p className="text-sm text-[#1a1a1a]/60">PDF • Download gratuito</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-[#1a1a1a]/30 ml-auto group-hover:text-violet-500 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SEÇÃO SOBRE - Seção Escura */}
        <section id="sobre" className="relative py-24 md:py-32 overflow-hidden">
          <div className="relative mx-auto max-w-6xl px-4">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid gap-12 lg:grid-cols-2 lg:items-center"
            >
              {/* Imagem */}
              <motion.div variants={fadeUp} className="relative">
                <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 overflow-hidden relative">
                  <img
                    src="/amaral1.jpeg"
                    alt="Gabriel Amaral"
                    className="h-full w-full object-cover object-[20%_center]"
                    loading="lazy"
                  />
                </div>
                {/* Elemento decorativo */}
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-full blur-3xl" />
              </motion.div>

              {/* Conteúdo */}
              <motion.div variants={staggerContainer}>
                <motion.div variants={fadeUp} className="mb-6">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/60">
                    Sobre
                  </span>
                </motion.div>

                <motion.h2 
                  variants={fadeUp} 
                  className="font-display text-3xl font-bold md:text-5xl text-[#faf8f5] mb-6"
                >
                  Você não será
                  <br />
                  <span className="text-white/50">apenas mais um cliente</span>
                </motion.h2>

                <motion.div variants={fadeUp} className="space-y-4 text-white/60 text-lg leading-relaxed mb-8">
                  <p>
                    Meu trabalho é baseado em <span className="text-white font-medium">método</span>, não em achismos. Cada estratégia é construída com base em pesquisa, dados e experiência real de mercado.
                  </p>
                  <p>
                    Acredito em <span className="text-white font-medium">clareza</span> acima de tudo. Você sempre vai saber exatamente onde está, para onde está indo e por quê.
                  </p>
                  <p>
                    E em <span className="text-white font-medium">personalização</span> total. Não existe fórmula mágica — existe o método certo aplicado ao seu contexto específico.
                  </p>
                </motion.div>

                <motion.div variants={fadeUp} className="pt-6 border-t border-white/10">
                  <h3 className="font-display text-xl font-bold text-[#faf8f5] mb-3">Minha história</h3>
                  <p className="text-white/50 leading-relaxed mb-6">
                    Especialista em posicionamento digital e estratégia de crescimento. 
                    Ajudo empresários e especialistas a saírem do ruído e ocuparem o lugar 
                    que merecem no mercado através de estrutura, não sorte.
                  </p>
                  <a 
                    href="https://www.instagram.com/gabrielamaral.digital" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                  >
                    <Instagram className="h-6 w-6" />
                    <span className="font-bold underline underline-offset-4 group-hover:decoration-violet-500 transition-colors">
                      Me acompanhe no Instagram
                    </span>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA FINAL - Seção com destaque */}
        <section className="relative py-24 md:py-40 text-center overflow-hidden">
          {/* Background de destaque */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent" />
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/10 rounded-full blur-[150px]" />
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative mx-auto max-w-4xl px-4"
          >
            <motion.h2 
              variants={fadeUp}
              className="font-display text-3xl font-bold md:text-5xl lg:text-6xl leading-tight tracking-tight text-[#faf8f5] mb-6"
            >
              Crescimento consistente
              <br />
              <span className="text-white/50">começa com uma</span>
              <br />
              <span className="text-gradient">decisão estratégica</span>
            </motion.h2>
            
            <motion.p variants={fadeUp} className="mt-6 text-xl text-white/50 max-w-2xl mx-auto">
              A estrutura que você precisa já existe. Agora é só aplicar ao seu negócio.
            </motion.p>
            
            <motion.div variants={fadeUp} className="mt-12">
              <Link href="/diagnostico">
                <Button size="lg" className="h-16 rounded-full bg-[#faf8f5] px-10 text-lg font-bold text-black hover:bg-white hover:scale-105 transition-all shadow-xl shadow-white/10">
                  Quero estruturar meu crescimento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-6 text-sm text-white/30">
              Diagnóstico inicial 100% gratuito. Sem compromisso.
            </motion.p>
          </motion.div>
        </section>

        {/* FAQ - Seção Off-white */}
        <section className="relative py-24 md:py-32 bg-[#f5f2ed] text-[#1a1a1a]">
          <div className="absolute inset-0 bg-grid-light opacity-30" />
          
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="relative mx-auto max-w-3xl px-4"
          >
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold mb-12 text-center text-[#1a1a1a]">
              Perguntas Frequentes
            </motion.h2>
            
            <motion.div variants={fadeUp}>
              <Accordion type="single" collapsible className="w-full">
                {FAQ_ITEMS.map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-[#1a1a1a]/10">
                    <AccordionTrigger className="text-left text-lg font-bold hover:text-violet-600 transition-colors py-6">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#1a1a1a]/60 text-base leading-relaxed pb-6">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/5 py-12 bg-[#0a0a0a]">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2">
                <span className="font-display text-lg font-bold tracking-tight text-[#faf8f5]">GABRIEL AMARAL</span>
                <span className="text-sm text-white/40 font-mono">DIGITAL</span>
              </div>
              
              <div className="flex items-center gap-6">
                <a href="https://www.instagram.com/gabrielamaral.digital" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://wa.me/554898026102" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
              
              <p className="text-sm text-white/30">
                © {new Date().getFullYear()} Gabriel Amaral Digital — Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
