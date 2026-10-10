import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/gforce-logo.png";
import { ArrowRight, MapPin, Instagram, Award, Target, Zap, Trophy, Phone } from "lucide-react";
import { Nav } from "@/components/Nav";
import { WhatsAppFab } from "@/components/WhatsAppFab";

import { Faq } from "@/components/Faq";


import heroSled from "@/assets/evento-gilles-largada.jpg";
import heroPortrait from "@/assets/hero-portrait.png";
import smokeImg from "@/assets/smoke.png";
import sysEndurance from "@/assets/sys-engine.jpg";
import sysHybrid from "@/assets/sys-hybrid.jpg";
import sysStrength from "@/assets/sys-strength.jpg";
import sysConditioning from "@/assets/sys-power.jpg";
import trainerBadge from "@/assets/trainer-badge.jpg";

import extreme1 from "@/assets/extreme-1.png";
import extreme2 from "@/assets/extreme-2.png";
import extreme3 from "@/assets/extreme-3.png";
import extreme4 from "@/assets/extreme-4.png";
import extreme5 from "@/assets/extreme-5.png";
import studioExperience1 from "@/assets/studio-experience-1.jpg";
import studioExperience2 from "@/assets/studio-experience-2.jpg";
import studioExperience3 from "@/assets/studio-experience-3.jpg";
import studioExperience4 from "@/assets/studio-experience-4.jpg";
import studioExperience5 from "@/assets/studio-experience-5.jpg";


import studioInterior from "@/assets/evento-turma-extreme.jpg";
import studioTeam from "@/assets/studio-team.jpg";
import method1 from "@/assets/aluna-ruth-dip.jpg";
import mentorImg from "@/assets/podcast-gforce-system.jpg";
import igPost1 from "@/assets/ig-1.jpg";
import igPost2 from "@/assets/ig-2.jpg";
import igPost3 from "@/assets/ig-3.jpg";
import igPost4 from "@/assets/ig-4.jpg";
import igPost5 from "@/assets/ig-5.jpg";
import igPost6 from "@/assets/ig-6.jpg";
import programmingImg from "@/assets/gilles-corrida.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "G-Force Hybrid Training Method — Um Método, Múltiplas Capacidades" },
      {
        name: "description",
        content:
          "Metodologia oficial de treinamento híbrido de alta performance. Certificação GF Trainer, implantação G-FORCE System, eventos Extreme Race e Studio Fit Experience.",
      },
      { property: "og:title", content: "G-Force Hybrid Training Method" },
      {
        property: "og:description",
        content: "Performance, treinamento híbrido e formação de treinadores de elite em um único ecossistema.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroSled },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroSled },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "G-Force Hybrid Training Method",
          url: "/",
          logo: "/favicon.png",
          sameAs: ["https://instagram.com/studiofitpiripiri"],
        }),
      },
    ],
  }),
  component: Home,
});

const stats = [
  { v: "12K+", l: "Atletas treinados" },
  { v: "08", l: "Módulos da certificação" },
  { v: "94%", l: "Retenção de alunos" },
  { v: "04", l: "Sistemas integrados" },
];

const pillars = [
  {
    icon: Target,
    title: "Metodologia",
    desc: "Periodização híbrida baseada em ciência do esporte. Cada bloco é mensurável, replicável e auditável.",
  },
  {
    icon: Zap,
    title: "Performance",
    desc: "Sistemas energéticos integrados. Força, fôlego e potência treinados sem interferência mútua.",
  },
  {
    icon: Award,
    title: "Autoridade",
    desc: "Uma metodologia construída a partir de anos de estudo, prática, experimentação e operação em um Centro de Treinamento real.",
  },
  {
    icon: Trophy,
    title: "Comunidade",
    desc: "Método → Pessoas → Espaço → Operação → Negócio.",
  },
];

function Smoke({ className = "" }: { className?: string }) {
  return (
    <img
      src={smokeImg}
      alt=""
      aria-hidden
      loading="lazy"
      className={`pointer-events-none absolute inset-0 w-full h-full object-cover mix-blend-screen animate-smoke ${className}`}
    />
  );
}

