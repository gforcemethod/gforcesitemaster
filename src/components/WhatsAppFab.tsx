import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/5586000000000"
      target="_blank"
      rel="noopener"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-[100] size-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-black/50 hover:scale-110 transition-transform"
    >
      <MessageCircle className="size-6 text-white" strokeWidth={2.5} />
    </a>
  );
}
