import { useMemo, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Link2,
  MessageCircle,
  Sparkles,
  Youtube,
  Instagram,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type LinkItem = {
  id: string;
  label: string;
  href: string;
  category: "Conteúdo" | "Redes" | "Contato" | "Recursos";
};

const items: LinkItem[] = [
  {
    id: "diag",
    label: "Diagnóstico gratuito (30 min)",
    href: "/diagnostico",
    category: "Contato",
  },
  {
    id: "wpp",
    label: "WhatsApp (mensagem pronta)",
    href: "https://wa.me/55SEUNUMERO?text=Ol%C3%A1!%20Quero%20agendar%20um%20diagn%C3%B3stico%20gratuito!",
    category: "Contato",
  },
  {
    id: "ig",
    label: "Instagram",
    href: "https://instagram.com",
    category: "Redes",
  },
  {
    id: "yt",
    label: "YouTube",
    href: "https://youtube.com",
    category: "Conteúdo",
  },
  {
    id: "blog",
    label: "Artigos (Blog)",
    href: "https://example.com",
    category: "Conteúdo",
  },
  {
    id: "pdf",
    label: "Recurso gratuito (PDF)",
    href: "https://example.com",
    category: "Recursos",
  },
];

function withUtm(href: string, utm: string) {
  if (href.startsWith("/")) return href;
  const hasQuery = href.includes("?");
  return `${href}${hasQuery ? "&" : "?"}${utm}`;
}

export default function LinksPage() {
  const [campaign, setCampaign] = useState("bio");

  const utm = useMemo(() => {
    const c = campaign.trim().toLowerCase().replace(/\s+/g, "-") || "bio";
    return `utm_source=bio&utm_medium=instagram&utm_campaign=${encodeURIComponent(c)}`;
  }, [campaign]);

  const grouped = useMemo(() => {
    const map: Record<string, LinkItem[]> = {};
    for (const it of items) {
      map[it.category] = map[it.category] || [];
      map[it.category].push(it);
    }
    return map;
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-grid" />
      <div className="relative mx-auto max-w-2xl px-4 py-14 md:px-6 md:py-20">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a
              data-testid="link-links-back"
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
          <div
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/70"
            data-testid="pill-links"
          >
            <Link2 className="h-3.5 w-3.5 text-cyan-300" />
            Central de links
          </div>

          <h1 data-testid="text-links-title" className="mt-4 font-display text-3xl tracking-tight md:text-5xl">
            Tudo em um só lugar
          </h1>
          <p data-testid="text-links-subtitle" className="mt-3 text-white/70">
            Links com UTM automático para você acompanhar campanhas e origem de tráfego.
          </p>

          <Card className="glass mt-8 rounded-3xl p-6 md:p-8">
            <div className="grid gap-3">
              <div className="text-sm text-white/70" data-testid="text-utm-title">
                Campanha (utm_campaign)
              </div>
              <Input
                value={campaign}
                onChange={(e) => setCampaign(e.target.value)}
                placeholder="bio, reels, anuncio-1..."
                data-testid="input-utm-campaign"
              />
              <div
                className="rounded-2xl border border-white/10 bg-black/30 p-4 font-mono text-xs text-white/70"
                data-testid="text-utm-preview"
              >
                ?{utm}
              </div>
            </div>
          </Card>

          <div className="mt-8 grid gap-6">
            {Object.entries(grouped).map(([category, list]) => (
              <div key={category} className="grid gap-3" data-testid={`section-${category}`}>
                <div className="inline-flex items-center gap-2 text-xs font-medium text-white/55">
                  <Sparkles className="h-3.5 w-3.5 text-violet-300" />
                  {category}
                </div>
                <div className="grid gap-3">
                  {list.map((it) => {
                    const href = withUtm(it.href, utm);
                    const isInternal = href.startsWith("/");
                    const Icon =
                      it.id === "yt"
                        ? Youtube
                        : it.id === "ig"
                          ? Instagram
                          : it.id === "blog"
                            ? FileText
                            : it.id === "wpp"
                              ? MessageCircle
                              : ExternalLink;

                    return (
                      <a
                        key={it.id}
                        href={href}
                        target={isInternal ? undefined : "_blank"}
                        rel={isInternal ? undefined : "noreferrer"}
                        className="group flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-4 transition hover:bg-white/[0.06]"
                        data-testid={`link-item-${it.id}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-black/30">
                            <Icon className="h-5 w-5 text-cyan-300" />
                          </span>
                          <div className="font-display text-base tracking-tight text-white">{it.label}</div>
                        </div>
                        <Button
                          asChild
                          variant="outline"
                          className="rounded-2xl border-white/15 bg-transparent text-white/80 hover:bg-white/[0.06]"
                          data-testid={`button-open-${it.id}`}
                        >
                          <span>
                            Abrir
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </span>
                        </Button>
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center text-xs text-white/45" data-testid="text-links-footer">
            Observação: para analytics real de cliques, isso precisaria de backend. Aqui fica como mockup visual.
          </div>
        </motion.div>
      </div>
    </div>
  );
}
