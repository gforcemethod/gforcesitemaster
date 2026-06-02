import logo from "@/assets/gforce-logo.png";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border/40 px-6 md:px-10 py-5 flex justify-between items-center">
      <a href="#top" className="flex items-center" aria-label="G-Force Hybrid Training Method">
        <img
          src={logo}
          alt="G-Force Hybrid Training Method"
          className="h-6 md:h-7 w-auto object-contain"
        />
      </a>
      <div className="hidden md:flex items-center gap-8 text-[10px] font-mono tracking-[0.2em] uppercase text-foreground">
        <a href="#method" className="hover:text-chrome transition-colors">Method</a>
        <a href="#trainer" className="hover:text-chrome transition-colors">Trainer</a>
        <a href="#mentor" className="hover:text-chrome transition-colors">Mentor</a>
        <a href="#systems" className="hover:text-chrome transition-colors">Systems</a>
        <a href="#events" className="hover:text-chrome transition-colors">Events</a>
        <a href="#studio" className="hover:text-chrome transition-colors">Studio</a>
        <a href="#blog" className="hover:text-chrome transition-colors">Blog</a>
        <a
          href="#cta"
          className="ml-2 inline-flex items-center gap-2 border border-foreground/60 px-4 py-2.5 hover:bg-foreground hover:text-background transition-colors"
        >
          Fazer Parte <span aria-hidden>→</span>
        </a>
      </div>
    </nav>
  );
}
