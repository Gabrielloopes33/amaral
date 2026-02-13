import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MessageCircle, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const schema = z.object({
  nome: z.string().min(2, "Informe seu nome"),
  empresa: z.string().min(2, "Informe sua empresa/marca"),
  instagram: z.string().min(2, "Informe seu Instagram ou site"),
  desafio: z.enum(["visibilidade", "conversao", "posicionamento", "crescimento"], {
    required_error: "Selecione um desafio",
  }),
  tentou: z.string().min(8, "Conte rapidamente o que você já tentou"),
  whatsapp: z.string().min(8, "Informe seu WhatsApp"),
});

type FormValues = z.infer<typeof schema>;

export default function DiagnosticoPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      nome: "",
      empresa: "",
      instagram: "",
      desafio: undefined,
      tentou: "",
      whatsapp: "",
    },
    mode: "onTouched",
  });

  const watched = form.watch();

  const waText = useMemo(() => {
    const nome = watched.nome?.trim() || "";
    const empresa = watched.empresa?.trim() || "";
    return `Olá! Sou ${nome || "[NOME]"} da ${empresa || "[EMPRESA]"}. Quero agendar meu diagnóstico gratuito!`;
  }, [watched.nome, watched.empresa]);

  const waHref = `https://wa.me/55SEUNUMERO?text=${encodeURIComponent(waText)}`;

  function onSubmit(values: FormValues) {
    const text =
      `Olá! Sou ${values.nome} da ${values.empresa}. ` +
      `Quero agendar meu diagnóstico gratuito!\n\n` +
      `Instagram/Site: ${values.instagram}\n` +
      `Desafio: ${values.desafio}\n` +
      `O que já tentei: ${values.tentou}\n` +
      `WhatsApp: ${values.whatsapp}`;

    const href = `https://wa.me/55SEUNUMERO?text=${encodeURIComponent(text)}`;
    window.open(href, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full glass p-8 rounded-3xl text-center"
        >
          <div className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-8 w-8 text-violet-500" />
          </div>
          <h2 className="font-display text-2xl font-bold mb-4">Quase lá!</h2>
          <p className="text-white/60 leading-relaxed mb-8">
            Seu formulário foi enviado. Você deve ter sido redirecionado para o meu WhatsApp. <br/><br/>
            <strong>O que acontece agora?</strong><br/>
            Eu vou analisar seu perfil pessoalmente e entrarei em contato em até 24h para agendarmos nosso diagnóstico.
          </p>
          <Link href="/">
            <Button variant="outline" className="rounded-full border-white/10">Voltar para o início</Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-grid" />
      <div className="relative mx-auto max-w-3xl px-4 py-14 md:px-6 md:py-20">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a
              data-testid="link-back-home"
              className="inline-flex items-center gap-2 text-sm text-white/65 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </a>
          </Link>
          <a
            href={waHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-white/70 hover:bg-white/[0.10]"
            data-testid="link-diagnostico-whatsapp-top"
          >
            <MessageCircle className="h-4 w-4 text-cyan-300" />
            WhatsApp
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-10"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/70"
            data-testid="pill-diagnostico"
          >
            <Sparkles className="h-3.5 w-3.5 text-violet-300" />
            Diagnóstico gratuito (30 min)
          </div>

          <h1
            data-testid="text-diagnostico-title"
            className="mt-4 font-display text-3xl tracking-tight md:text-5xl"
          >
            Vamos descobrir o que está travando o crescimento da sua marca
          </h1>
          <p data-testid="text-diagnostico-subtitle" className="mt-3 text-white/70">
            Você sai com clareza sobre os gargalos, um plano de ação e um roadmap personalizado para os próximos 90 dias.
            Gratuito. Sem compromisso. Só estratégia.
          </p>

          <Card className="glass mt-8 rounded-3xl p-6 md:p-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid gap-5"
                data-testid="form-diagnostico"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Seu nome" data-testid="input-nome" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="empresa"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Empresa/Marca</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Sua marca" data-testid="input-empresa" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="instagram"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Instagram/Site atual</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="@seuinstagram ou https://..."
                          data-testid="input-instagram"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="desafio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Principal desafio</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-desafio">
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="visibilidade">Visibilidade</SelectItem>
                          <SelectItem value="conversao">Conversão</SelectItem>
                          <SelectItem value="posicionamento">Posicionamento</SelectItem>
                          <SelectItem value="crescimento">Crescimento</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="tentou"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>O que você já tentou?</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={5}
                          placeholder="Conte em 2-3 linhas: posts, anúncios, agência, etc."
                          data-testid="textarea-tentou"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone/WhatsApp</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="(DD) 9XXXX-XXXX"
                          data-testid="input-whatsapp"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-sm text-white/60" data-testid="text-diagnostico-note">
                    Ao enviar, você será direcionado para o WhatsApp com a mensagem pronta.
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="rounded-2xl bg-white text-black hover:bg-white"
                    data-testid="button-submit-diagnostico"
                  >
                    Enviar e falar no WhatsApp
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </Form>
          </Card>

          <div className="mt-6 grid gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-sm text-white/70">
            <div className="font-display text-base text-white" data-testid="text-diagnostico-whatyouget">
              Em 30 minutos, você terá clareza sobre:
            </div>
            <ul className="grid gap-2">
              <li data-testid="li-benefit-1">• Por que sua marca não está convertendo</li>
              <li data-testid="li-benefit-2">• Os 3 gargalos que impedem seu crescimento</li>
              <li data-testid="li-benefit-3">• Um roadmap personalizado para os próximos 90 dias</li>
            </ul>
          </div>

          <div className="mt-10 text-center text-xs text-white/45" data-testid="text-diagnostico-footer">
            Dica: substitua “SEUNUMERO” pelo seu número real de WhatsApp no link.
          </div>
        </motion.div>
      </div>
    </div>
  );
}
