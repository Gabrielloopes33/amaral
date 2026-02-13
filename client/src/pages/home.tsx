import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Shield, 
  TrendingUp, 
  ChevronDown, 
  CheckCircle2, 
  Instagram, 
  Info,
  Target,
  Layout,
  RefreshCcw,
  Navigation,
  Play
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function NavLink({ href, children, testId }: { href: string; children: React.ReactNode; testId: string }) {
  return (
    <Link href={href}>
      <a data-testid={testId} className="transition-colors hover:text-white">
        {children}
      </a>
    </Link>
  );
}

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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Background Dinâmico */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-violet-600/10 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.12, 0.08] 
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-cyan-600/10 blur-[120px]" 
        />
      </div>

      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <Link href="/">
            <a data-testid="link-home-logo" className="group flex items-center gap-2">
              <span className="font-display text-lg font-bold tracking-tight">GABRIEL AMARAL</span>
              <span className="hidden text-sm text-white/40 md:inline font-mono">DIGITAL</span>
            </a>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-white/60 md:flex">
            <a href="#metodo" className="hover:text-white transition-colors">Método N.O.R.T.E</a>
            <a href="#entregaveis" className="hover:text-white transition-colors">Escopo</a>
            <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/diagnostico">
              <Button size="sm" className="rounded-full bg-white text-black hover:bg-white/90 px-5 font-bold">
                Agendar Diagnóstico
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* HERO */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.15 } } }}
            >
              <motion.div variants={fadeUp} className="mb-6">
                <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/70">
                  Posicionamento & Direção Estratégica
                </span>
              </motion.div>
              
              <motion.h1 variants={fadeUp} className="font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-7xl lg:text-8xl">
                Você é bom no que faz.<br />
                <span className="text-white/40">O mercado não percebe.</span>
              </motion.h1>
              
              <motion.p variants={fadeUp} className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
                Eu estruturo seu posicionamento e direção estratégica para transformar talento em reconhecimento e crescimento previsível no digital.
              </motion.p>
              
              <motion.div variants={fadeUp} className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link href="/diagnostico">
                  <Button size="lg" className="h-14 rounded-full bg-white px-8 text-base font-bold text-black hover:bg-white/90">
                    Quero sair do invisível
                  </Button>
                </Link>
                <a href="#metodo">
                  <Button size="lg" variant="ghost" className="h-14 rounded-full border border-white/10 px-8 text-base font-bold text-white/70 hover:bg-white/5">
                    Conheça o Método N.O.R.T.E
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* IDENTIFICAÇÃO (Section Darker) */}
        <section className="section-dark py-24 border-y border-white/5">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl leading-tight">
                  O crescimento constante <br />
                  <span className="text-violet-500">não é sorte.</span>
                </h2>
                <div className="mt-8 space-y-6">
                  {[
                    "Você posta e estuda todos os dias.",
                    "Você tenta anúncios, mas o retorno é incerto.",
                    "A audiência cresce, mas a percepção de valor não.",
                    "O seu talento é maior do que o seu faturamento."
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="flex-none rounded-full bg-violet-500/20 p-1">
                        <ArrowRight className="h-4 w-4 text-violet-500" />
                      </div>
                      <span className="text-lg text-white/70">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/20 blur-3xl rounded-full" />
                <p className="relative z-10 text-xl md:text-2xl leading-relaxed text-white/80 font-medium">
                  Se você sente que está fazendo muito e sendo pouco percebido, o problema não é o seu esforço. É a sua <span className="text-white">estratégia de posicionamento</span>.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-px flex-1 bg-white/10" />
                  <Sparkles className="h-5 w-5 text-violet-400" />
                  <div className="h-px flex-1 bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MÉTODO N.O.R.T.E */}
        <section id="metodo" className="py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="font-display text-4xl font-bold md:text-6xl mb-6">Método N.O.R.T.E</h2>
              <p className="text-white/50 text-lg max-w-xl mx-auto">Um caminho estruturado para quem busca autoridade e previsibilidade.</p>
            </div>
            
            <div className="grid gap-4 md:grid-cols-5">
              {[
                { l: "N", t: "Negócio", d: "Analise profunda de modelo, ticket e diferenciação.", icon: Target },
                { l: "O", t: "Organização", d: "Estrutura interna para suportar o crescimento.", icon: Layout },
                { l: "R", t: "Reposicionamento", d: "Ajuste de percepção e narrativa de autoridade.", icon: RefreshCcw },
                { l: "T", t: "Trajetória", d: "Planejamento de longo prazo e marcos de sucesso.", icon: Navigation },
                { l: "E", t: "Execução", d: "Ação guiada com foco no que traz resultado real.", icon: Play },
              ].map((item, i) => (
                <Card key={i} className="glass relative overflow-hidden p-6 hover:bg-white/[0.05] transition-all group">
                  <div className="text-6xl font-display font-bold text-white/10 absolute -right-2 -top-2 group-hover:text-white/20 transition-colors">
                    {item.l}
                  </div>
                  <div className="relative z-10">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                      <item.icon className="h-5 w-5 text-white/60" />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2">{item.t}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">{item.d}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* O QUE VOCÊ RECEBE & ONDE ATUO */}
        <section id="entregaveis" className="section-light py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h2 className="font-display text-4xl font-bold md:text-5xl mb-12 text-black">O escopo da entrega</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { t: "Diagnóstico estratégico", d: "Identificação de gargalos e oportunidades reais." },
                    { t: "Documento de posicionamento", d: "Sua nova narrativa e arquitetura de marca." },
                    { t: "Roadmap de 90 dias", d: "Plano de ação detalhado com prioridades claras." },
                    { t: "Estratégias adaptadas", d: "Soluções sob medida para o seu momento atual." },
                    { t: "Acompanhamento próximo", d: "Suporte direto na implementação das ações." },
                    { t: "Execução guiada", d: "Direção técnica para garantir a qualidade final." }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-2 p-6 rounded-2xl bg-black/5 border border-black/5">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-black/80 flex-none" />
                        <span className="font-bold text-black/90">{item.t}</span>
                      </div>
                      <p className="text-sm text-black/60 pl-8">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="rounded-3xl border border-black/10 p-8 md:p-10 bg-white shadow-sm">
                <h3 className="font-display text-2xl font-bold mb-6 text-black">Arquitetura de Serviços</h3>
                <p className="mb-8 text-black/60 leading-relaxed italic">
                  "Meu compromisso não é com uma lista de tarefas, mas com o que é vital para o seu negócio. Vou te oferecer o melhor para o seu momento."
                </p>
                <div className="space-y-6">
                  {[
                    { category: "Posicionamento & Marca", services: ["Diagnóstico e Reposicionamento", "Branding Estratégico", "Proposta de Valor"] },
                    { category: "Comunicação & Conteúdo", services: ["Estratégia de Conteúdo", "Copy Estratégica", "Auditoria"] },
                    { category: "Visibilidade & Aquisição", services: ["Crescimento Orgânico", "Funis de Leads", "Tráfego Pago"] },
                    { category: "Vendas & Conversão", services: ["Social Selling", "Processo Comercial", "Scripts"] },
                    { category: "Estratégia & Direção", services: ["Consultoria de Negócio", "Mentoria", "Advisory"] }
                  ].map((group, idx) => (
                    <div key={idx} className="border-b border-black/5 pb-4 last:border-0 last:pb-0">
                      <h4 className="text-xs font-black uppercase tracking-widest text-black/40 mb-3">{group.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {group.services.map(s => (
                          <span key={s} className="px-3 py-1 bg-black/5 rounded-lg text-xs font-bold text-black/70">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DIFERENCIAÇÃO */}
        <section className="py-24 border-y border-white/5 relative overflow-hidden">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-display text-3xl font-bold md:text-5xl mb-8 tracking-tight">Você não será apenas mais um cliente.</h2>
            <p className="text-xl text-white/60 leading-relaxed">
              Eu não vendo volume de posts ou fórmulas automáticas. Eu analiso, acompanho e penso estrategicamente no seu negócio junto com você. Minha entrega é baseada em <span className="text-white">inteligência e direção</span>.
            </p>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="py-24 md:py-32 bg-white/5">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-12 md:grid-cols-[0.8fr_1fr] md:items-center">
              <div className="aspect-square rounded-3xl bg-white/10 border border-white/10 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-display font-bold text-4xl uppercase tracking-widest -rotate-45">
                  Gabriel Amaral
                </div>
                {/* Placeholder para foto real */}
              </div>
              <div>
                <h2 className="font-display text-4xl font-bold mb-6">Sobre mim</h2>
                <div className="space-y-4 text-white/60 text-lg leading-relaxed">
                  <p>Minha missão é ajudar especialistas e marcas a saírem do ruído e ocuparem o lugar que merecem no digital através de estratégia real.</p>
                  <p>Acredito que o crescimento vem da combinação de um posicionamento forte com uma execução impecável. Sem atalhos, com método.</p>
                </div>
                <div className="mt-8">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                    <Instagram className="h-6 w-6" />
                    <span className="font-bold underline underline-offset-4 group-hover:decoration-violet-500 transition-colors">Acompanhe os conteúdos no IG</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="font-display text-3xl font-bold mb-12 text-center">Perguntas Frequentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {FAQ_ITEMS.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                  <AccordionTrigger className="text-left text-lg font-bold hover:text-white/80 transition-colors">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/50 text-base leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 md:py-48 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-violet-600/5 blur-3xl rounded-full scale-150" />
          <div className="mx-auto max-w-4xl px-4 relative z-10">
            <h2 className="font-display text-4xl font-bold md:text-7xl leading-tight tracking-tight">
              Se continuar como está,<br />
              <span className="text-white/40">você continuará invisível.</span>
            </h2>
            <p className="mt-8 text-xl text-white/60">Se estruturar agora, começa a mudar o jogo.</p>
            <div className="mt-12">
              <Link href="/diagnostico">
                <Button size="lg" className="h-16 rounded-full bg-white px-10 text-lg font-bold text-black hover:scale-105 transition-transform">
                  Quero sair do invisível
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/5 py-12 text-center">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-sm text-white/30">© {new Date().getFullYear()} Gabriel Amaral Digital — Todos os direitos reservados.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
