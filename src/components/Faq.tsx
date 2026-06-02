import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const items = [
  {
    q: "O que é o G-Force Hybrid Training Method?",
    a: "Uma metodologia oficial de treinamento híbrido que integra endurance, força, condicionamento e resistência em um único sistema de alta performance, formando atletas e treinadores de elite.",
  },
  {
    q: "Para quem é a certificação GF Trainer?",
    a: "Para personal trainers, preparadores físicos e profissionais de educação física que buscam dominar a metodologia híbrida e elevar o nível técnico, comercial e de autoridade no mercado.",
  },
  {
    q: "Qual a diferença entre GF Trainer e GF Mentor?",
    a: "GF Trainer é a certificação técnica na metodologia. GF Mentor é a mentoria premium focada em posicionamento, marca pessoal e escala do negócio para treinadores que já operam no alto padrão.",
  },
  {
    q: "Preciso ser atleta para treinar no Studio Fit?",
    a: "Não. Os sistemas são escaláveis para todos os níveis, do iniciante motivado ao competidor experiente. O método é progressivo e individualizado.",
  },
  {
    q: "Como participo da Extreme Race?",
    a: "As inscrições abrem em janelas oficiais e são limitadas. Cadastre-se na lista de prioridade através do CTA da seção de eventos para receber o aviso na primeira janela.",
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
