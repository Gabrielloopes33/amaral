import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

function Metric({ value, label, testId }: { value: string; label: string; testId: string }) {
  return (
    <div className="flex flex-col gap-1" data-testid={testId}>
      <div className="font-display text-2xl tracking-tight text-white md:text-3xl">{value}</div>
      <div className="text-sm text-white/60">{label}</div>
    </div>
  );
}

function Pill({ children, testId }: { children: React.ReactNode; testId: string }) {
  return (
    <span
      data-testid={testId}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-white/70"
    >
      <Sparkles className="h-3.5 w-3.5 text-cyan-300/90" strokeWidth={2} />
      {children}
    </span>
  );
}

function NavLink({ href, children, testId }: { href: string; children: React.ReactNode; testId: string }) {
  return (
    <Link href={href}>
      <a data-testid={testId} className="transition-colors hover:text-white">
        {children}
      </a>
    </Link>
  );
}

function CtaLink({ href, children, testId }: { href: string; children: React.ReactNode; testId: string }) {
  return (
    <Link href={href}>
      <a data-testid={testId}>{children}</a>
    </Link>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <Link href="/">
            <a data-testid="link-home-logo" className="group inline-flex items-center gap-2">
              <span className="relative grid h-8 w-8 place-items-center rounded-xl border border-white/10 bg-white/[0.06]">
                <span className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.35),transparent_60%)]" />
                <span className="relative font-display text-sm tracking-tight">GA</span>
              </span>
              <span className="font-display text-sm tracking-tight text-white/90">Gabriel Amaral</span>
              <span className="hidden text-sm text-white/45 md:inline">Digital</span>
            </a>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-white/65 md:flex" aria-label="Navegação principal">
            <NavLink href="/diagnostico" testId="link-nav-diagnostico">
              Diagnóstico
            </NavLink>
            <NavLink href="/contato" testId="link-nav-contato">
              Contato
            </NavLink>
            <NavLink href="/links" testId="link-nav-links">
              Links
            </NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <CtaLink href="/diagnostico" testId="link-header-cta">
              <Button
                data-testid="button-header-diagnostico"
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.06] px-4 text-white shadow-[0_18px_60px_rgba(139,92,246,0.14)] hover:bg-white/[0.10]"
              >
                <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.35),transparent_55%),radial-gradient(circle_at_bottom,rgba(6,182,212,0.18),transparent_55%)]" />
                <span className="relative inline-flex items-center gap-2">
                  Quero crescer
                  <ArrowRight className="h-4 w-4 opacity-80 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Button>
            </CtaLink>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute inset-0 soft-noise" />
          <div className="pointer-events-none absolute -top-44 left-1/2 h-[560px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.35),transparent_60%)] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-52 left-1/4 h-[520px] w-[720px] rounded-full bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.22),transparent_62%)] blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
              }}
              className="grid items-start gap-10 md:grid-cols-[1.15fr_0.85fr]"
            >
              <motion.div variants={fadeUp} className="flex flex-col gap-6">
                <Pill testId="pill-hero">Autoridade silenciosa. Crescimento mensurável.</Pill>

                <h1 data-testid="text-hero-title" className="font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
                  Sua marca está <span className="text-gradient">invisível</span> enquanto concorrentes dominam o digital.
                </h1>

                <p data-testid="text-hero-subtitle" className="max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
                  Estratégia de marca e crescimento digital para quem quer mais do que likes. Sem fórmulas mágicas. Apenas método,
                  clareza e execução.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <CtaLink href="/diagnostico" testId="link-hero-cta-primary">
                    <Button
                      data-testid="button-hero-diagnostico"
                      className="group relative w-full overflow-hidden rounded-2xl bg-white text-black shadow-[0_26px_90px_rgba(139,92,246,0.18)] hover:bg-white sm:w-auto"
                      size="lg"
                    >
                      <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[linear-gradient(135deg,rgba(139,92,246,0.22),rgba(6,182,212,0.18))]" />
                      <span className="relative inline-flex items-center gap-2">
                        Quero meu diagnóstico gratuito
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                    </Button>
                  </CtaLink>

                  <CtaLink href="/links" testId="link-hero-cta-secondary">
                    <Button
                      data-testid="button-hero-ver-cases"
                      variant="outline"
                      className="w-full rounded-2xl border-white/15 bg-transparent text-white/85 hover:bg-white/[0.06] sm:w-auto"
                      size="lg"
                    >
                      Ver estratégias
                    </Button>
                  </CtaLink>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <Metric testId="metric-1" value="90 dias" label="roadmap claro" />
                  <Metric testId="metric-2" value="30 min" label="diagnóstico direto" />
                  <Metric testId="metric-3" value="método" label="sem achismo" />
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="md:pt-4">
                <Card className="glass neon-ring relative overflow-hidden rounded-3xl p-6">
                  <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.35),transparent_60%)] blur-2xl" />
                  <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.24),transparent_62%)] blur-2xl" />

                  <div className="relative flex flex-col gap-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-medium text-white/55" data-testid="text-hero-card-kicker">
                          O que você recebe
                        </div>
                        <div className="font-display text-lg tracking-tight" data-testid="text-hero-card-title">
                          Clareza + direção
                        </div>
                      </div>
                      <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.06]">
                        <Zap className="h-5 w-5 text-cyan-300/90" strokeWidth={2} />
                      </div>
                    </div>

                    <div className="grid gap-3">
                      <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                        <Shield className="mt-0.5 h-4 w-4 text-violet-300" strokeWidth={2} />
                        <div>
                          <div className="text-sm font-medium text-white" data-testid="text-hero-card-item-1-title">
                            Diagnóstico sem enrolação
                          </div>
                          <div className="text-sm text-white/65" data-testid="text-hero-card-item-1-desc">
                            Identifique os 3 gargalos que travam sua conversão e posicionamento.
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                        <TrendingUp className="mt-0.5 h-4 w-4 text-cyan-300" strokeWidth={2} />
                        <div>
                          <div className="text-sm font-medium text-white" data-testid="text-hero-card-item-2-title">
                            Roadmap de 90 dias
                          </div>
                          <div className="text-sm text-white/65" data-testid="text-hero-card-item-2-desc">
                            Prioridades, ações e checkpoints para crescimento consistente.
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-4">
                      <div>
                        <div className="text-xs text-white/55" data-testid="text-hero-card-footnote">
                          Sem compromisso — só estratégia.
                        </div>
                        <div className="text-sm font-medium text-white/90">Vagas limitadas na semana</div>
                      </div>
                      <CtaLink href="/diagnostico" testId="link-hero-card-cta">
                        <Button data-testid="button-hero-card-cta" className="rounded-xl bg-white text-black hover:bg-white">
                          Agendar
                        </Button>
                      </CtaLink>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="relative mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="grid gap-10"
          >
            <motion.div variants={fadeUp} className="grid gap-4 md:grid-cols-2 md:items-end">
              <div>
                <div data-testid="text-problem-kicker" className="text-xs font-medium text-white/55">
                  Problema → Solução
                </div>
                <h2 data-testid="text-problem-title" className="font-display text-2xl tracking-tight md:text-4xl">
                  Marcas invisíveis não vendem.
                </h2>
              </div>
              <p data-testid="text-problem-desc" className="text-white/70">
                O jogo não é postar mais — é ser percebido como escolha óbvia. Você precisa de posicionamento, narrativa e um sistema
                de crescimento.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Estratégia de marca",
                  desc: "Arquitetura de posicionamento, promessa e diferenciação para autoridade premium.",
                  icon: <Sparkles className="h-4 w-4 text-violet-300" strokeWidth={2} />,
                  testId: "card-service-1",
                },
                {
                  title: "Crescimento digital",
                  desc: "Sistema de aquisição e conteúdo que converte — com métricas e iteração.",
                  icon: <Zap className="h-4 w-4 text-cyan-300" strokeWidth={2} />,
                  testId: "card-service-2",
                },
                {
                  title: "Posicionamento premium",
                  desc: "Oferta, percepção e comunicação para subir ticket sem perder demanda.",
                  icon: <Shield className="h-4 w-4 text-white/85" strokeWidth={2} />,
                  testId: "card-service-3",
                },
              ].map((s) => (
                <Card
                  key={s.title}
                  data-testid={s.testId}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.06]"
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.18),transparent_60%),radial-gradient(circle_at_bottom,rgba(6,182,212,0.10),transparent_60%)]" />
                  <div className="relative flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-black/30">
                        {s.icon}
                      </div>
                      <ArrowRight className="h-4 w-4 text-white/30 transition-all duration-300 group-hover:text-white/70 group-hover:translate-x-0.5" />
                    </div>
                    <div className="font-display text-lg tracking-tight text-white">{s.title}</div>
                    <div className="text-sm leading-relaxed text-white/65">{s.desc}</div>
                  </div>
                </Card>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <section className="relative mx-auto max-w-6xl px-4 pb-20 md:px-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
            <div className="grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-center">
              <div className="grid gap-3">
                <div data-testid="text-proof-kicker" className="text-xs font-medium text-white/55">
                  Prova social
                </div>
                <h2 data-testid="text-proof-title" className="font-display text-2xl tracking-tight md:text-4xl">
                  Autoridade é construída com consistência.
                </h2>
                <p data-testid="text-proof-desc" className="text-white/70">
                  Alguns sinais simples (e reais) de maturidade digital — o que você busca não é volume, é percepção.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5" data-testid="card-proof-1">
                  <div className="font-display text-2xl text-white">+ clareza</div>
                  <div className="text-sm text-white/60">decisão mais rápida</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5" data-testid="card-proof-2">
                  <div className="font-display text-2xl text-white">+ valor</div>
                  <div className="text-sm text-white/60">ticket mais alto</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5" data-testid="card-proof-3">
                  <div className="font-display text-2xl text-white">+ foco</div>
                  <div className="text-sm text-white/60">menos dispersão</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5" data-testid="card-proof-4">
                  <div className="font-display text-2xl text-white">+ conversão</div>
                  <div className="text-sm text-white/60">sem aumentar posts</div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {["Método claro e aplicável.", "Direto ao ponto — sem slides vazios.", "Você sai com próximos passos."].map((t, i) => (
                <div
                  key={t}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-white/70"
                  data-testid={`testimonial-${i}`}
                >
                  “{t}”
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(139,92,246,0.14),rgba(6,182,212,0.10))] p-6 md:flex-row md:items-center">
              <div>
                <div className="font-display text-lg tracking-tight" data-testid="text-final-cta-title">
                  Comece sua transformação
                </div>
                <div className="text-sm text-white/70" data-testid="text-final-cta-desc">
                  Diagnóstico gratuito + roadmap de 90 dias. Sem compromisso.
                </div>
              </div>
              <CtaLink href="/diagnostico" testId="link-final-cta">
                <Button data-testid="button-final-cta" size="lg" className="rounded-2xl bg-white text-black hover:bg-white">
                  Agendar diagnóstico
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CtaLink>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 bg-black/40">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-white/60 md:flex-row md:items-center md:justify-between md:px-6">
            <div data-testid="text-footer-brand">© {new Date().getFullYear()} Gabriel Amaral Digital</div>
            <div className="flex items-center gap-4">
              <NavLink href="/contato" testId="link-footer-contato">
                Contato
              </NavLink>
              <NavLink href="/links" testId="link-footer-links">
                Links
              </NavLink>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
