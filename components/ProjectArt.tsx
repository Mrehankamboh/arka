export function ProjectArt({ name, tall = false }: { name: string; tall?: boolean }) {
  const height = tall ? "h-72 md:h-[28rem]" : "h-52 md:h-60";

  if (name === "Northline") {
    return (
      <div className={`relative overflow-hidden bg-[#0b1220] ${height}`} aria-hidden="true">
        <span className="absolute inset-y-8 left-[18%] w-px bg-accent/80" />
        <span className="absolute inset-y-14 left-[34%] w-px bg-white/25" />
        <span className="absolute inset-y-6 left-[52%] w-px bg-accent" />
        <span className="absolute inset-y-20 left-[70%] w-px bg-white/15" />
        <span className="absolute right-6 bottom-6 left-6 h-px bg-white/20" />
        <span className="absolute bottom-8 left-6 font-serif text-4xl text-white/80">01</span>
      </div>
    );
  }

  if (name === "Halden") {
    return (
      <div className={`relative grid place-items-center overflow-hidden bg-[#0c1018] ${height}`} aria-hidden="true">
        <span className="absolute h-40 w-40 rounded-full border border-accent/70 md:h-64 md:w-64" />
        <span className="absolute h-24 w-24 rounded-full border border-white/30 md:h-36 md:w-36" />
        <span className="h-8 w-8 rounded-full bg-accent" />
      </div>
    );
  }

  if (name === "Kite") {
    return (
      <div className={`relative overflow-hidden bg-[#0b1020] ${height}`} aria-hidden="true">
        <span className="absolute -left-8 top-10 h-14 w-[140%] -rotate-12 bg-accent" />
        <span className="absolute -left-8 top-28 h-7 w-[140%] -rotate-12 bg-white/15" />
        <span className="absolute -left-8 bottom-4 h-2.5 w-[140%] -rotate-12 bg-white/50" />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#10141c] ${height}`} aria-hidden="true">
      <span className="absolute -right-2 -bottom-8 font-serif text-[9rem] leading-none text-white/10 md:text-[14rem]">M</span>
      <span className="absolute top-1/2 right-6 left-6 h-px bg-accent" />
      <span className="absolute top-6 left-6 text-[0.7rem] tracking-[0.22em] text-muted uppercase">Archive</span>
    </div>
  );
}
