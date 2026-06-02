import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/gforce-logo.png";
import { ArrowRight, MapPin, Instagram, Award, Target, Zap, Trophy, Phone } from "lucide-react";
import { Nav } from "@/components/Nav";
import { WhatsAppFab } from "@/components/WhatsAppFab";

import { Faq } from "@/components/Faq";


import heroSled from "@/assets/hero-sled.jpg";
import heroPortrait from "@/assets/hero-portrait.png";
import sysEndurance from "@/assets/system-endurance.jpg";
import sysHybrid from "@/assets/system-hybrid.jpg";
import sysStrength from "@/assets/system-strength.jpg";
import sysConditioning from "@/assets/system-conditioning.jpg";
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


import studioInterior from "@/assets/studio-interior.jpg";
import studioTeam from "@/assets/studio-team.jpg";
import method1 from "@/assets/method-1.jpg";
import mentorImg from "@/assets/mentor-new.jpg";
import igFeed from "@/assets/ig-feed.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "G-Force Hybrid Training Method — Um Método, Múltiplas Capacidades" },
      {
        name: "description",
        content:
          "Metodologia oficial de treinamento híbrido de alta performance. Certificação GF Trainer, mentoria GF Mentor, eventos Extreme Race e Studio Fit Experience.",
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
          logo: "/favicon.ico",
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
    desc: "Selo oficial reconhecido pela comunidade híbrida nacional. Credencial técnica de mercado.",
  },
  {
    icon: Trophy,
    title: "Comunidade",
    desc: "Rede global de treinadores e atletas G-Force. Mentoria contínua e eventos de elite.",
  },
];

