import { useEffect, useState } from "react";

function diff(target: number) {
  const t = Math.max(0, target - Date.now());
  const d = Math.floor(t / 86400000);
  const h = Math.floor((t % 86400000) / 3600000);
  const m = Math.floor((t % 3600000) / 60000);
  const s = Math.floor((t % 60000) / 1000);
  return { d, h, m, s };
}

export function Countdown({ target }: { target: Date }) {
  const [t, setT] = useState(() => diff(target.getTime()));
  useEffect(() => {
    const id = setInterval(() => setT(diff(target.getTime())), 1000);
    return () => clearInterval(id);
  }, [target]);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="font-mono text-3xl md:text-5xl tabular-nums tracking-tight text-foreground">
      {pad(t.d)}<span className="text-chrome/40">:</span>{pad(t.h)}<span className="text-chrome/40">:</span>{pad(t.m)}<span className="text-chrome/40">:</span>{pad(t.s)}
    </div>
  );
}
