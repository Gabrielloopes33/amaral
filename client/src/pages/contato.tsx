import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, MessageCircle, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-grid" />
      <div className="relative mx-auto max-w-4xl px-4 py-14 md:px-6 md:py-20">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a
              data-testid="link-contato-back"
              className="inline-flex items-center gap-2 text-sm text-white/65 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </a>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-10"
        >
          <div data-testid="text-contato-kicker" className="text-xs font-medium text-white/55">
            Fale comigo
          </div>
          <h1 data-testid="text-contato-title" className="mt-3 font-display text-3xl tracking-tight md:text-5xl">
            Resposta rápida. Direto ao ponto.
          </h1>
          <p data-testid="text-contato-subtitle" className="mt-3 max-w-2xl text-white/70">
            WhatsApp é o canal principal. Se você já sabe que quer acelerar o crescimento, clique e mande a mensagem.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <a
              href="https://wa.me/554898026102?text=Ol%C3%A1!%20Quero%20falar%20sobre%20crescimento%20e%20posicionamento."
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06]"
              data-testid="card-contato-whatsapp"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-black/30">
                  <MessageCircle className="h-5 w-5 text-cyan-300" />
                </div>
                <span className="text-xs text-white/55">prioridade</span>
              </div>
              <div className="mt-4 font-display text-lg">WhatsApp</div>
              <div className="mt-1 text-sm text-white/65">Clique para enviar uma mensagem pronta.</div>
              <div className="mt-4 inline-flex items-center gap-2 text-sm text-white/75">
                Abrir conversa <PhoneCall className="h-4 w-4" />
              </div>
            </a>

            <a
              href="mailto:contato@gabrielamaral.digital"
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06]"
              data-testid="card-contato-email"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-black/30">
                  <Mail className="h-5 w-5 text-violet-300" />
                </div>
                <span className="text-xs text-white/55">alternativa</span>
              </div>
              <div className="mt-4 font-display text-lg">Email</div>
              <div className="mt-1 text-sm text-white/65">contato@gabrielamaral.digital</div>
              <div className="mt-4 inline-flex items-center gap-2 text-sm text-white/75">
                Enviar email <Mail className="h-4 w-4" />
              </div>
            </a>

            <div
              className="rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(139,92,246,0.16),rgba(6,182,212,0.10))] p-6"
              data-testid="card-contato-urgencia"
            >
              <div className="text-xs font-medium text-white/55">Urgência</div>
              <div className="mt-2 font-display text-lg">Resposta em até 4 horas</div>
              <div className="mt-1 text-sm text-white/70">Em dias úteis. Se for algo imediato, WhatsApp primeiro.</div>
              <div className="mt-5">
                <a
                  href="https://wa.me/554898026102?text=Ol%C3%A1!%20Tenho%20urg%C3%AAncia%20e%20quero%20agendar%20um%20diagn%C3%B3stico."
                  target="_blank"
                  rel="noreferrer"
                  data-testid="link-contato-cta"
                >
                  <Button
                    size="lg"
                    className="w-full rounded-2xl bg-white text-black hover:bg-white"
                    data-testid="button-contato-whatsapp"
                  >
                    Falar agora no WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center">
            <a
              href="https://wa.me/554898026102?text=Ol%C3%A1!%20Quero%20agendar%20um%20diagn%C3%B3stico%20gratuito."
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex w-full max-w-xl items-center justify-center rounded-3xl border border-white/10 bg-white/[0.06] px-6 py-5 text-center font-display text-lg tracking-tight text-white shadow-[0_30px_120px_rgba(6,182,212,0.10)] transition hover:bg-white/[0.10]"
              data-testid="button-contato-primary"
            >
              <span className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.20),transparent_55%)] opacity-60" />
              <span className="relative inline-flex items-center gap-3">
                Botão principal (WhatsApp)
                <MessageCircle className="h-5 w-5 text-cyan-300" />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