const systems = [
  { n: "01", t: "Endurance", d: "Resistência máxima para longas distâncias e intensidade prolongada.", img: sysEndurance },
  { n: "02", t: "Hybrid", d: "O equilíbrio entre força bruta e capacidade cardiovascular.", img: sysHybrid },
  { n: "03", t: "Strength", d: "Desenvolvimento de torque e potência absoluta sob carga.", img: sysStrength },
  { n: "04", t: "Conditioning", d: "Eficiência metabólica para dominar qualquer cenário competitivo.", img: sysConditioning },
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



function Home() {
  return (
    <div id="top" className="bg-background text-foreground font-sans">
      <Nav />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end px-6 md:px-10 pt-28 pb-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroSled}
            alt="Atleta híbrido em treino de alta performance sob iluminação de arena"
            width={1920}
            height={1080}
            className="w-full h-full object-cover brightness-[0.45]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/40" />
        </div>

        {/* MOBILE PORTRAIT (top, text overlaps bottom half) */}
        <div className="lg:hidden absolute z-[5] inset-x-0 top-0 h-[65vh] pointer-events-none">
          <img
            src={heroPortrait}
            alt="Atleta de elite levantando barra com anilhas pesadas"
            className="w-full h-full object-cover object-top"

          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
        </div>

        {/* RIGHT PORTRAIT (desktop) */}
        <div className="hidden lg:block absolute z-[5] right-0 top-0 bottom-0 w-[55%] pointer-events-none">
          <img
            src={heroPortrait}
            alt="Atleta de elite levantando barra com anilhas pesadas"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
        </div>



        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="font-mono text-[10px] md:text-xs mb-6 text-chrome/70 tracking-[0.3em] uppercase animate-reveal flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-chrome/50" />
            High Performance Hybrid Ecosystem
          </div>
          <h1 className="font-display text-[clamp(3rem,8.5vw,8rem)] leading-[0.85] uppercase italic text-balance mb-6 max-w-5xl animate-reveal [animation-delay:200ms] text-foreground">
            Um Método,<br />
            Múltiplas<br />
            Capacidades.
          </h1>

          <p className="max-w-md text-sm md:text-base text-muted-foreground mb-10 animate-reveal [animation-delay:350ms] border-l border-chrome/30 pl-4">
            Performance, treinamento híbrido e formação de treinadores em um único ecossistema de elite.
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
              { v: "300+", l: "Treinadores Certificados" },
              { v: "10+", l: "Eventos Realizados" },
              { v: "1", l: "Método Proprietário" },
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
          <span>Para Explorar</span>
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
                O G-Force Method não é exercício. É uma arquitetura de treinamento desenhada para construir
                atletas resilientes, capazes de dominar qualquer arena — da corrida de endurance ao
                levantamento olímpico, da prova híbrida ao trabalho metabólico de elite.
              </p>
              <p className="text-base text-muted-foreground/70 leading-relaxed">
                Cada pilar foi auditado e refinado através de milhares de horas de prática em campo. O
                resultado é um sistema reproduzível, mensurável e capaz de formar tanto atletas quanto a
                próxima geração de treinadores híbridos.
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

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src={method1}
              alt="Mãos de atleta firmando uma barra olímpica"
              loading="lazy"
              width={800}
              height={1024}
              className="w-full aspect-[4/5] object-cover grayscale"
            />
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-chrome/60 mb-4">
                [02] — Founding Principle
              </div>
              <blockquote className="font-display text-3xl md:text-5xl uppercase italic leading-[1] mb-8">
                "A força sem fôlego é vaidade. O fôlego sem força é fragilidade. O atleta híbrido domina os
                dois."
              </blockquote>
              <div className="font-mono text-xs text-chrome/50 uppercase tracking-widest mb-10">
                — G-Force Founding Doctrine
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
                "Acesso à plataforma e diretório global",
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
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-background font-display uppercase text-sm tracking-widest hover:bg-[#128C7E] transition-colors"
            >
              Quero ser GF Trainer <Phone className="size-4" />
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
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 right-6 bg-background/90 backdrop-blur-xl p-5 border border-white/10">
              <div className="font-mono text-[10px] uppercase text-chrome/60 mb-1">Current Cohort</div>
              <div className="font-display text-2xl">92% OCUPADO</div>
            </div>
            <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-xl px-4 py-2 border border-white/10 font-mono text-[10px] uppercase tracking-widest text-chrome">
              Cohort 2026 · Q1
            </div>
          </div>
        </div>
      </section>

      {/* GF MENTOR */}
      <section id="mentor" className="py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <img
              src={mentorImg}
              alt="Mentoria executiva G-Force para treinadores"
              loading="lazy"
              width={1200}
              height={1408}
              className="w-full aspect-[4/5] object-cover grayscale"
            />
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-chrome/60 mb-6">
              [03] — GF Mentor
            </div>
            <h2 className="font-display text-5xl md:text-7xl uppercase italic leading-[0.9] mb-8">
              Mentoria executiva<br />
              <span className="text-chrome/50">para treinadores de elite.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl">
              GF Mentor é o nível superior. Posicionamento de marca, autoridade técnica, estratégia
              comercial e escala de operação para treinadores que já operam no alto padrão e querem
              dominar o próprio mercado.
            </p>
            <div className="grid sm:grid-cols-2 gap-px bg-white/10 max-w-2xl mb-10">
              {[
                { t: "Posicionamento", d: "Construção de marca pessoal e autoridade digital." },
                { t: "Acompanhamento", d: "Calls 1:1, plano de execução e revisão mensal." },
                { t: "Estratégia", d: "Modelo de negócio, ticket alto, retenção." },
                { t: "Networking", d: "Acesso à mesa dos top performers do G-Force." },
              ].map((b) => (
                <div key={b.t} className="bg-background p-6">
                  <h4 className="font-display text-xl uppercase mb-2">{b.t}</h4>
                  <p className="text-sm text-muted-foreground">{b.d}</p>
                </div>
              ))}
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-background font-display uppercase text-sm tracking-widest hover:bg-[#128C7E] transition-colors"
            >
              Quero a Mentoria <Phone className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SYSTEMS */}
      <section id="systems" className="py-32 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-chrome/60 mb-6">
                [04] — Training Systems
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
                [05] — Live Events
              </div>
              <h2 className="font-display text-5xl md:text-7xl uppercase italic leading-[0.9]">
                A arena chama.
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
              <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-xl px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-chrome">
                Imersão · Teresina, PI
              </div>
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
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-chrome/60 mb-6">
              [06] — HQ
            </div>
            <h2 className="font-display text-5xl md:text-7xl uppercase italic leading-[0.9] mb-8">
              Studio Fit.<br />A sede.
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Mais de 800m² dedicados ao treinamento híbrido. Rigs, sleds, esteiras manuais, assault bikes
              e remadores Concept2. A arena onde o método é vivido.
            </p>
            <div className="space-y-4 mb-10">
              {[
                { l: "Localização", v: "Teresina, PI — Brasil" },
                { l: "Horários", v: "Seg–Sex 05:30 → 22:00 · Sáb 07:00 → 14:00" },
                { l: "Estrutura", v: "Rigs, sleds, rowers, bikes, sala de mobilidade" },
              ].map((r) => (
                <div key={r.l} className="grid grid-cols-3 gap-4 border-b border-white/10 pb-3">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-chrome/50">{r.l}</div>
                  <div className="col-span-2 text-sm font-bold uppercase tracking-tight">{r.v}</div>
                </div>
              ))}
            </div>
            <a
              href="https://www.google.com/maps/place/STUDIO+FIT+ACADEMIA/data=!4m2!3m1!1s0x0:0x88b8068cc86dfc40?sa=X&ved=1t:2428&ictx=111"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 font-display uppercase text-sm tracking-widest hover:bg-white/10 transition-colors"
            >
              <MapPin className="size-4" /> Como Chegar
            </a>
            <div className="mt-8 w-full aspect-[16/10] border border-white/10 overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=STUDIO+FIT+ACADEMIA,Teresina,PI&hl=pt&z=17&output=embed"
                title="Localização Studio Fit Academia"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="w-full aspect-[4/3] border border-white/10 overflow-hidden">
              <img src={studioTeam} alt="Turma Studio Fit Academia" className="w-full h-full object-cover" />
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
                [07] — Social
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
          <div className="max-w-4xl mx-auto">
            <a
              href="https://instagram.com/studiofitpiripiri"
              target="_blank"
              rel="noopener"
              className="block bg-background overflow-hidden relative group"
            >
              <img
                src={igFeed}
                alt="Feed do Instagram @studiofitpiripiri"
                loading="lazy"
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="size-10 text-foreground" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-32 px-6 md:px-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 flex-wrap gap-6">
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-chrome/60 mb-6">
                [08] — Journal
              </div>
              <h2 className="font-display text-5xl md:text-7xl uppercase italic leading-[0.9]">
                Journal.
              </h2>
            </div>
            <a
              href="#"
              className="font-mono text-xs uppercase tracking-widest text-chrome hover:text-foreground transition-colors flex items-center gap-2"
            >
              Ver todos <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {posts.map((p, i) => (
              <article
                key={i}
                className="bg-background p-8 hover:bg-graphite transition-colors cursor-pointer group"
              >
                <div className="flex justify-between items-center mb-12">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-chrome/60">
                    {p.tag}
                  </span>
                  <span className="font-mono text-[10px] text-chrome/40">{p.read}</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl uppercase leading-[1] mb-8 group-hover:text-chrome transition-colors">
                  {p.title}
                </h3>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-chrome">
                  Ler <ArrowRight className="size-3" />
                </div>
              </article>
            ))}
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
          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl uppercase italic mb-12 tracking-tighter leading-[0.85]">
            Comece a evoluir.<br />Build the Machine.
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            Junte-se ao ecossistema G-Force. Treinadores, atletas e a próxima geração de profissionais de
            elite começam aqui.
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
                <li><a href="#mentor" className="hover:text-chrome transition-colors">GF Mentor</a></li>
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
                <li><a href="#blog" className="hover:text-chrome transition-colors">Journal</a></li>
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
                <li className="text-muted-foreground">Teresina, PI — Brasil</li>
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