const systems = [
  { n: "01", t: "Strength System", d: "Desenvolvimento de força e estrutura.", img: sysStrength },
  { n: "02", t: "Engine System", d: "Capacidade cardiovascular.", img: sysEndurance },
  { n: "03", t: "Power System", d: "Potência e velocidade.", img: sysConditioning },
  { n: "04", t: "Hybrid System", d: "Integração total das capacidades.", img: sysHybrid },
];

const posts = [
  {
    tag: "Methodology",
    title: "Por que treinamento híbrido é o futuro do fitness de elite",
    read: "6 min",
  },
  {
    tag: "Performance",
    title: "Periodização: como organizar força e endurance sem interferência",
    read: "9 min",
  },
  {
    tag: "Lifestyle",
    title: "Nutrição do atleta híbrido: protocolo de competição",
    read: "5 min",
  },
];

const WHATSAPP_URL = "https://wa.me/5586999515009";

function ExtremeCarousel({
  images,
  className = "",
  alt,
}: {
  images: string[];
  className?: string;
  alt: string;
}) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 4500);
    return () => clearInterval(id);
  }, [images.length]);
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={alt}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-1 transition-all duration-500 ${
              i === index ? "w-8 bg-chrome" : "w-4 bg-chrome/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function CheckBoxIcon({ className = "text-black" }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 shrink-0 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M7 12l3 3 7-7" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

function Home() {
  return (
    <div id="top" className="bg-background text-foreground font-sans">
      <Nav />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end px-6 md:px-10 pt-28 pb-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Smoke className="opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/40" />
        </div>

        {/* MOBILE PORTRAIT (top, text overlaps bottom half) */}
        <div className="lg:hidden absolute z-[5] inset-x-0 top-0 h-[65vh] pointer-events-none">
          <img
            src={heroPortrait}
            alt="Gilles — G-FORCE Hybrid Training Method"
            className="w-full h-full object-cover object-top"

          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
        </div>

        {/* RIGHT PORTRAIT (desktop) */}
        <div className="hidden lg:block absolute z-[5] right-0 top-0 bottom-0 w-[55%] pointer-events-none">
          <img
            src={heroPortrait}
            alt="Gilles — G-FORCE Hybrid Training Method"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
        </div>



        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="font-mono text-[10px] md:text-xs mb-6 text-chrome/70 tracking-[0.3em] uppercase animate-reveal flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-chrome/50" />
            Ecossistema de Treinamento Híbrido
          </div>
          <h1 className="font-display text-[clamp(3rem,8.5vw,8rem)] leading-[0.85] uppercase italic text-balance mb-6 max-w-5xl animate-reveal [animation-delay:200ms] text-foreground">
            Um Método,<br />
            Múltiplas<br />
            Capacidades.
          </h1>

          <p className="max-w-md text-sm md:text-base text-muted-foreground mb-10 animate-reveal [animation-delay:350ms] border-l border-chrome/30 pl-4">
            Treinamento híbrido, consultoria online, programas de treino, formação de treinadores e implantação de studio em um único ecossistema.
          </p>
          <div className="flex flex-wrap gap-4 animate-reveal [animation-delay:500ms]">
            <a
              href="#trainer"
              className="px-8 md:px-10 py-4 bg-foreground text-background font-display uppercase tracking-widest hover:bg-chrome transition-colors flex items-center gap-3"
            >
              Quero me Certificar <ArrowRight className="size-4" />
            </a>
            <a
              href="#method"
              className="px-8 md:px-10 py-4 border border-white/20 font-display uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center gap-3"
            >
              Conhecer a Metodologia <ArrowRight className="size-4" />
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 animate-reveal [animation-delay:700ms]">
            {[
              { v: "2.000+", l: "Alunos" },
              { v: "+50", l: "Treinadores Certificados" },
              { v: "10+", l: "Eventos Realizados" },
              { v: "1", l: "Método com 9 anos de desenvolvimento" },
            ].map((s) => (
              <div key={s.l} className="flex items-start gap-3">
                <div className="h-8 w-px bg-chrome/40 mt-1" />
                <div>
                  <div className="font-display text-3xl md:text-4xl text-foreground leading-none">{s.v}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-chrome/60 mt-2">
                    {s.l}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase text-chrome/60">
          <span>Scroll</span>
          <span className="h-8 w-px bg-chrome/40 animate-pulse" />
        </div>
      </section>


      {/* MARQUEE */}
      <div className="border-y border-white/10 py-6 overflow-hidden">
        <div className="flex whitespace-nowrap animate-[marquee_40s_linear_infinite]">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex items-center gap-12 px-6 shrink-0">
              {["Endurance", "Strength", "Conditioning", "Hybrid", "Durability", "Power", "Mindset"].map((w) => (
                <span key={w} className="font-display text-5xl md:text-7xl uppercase italic text-white/10">
                  {w} <span className="text-chrome/30">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* METHOD */}
      <section id="method" className="py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-5">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-chrome/60 mb-6">
                [01] — The Method
              </div>
              <h2 className="font-display text-5xl md:text-7xl uppercase italic leading-[0.9]">
                A ciência por trás<br />
                <span className="text-chrome/50">da alta performance.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                O G-Force Method não é exercício. É um ecossistema de treinamento desenhado para construir
                atletas resilientes, capazes de dominar qualquer área — da corrida de endurance ao LPO,
                da prova híbrida ao trabalho de musculação.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-px bg-white/10 mb-20">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="md:col-span-3 bg-background p-8 group hover:bg-graphite transition-colors"
              >
                <p.icon className="size-6 text-chrome mb-8 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <h3 className="font-display text-2xl uppercase mb-3 tracking-tight">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-5 gap-10 items-center mb-20">
            <img
              src={method1}
              alt="Aluna Studio Fit em treino"
              loading="lazy"
              width={472}
              height={782}
              className="md:col-span-2 w-full max-w-[340px] mx-auto aspect-[3/4] object-cover object-top grayscale"
            />
            <div className="md:col-span-3">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-chrome/60 mb-4">
                [02] — Founding Principle
              </div>
              <blockquote className="font-display text-3xl md:text-5xl uppercase italic leading-[1] mb-8">
                "Desenvolvimento simultâneo de múltiplas capacidades físicas"
              </blockquote>
              <div className="font-mono text-xs text-chrome/50 uppercase tracking-widest mb-10">
                — Princípio Corpo Híbrido
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-background font-display uppercase text-sm tracking-widest hover:bg-[#128C7E] transition-colors"
              >
                Quero o G Force Method <Phone className="size-4" />
              </a>
            </div>
          </div>

          {/* METODOLOGIA */}
          <div className="pt-24 border-t border-white/10">
            <div className="grid lg:grid-cols-12 gap-12 mb-20">
              <div className="lg:col-span-6">
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-chrome/60 mb-6">
                  [02.1] — A Metodologia
                </div>
                <h2 className="font-display text-5xl md:text-7xl uppercase italic leading-[0.9] mb-8">
                  G-FORCE Training Method
                </h2>
              </div>
              <div className="lg:col-span-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A G-FORCE Training Method nasce da integração das principais escolas de treinamento físico do mundo. Não foi criada a partir de uma única linha de pensamento, mas sim da experiência prática e formação em múltiplas disciplinas.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 mb-20">
              {/* Modalidades */}
              <div>
                <h3 className="font-display text-2xl uppercase mb-6 tracking-tight flex items-center gap-2">
                  <span className="size-2 bg-chrome rounded-full animate-pulse" /> Modalidades
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Musculação",
                    "Cross Training",
                    "Levantamento Olímpico",
                    "Ginástica e Calistenia",
                    "Corrida e Endurance",
                    "Treinamento Funcional"
                  ].map((m) => (
                    <div key={m} className="bg-graphite p-4 border border-white/5 hover:border-chrome/30 transition-all flex items-center gap-3 group">
                      <div className="size-1.5 bg-chrome/55 group-hover:bg-chrome transition-colors rotate-45" />
                      <span className="font-display text-xs uppercase tracking-wider">{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Objetivos */}
              <div>
                <h3 className="font-display text-2xl uppercase mb-6 tracking-tight flex items-center gap-2">
                  <span className="size-2 bg-chrome rounded-full animate-pulse" /> Objetivo do Método
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Desenvolver um atleta de elite robusto, combinando hipertrofia e funcionalidade para torná-lo capaz de:
                </p>
                <ul className="space-y-4">
                  {[
                    "levantar cargas altas",
                    "sustentar esforço prolongado",
                    "se mover com eficiência",
                    "gerar potência e velocidade",
                    "resistir à fadiga física e mental",
                  ].map((o) => (
                    <li key={o} className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight">
                      <span className="text-chrome font-bold">✔</span>
                      <span>{o}</span>
                    </li>
                  ))}
                  <li className="mt-8 pt-4 border-t border-white/10 flex items-center gap-3 text-sm font-display uppercase tracking-widest text-chrome">
                    <Zap className="size-4 animate-pulse" /> Hipertrofia e Funcionalidade
                  </li>
                </ul>
              </div>
            </div>

            {/* G-FORCE SYSTEM — chamada */}
            <div className="mt-24 pt-16 border-t border-white/5 text-center">
              <h3 className="font-display text-4xl md:text-6xl uppercase italic leading-[0.9] mb-6">G-FORCE SYSTEM</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-3">
                Sistema completo para implantação de um Centro de Treinamento Híbrido G-FORCE.
              </p>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-chrome/70">
                Do treinador ao dono do Studio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GF TRAINER */}
      <section id="trainer" className="relative py-32 px-6 md:px-10 bg-graphite border-y border-white/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-white/10 border border-white/20 font-mono text-[10px] mb-8 uppercase tracking-widest">
              Official Certification — Level 1 to 3
            </div>
            <h2 className="font-display text-5xl md:text-7xl uppercase italic leading-[0.9] mb-8">
              Torne-se um<br />GF Trainer.
            </h2>
            <p className="text-muted-foreground max-w-md mb-12 text-lg leading-relaxed">
              Domine a metodologia híbrida que está redefinindo o fitness de elite. Formação técnica,
              prática e estratégica para treinadores que buscam o topo do mercado.
            </p>
            <ul className="space-y-4 mb-12">
              {[
                "08 Módulos de especialização técnica",
                "Selo oficial G-Force Trainer",
                "Workshops práticos no Studio Fit",
                "Comunidade fechada de treinadores certificados",
              ].map((it, i) => (
                <li key={it} className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <span className="text-chrome font-mono text-sm">[{String(i + 1).padStart(2, "0")}]</span>
                  <span className="uppercase font-bold tracking-tight text-sm md:text-base">{it}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://payfast.greenn.com.br/nnvpxb3"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-background font-display uppercase text-sm tracking-widest hover:bg-[#128C7E] hover:text-white transition-all"
            >
              CONHECER O CURSO <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="relative aspect-square">
            <div className="absolute -inset-4 border border-white/10" />
            <img
              src={trainerBadge}
              alt="Selo oficial de certificação G-Force Trainer"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute bottom-6 right-6 bg-background/90 backdrop-blur-xl p-5 border border-white/10">
              <div className="font-mono text-[10px] uppercase text-chrome/60 mb-1">Current Cohort</div>
              <div className="font-display text-2xl">LANÇAMENTO EM BREVE</div>
            </div>
            <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-xl px-4 py-2 border border-white/10 font-mono text-[10px] uppercase tracking-widest text-chrome">
              Cohort 2026 · Q1
            </div>
          </div>
        </div>
      </section>

      {/* IMPLANTACAO */}
      <section id="mentor" className="py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <img
              src={mentorImg}
              alt="Podcast G-FORCE System"
              loading="lazy"
              width={1672}
              height={941}
              className="w-full aspect-[16/10] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-chrome/60 mb-6">
              [03] — Implantação
            </div>
            <h2 className="font-display text-5xl md:text-7xl uppercase italic leading-[0.9] mb-8">
              Implantação.<br />
              <span className="text-chrome/50">Começa com planejamento.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl">
              A estruturação de um Centro de Treinamento não começa com a compra de equipamentos.
            </p>
            <div className="grid sm:grid-cols-2 gap-px bg-white/10 max-w-2xl mb-10">
              {[
                { t: "Espaço", d: "Estrutura do espaço e organização das áreas." },
                { t: "Equipamentos", d: "Equipamentos necessários, prioritários e secundários." },
                { t: "Estações", d: "Organização das estações e fluxo de alunos." },
                { t: "Operação", d: "Capacidade por turma e estrutura inicial de operação." },
              ].map((b) => (
                <div key={b.t} className="bg-background p-6">
                  <h4 className="font-display text-xl uppercase mb-2">{b.t}</h4>
                  <p className="text-sm text-muted-foreground">{b.d}</p>
                </div>
              ))}
            </div>
            <a
              href="#licenca"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-background font-display uppercase text-sm tracking-widest hover:bg-[#128C7E] hover:text-white transition-all"
            >
              G-FORCE SYSTEM <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* G-FORCE SYSTEM — O QUE E */}
      <section id="system" className="relative py-32 px-6 md:px-10 bg-graphite border-y border-white/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-5xl md:text-7xl uppercase italic leading-[0.9] mb-8">
              G-FORCE SYSTEM.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              O G-FORCE SYSTEM é um sistema de implantação, formação e suporte desenvolvido para profissionais de Educação Física e empreendedores que desejam criar, estruturar ou transformar um Studio, Box ou Centro de Treinamento em uma operação de Treinamento Híbrido, utilizando a metodologia G-FORCE.
            </p>
            <p className="font-display text-2xl md:text-3xl uppercase italic mb-4">Você não recebe apenas um curso.</p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 border-l border-chrome/30 pl-5">
              Você recebe metodologia, estrutura, treinamento, orientação para implantação, suporte e licença de uso da metodologia G-FORCE.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              O objetivo é transformar o conhecimento do profissional em uma operação de treinamento híbrido estruturada, padronizada e preparada para crescer.
            </p>
          </div>
          <div className="relative aspect-square">
            <div className="absolute -inset-4 border border-white/10" />
            <img
              src={programmingImg}
              alt="Gilles em treino de corrida"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 overflow-hidden pointer-events-none"><Smoke className="opacity-45" /></div>
          </div>
        </div>
      </section>

      {/* G-FORCE SYSTEM — LICENCIAMENTO */}
      <section id="licenca" className="relative bg-graphite border-y border-white/10 overflow-hidden">
        <div className="group relative px-6 md:px-10 pt-32 pb-20 overflow-hidden">
          <img
            src={studioInterior}
            alt="Equipe G-FORCE na Extreme Race 2026"
            loading="lazy"
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover object-[center_30%] opacity-40 grayscale group-hover:opacity-55 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)]"
          />
          <Smoke className="opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/70 to-graphite/30" />
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-chrome/60 mb-6 flex items-center gap-3">
              <span className="w-12 h-px bg-chrome/40" /> [04] — G-FORCE System
            </div>
            <h2 className="font-display text-5xl md:text-8xl uppercase italic leading-[0.9] mb-6 max-w-5xl">
              Construa com um sistema.
            </h2>
            <p className="font-display text-2xl md:text-4xl uppercase italic leading-[1] text-chrome/50 mb-8 max-w-4xl">
              O sistema para implantação e operação de um Centro de Treinamento Híbrido.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl border-l border-chrome/30 pl-5">
              Muitos profissionais sabem treinar. Poucos sabem estruturar um Centro de Treinamento.
              Você não recebe apenas uma metodologia. Você recebe um sistema para colocá-la em operação.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-32">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10 mb-16">
            {["Metodologia", "Implantação", "Formação", "Operação", "Suporte", "Licenciamento"].map((c, i) => (
              <div key={c} className="group bg-background p-6 hover:bg-white/[0.04] transition-colors">
                <div className="font-mono text-[10px] text-chrome/60 group-hover:text-[#25D366] mb-3 transition-colors">[0{i + 1}]</div>
                <div className="font-display text-lg md:text-xl uppercase">{c}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {[
              {
                name: "G-FORCE System",
                tag: "Para quem quer receber o sistema e implementar com maior autonomia.",
                items: [
                  "Metodologia G-FORCE — Manual, sistemas, aulas, progressões, adaptações e testes.",
                  "Projeto de implantação — Estrutura, organização do espaço, equipamentos, estações, fluxo e capacidade.",
                  "Treinamento presencial — 1 dia com a equipe. Até 5 treinadores.",
                  "Material de apoio — Materiais oficiais para estudo, consulta e aplicação.",
                  "Suporte — WhatsApp exclusivo + reuniões de acompanhamento. Até 3 meses.",
                  "Licença — 1 ano de utilização da metodologia, identidade e materiais autorizados.",
                ],
                price: "R$ 6.697",
                cta: "G-FORCE SYSTEM",
                msg: "Olá, equipe G-FORCE! Quero contratar o G-FORCE SYSTEM.\n\nNome:\nEmpresa:\nFale um pouco da sua necessidade atual:",
                pro: false,
              },
              {
                name: "G-FORCE System PRO",
                tag: "Para quem quer receber o sistema e contar com acompanhamento próximo durante a implantação.",
                items: [
                  "Tudo do G-FORCE SYSTEM +",
                  "Projeto completo do espaço — Análise, layout, áreas, fluxo e capacidade.",
                  "Definição de equipamentos — Lista, prioridades, investimento e organização da compra.",
                  "Análise financeira — Investimento inicial, custos, capacidade, precificação, ticket e cenários.",
                  "Treinamento presencial — 2 dias com a equipe. Até 5 treinadores.",
                  "Consultoria comercial — Planos, preços, horários, captação, retenção e campanhas.",
                  "Acompanhamento da implantação — Orientação nas principais etapas de implementação.",
                  "Suporte — WhatsApp + reuniões + acompanhamento estratégico. 6 meses.",
                  "Licença — 2 anos de utilização da metodologia, identidade e materiais autorizados.",
                ],
                price: "R$ 14.997",
                cta: "G-FORCE SYSTEM PRO",
                msg: "Olá, equipe G-FORCE! Quero contratar o G-FORCE SYSTEM PRO.\n\nNome:\nEmpresa:\nFale um pouco da sua necessidade atual:",
                pro: true,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`bg-background p-8 md:p-10 flex flex-col border hover:-translate-y-1 transition-all duration-500 ${plan.pro ? "border-[#25D366] shadow-[0_20px_60px_-20px_rgba(37,211,102,0.35)]" : "border-white/10 hover:border-white/30"}`}
              >
                <h3 className="font-display text-3xl md:text-4xl uppercase italic leading-none mb-3">{plan.name}</h3>
                <p className="text-muted-foreground mb-8">{plan.tag}</p>
                <ul className="space-y-3 mb-10 flex-1">
                  {plan.items.map((it) => (
                    <li key={it} className="flex gap-3 text-sm">
                      <span className="text-[#25D366]" aria-hidden>✓</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-chrome/60 mb-2">Investimento</div>
                <div className="font-display text-4xl md:text-5xl mb-8">{plan.price}</div>
                <a
                  href={`${WHATSAPP_URL}?text=${encodeURIComponent(plan.msg)}`}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-background font-display uppercase text-sm tracking-widest hover:bg-[#128C7E] hover:text-white transition-all"
                >
                  {plan.cta} <ArrowRight className="size-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-foreground mb-8">
            {["Diagnóstico", "Estruturação", "Formação", "Implantação", "Acompanhamento", "Operação"].map((step, i, arr) => (
              <span key={step} className="flex items-center gap-4">
                {step}
                {i < arr.length - 1 && <span className="text-chrome/50" aria-hidden>→</span>}
              </span>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            Licença renovável. Despesas de viagem do treinamento presencial por conta do contratante.
          </p>
        </div>
      </section>

      {/* SYSTEMS */}
      <section id="systems" className="py-32 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-chrome/60 mb-6">
                [05] — Training Systems
              </div>
              <h2 className="font-display text-5xl md:text-7xl uppercase italic leading-[0.9]">
                Os quatro sistemas.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Quatro pilares integrados que constroem o atleta híbrido completo.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {systems.map((s) => (
            <div
              key={s.n}
              className="group relative bg-background aspect-[4/5] flex flex-col justify-end p-8 overflow-hidden"
            >
              <img
                src={s.img}
                alt={`Sistema de treino ${s.t}`}
                loading="lazy"
                width={800}
                height={1024}
                className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:opacity-50 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)]"
              />
              <Smoke className="opacity-35" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="relative z-10">
                <span className="font-mono text-[10px] text-chrome/50 mb-2 block">{s.n} / 04</span>
                <h3 className="font-display text-4xl md:text-5xl uppercase mb-4">{s.t}</h3>
                <p className="text-sm text-muted-foreground max-w-xs">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 flex-wrap gap-6">
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-chrome/60 mb-6">
                [06] — Live Events
              </div>
              <h2 className="font-display text-5xl md:text-7xl uppercase italic leading-[0.9]">
                Hybrid Trials.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            <article className="md:col-span-7 group relative overflow-hidden">
              <ExtremeCarousel
                images={[extreme1, extreme2, extreme3, extreme4, extreme5]}
                alt="Extreme Race"
                className="w-full h-[420px] md:h-[560px]"
              />


              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-xl px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-chrome">
                Flagship Event
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-display text-4xl md:text-6xl uppercase italic mb-3">Extreme Race</h3>
                <p className="text-sm text-muted-foreground max-w-md mb-6">
                  A corrida híbrida que testa cada fibra do corpo. Sleds, burpees, corrida e força em um
                  percurso desenhado para a elite.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-[#25D366] text-background font-display uppercase text-sm tracking-widest hover:bg-[#128C7E] transition-colors"
                >
                  Inscrever-se <Phone className="size-4" />
                </a>
              </div>
            </article>

            <article className="md:col-span-5 group relative overflow-hidden">
              <ExtremeCarousel
                images={[
                  studioExperience1,
                  studioExperience2,
                  studioExperience3,
                  studioExperience4,
                  studioExperience5,
                ]}
                alt="Studio Fit Experience"
                className="w-full h-[420px] md:h-[560px]"
              />


              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-display text-3xl md:text-4xl uppercase italic mb-3">
                  Studio Fit Experience
                </h3>
                <p className="text-sm text-muted-foreground max-w-md mb-6">
                  Imersão técnica na sede oficial. Workshops práticos, estratégias de pacing e comunidade
                  G-Force.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-[#25D366] text-background font-display uppercase text-sm tracking-widest hover:bg-[#128C7E] transition-colors"
                >
                  Ver Detalhes <Phone className="size-4" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* STUDIO FIT */}
      <section id="studio" className="relative py-32 bg-graphite border-y border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-chrome/60 mb-6">
              [07] — HQ
            </div>
            <h2 className="font-display text-5xl md:text-7xl uppercase italic leading-[0.9] mb-8">
              Studio Fit.<br />A sede.
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              9 anos construindo mais que uma academia: uma cultura, uma metodologia e uma energia que você sente desde o primeiro treino. São mais de 330m² dedicados ao treinamento híbrido, musculação e cross training.
            </p>
            <div className="space-y-4 mb-10">
              {[
                { l: "Localização", v: "PIRIPIRI-PI Rua José Francisco de Carvalho 3 cep 64260-000" },
                { l: "Horários", v: "SEG-SEX 05:00h às 21:00h / SAB 07:00h às 12:00h / 16:30 às 18:00h" },
                { l: "Estrutura", v: "Rigs, sleds, remo concept, assault bike, sky erg, esteira curva, esteiras tradicionais, aparelhos essenciais de musculação. Salão completo para cross training e treino funcional." },
              ].map((r) => (
                <div key={r.l} className="grid grid-cols-3 gap-4 border-b border-white/10 pb-3">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-chrome/50">{r.l}</div>
                  <div className="col-span-2 text-sm font-bold uppercase tracking-tight">{r.v}</div>
                </div>
              ))}
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=STUDIO+FIT+ACADEMIA+Piripiri+PI"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 font-display uppercase text-sm tracking-widest hover:bg-white/10 transition-colors"
            >
              <MapPin className="size-4" /> Como Chegar
            </a>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="w-full aspect-[16/10] border border-white/10 overflow-hidden">
              <img src={studioTeam} alt="Turma Studio Fit Academia" className="w-full h-full object-cover grayscale" />
            </div>
            <div className="w-full aspect-[21/9] border border-white/10 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <iframe
                src="https://maps.google.com/maps?q=STUDIO+FIT+ACADEMIA,Piripiri,PI&hl=pt&z=17&output=embed"
                title="Localização Studio Fit Academia"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-chrome/60 mb-6">
                [08] — Social
              </div>
              <h2 className="font-display text-4xl md:text-6xl uppercase italic">@studiofitpiripiri</h2>
            </div>
            <a
              href="https://instagram.com/studiofitpiripiri"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-chrome hover:text-foreground transition-colors"
            >
              <Instagram className="size-4" /> Seguir
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2">
            {[igPost1, igPost2, igPost3, igPost4, igPost5, igPost6].map((img, i) => (
              <a
                key={i}
                href="https://instagram.com/studiofitpiripiri"
                target="_blank"
                rel="noopener"
                className="group relative block aspect-square overflow-hidden bg-background"
              >
                <img
                  src={img}
                  alt="Studio Fit Piripiri"
                  loading="lazy"
                  width={900}
                  height={900}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                />
                <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <Instagram className="size-8 text-foreground" />
                </div>
              </a>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="https://instagram.com/studiofitpiripiri"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 font-display uppercase text-sm tracking-widest hover:bg-white/10 transition-colors"
            >
              <Instagram className="size-4" /> Ver mais no Instagram
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 px-6 md:px-10 bg-graphite border-y border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-chrome/60 mb-6">
            [09] — FAQ
          </div>
          <h2 className="font-display text-5xl md:text-7xl uppercase italic leading-[0.9] mb-16">
            Perguntas<br />frequentes.
          </h2>
          <Faq />
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="cta" className="py-40 px-6 md:px-10 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
        >
          <div className="font-display text-[28vw] uppercase italic text-white/[0.03] leading-none whitespace-nowrap">
            G-FORCE
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="font-mono text-chrome/60 mb-8 tracking-[0.3em] uppercase text-xs">
            Elite training movement
          </p>
          <h2 className="font-display text-[clamp(2.5rem,7vw,7rem)] uppercase italic mb-12 tracking-tighter leading-[0.92] md:-mx-24">
            <span className="block sm:whitespace-nowrap">Construa seu próprio</span>
            <span className="block sm:whitespace-nowrap">centro de treinamento</span>
            <span className="block">híbrido.</span>
          </h2>
          <blockquote className="text-chrome text-lg md:text-xl font-display uppercase italic mb-6 max-w-2xl mx-auto">
            De treinador a dono de Studio.
          </blockquote>
          <p className="text-muted-foreground text-base md:text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            A G-FORCE Hybrid Training Method representa uma nova geração de treinamento físico. Um sistema que une ciência, prática e performance.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-4 px-12 md:px-16 py-6 md:py-7 bg-[#25D366] text-background font-display text-xl md:text-2xl uppercase italic tracking-widest hover:bg-[#128C7E] hover:scale-[1.02] transition-all"
          >
            Falar no WhatsApp <Phone className="size-6" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 md:px-10 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-5">
              <img src={logo} alt="G-Force Hybrid Training Method" className="h-8 w-auto object-contain mb-4" />
              <p className="text-sm text-muted-foreground max-w-sm">
                G-Force Hybrid Training Method. Metodologia oficial de alta performance. Treinamento
                híbrido, formação de treinadores e eventos de elite.
              </p>
            </div>
            <div className="md:col-span-2">
              <h5 className="font-mono text-[10px] uppercase tracking-widest text-chrome/60 mb-4">
                Método
              </h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#method" className="hover:text-chrome transition-colors">Metodologia</a></li>
                <li><a href="#trainer" className="hover:text-chrome transition-colors">GF Trainer</a></li>
                <li><a href="#mentor" className="hover:text-chrome transition-colors">Implantação</a></li>
                <li><a href="#systems" className="hover:text-chrome transition-colors">Sistemas</a></li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <h5 className="font-mono text-[10px] uppercase tracking-widest text-chrome/60 mb-4">
                Arena
              </h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#events" className="hover:text-chrome transition-colors">Extreme Race</a></li>
                <li><a href="#events" className="hover:text-chrome transition-colors">Studio Experience</a></li>
                <li><a href="#studio" className="hover:text-chrome transition-colors">Studio Fit</a></li>
              </ul>
            </div>
            <div className="md:col-span-3">
              <h5 className="font-mono text-[10px] uppercase tracking-widest text-chrome/60 mb-4">
                Contato
              </h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://instagram.com/studiofitpiripiri"
                    target="_blank"
                    rel="noopener"
                    className="hover:text-chrome transition-colors inline-flex items-center gap-2"
                  >
                    <Instagram className="size-4" /> @studiofitpiripiri
                  </a>
                </li>
                <li><a href="mailto:contato@gforce.com" className="hover:text-chrome transition-colors">contato@gforce.com</a></li>
                <li className="text-muted-foreground">Piripiri, PI — Brasil</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-[10px] font-mono uppercase tracking-widest text-chrome/40">
            <div>© {new Date().getFullYear()} G-Force Hybrid Training Method. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-chrome">Privacy</a>
              <a href="#" className="hover:text-chrome">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppFab />
    </div>
  );
}
