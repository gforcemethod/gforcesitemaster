import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const items = [
  {
    q: "O que é o G-Force Hybrid Training Method?",
    a: "Uma metodologia oficial de treinamento híbrido que integra endurance, força, condicionamento e resistência em um único sistema de alta performance, formando atletas e treinadores de elite.",
  },
  {
    q: "Qual a diferença entre GF Trainer e G-Force System?",
    a: "GF Trainer é a certificação técnica na metodologia. O G-FORCE SYSTEM é um sistema de implantação, formação e suporte desenvolvido para profissionais de Educação Física e empreendedores que desejam criar, estruturar ou transformar um Studio, Box ou Centro de Treinamento em uma operação de Treinamento Híbrido, utilizando a metodologia G-FORCE.",
  },
  {
    q: "Para quem é o G-Force System?",
    a: "Para profissionais de Educação Física, personal trainers, proprietários de Studios, empreendedores do fitness, gestores de Centros de Treinamento, profissionais que desejam abrir seu primeiro Centro e profissionais que desejam transformar sua estrutura atual em um Centro de Treinamento Híbrido.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <button
            key={i}
            onClick={() => setOpen(isOpen ? null : i)}
            className="w-full text-left py-8 group flex gap-6 items-start hover:bg-white/[0.02] transition-colors px-2"
          >
            <span className="font-mono text-[10px] text-chrome/40 mt-2 shrink-0">[{String(i + 1).padStart(2, "0")}]</span>
            <div className="flex-1">
              <div className="flex justify-between items-center gap-6">
                <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tight">{item.q}</h3>
                {isOpen ? <Minus className="size-5 shrink-0 text-chrome" /> : <Plus className="size-5 shrink-0 text-chrome" />}
              </div>
              <div
                className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="text-muted-foreground pt-4 max-w-2xl leading-relaxed">{item.a}</p>
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
