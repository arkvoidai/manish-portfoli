export function Hero() {
  const words = ["I", "build", "AI", "systems."];
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-70 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-8">
        <div
          className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-md"
          style={{ background: "#FEF3C7", color: "#92400E" }}
        >
          <span className="text-[10px]">●</span>
          <span className="text-[12px] font-medium tracking-wide">Available June 20 · HSR Layout, Bengaluru</span>
        </div>

        <h1 className="mt-7 font-serif text-foreground leading-[1.02] tracking-tight text-[44px] sm:text-6xl md:text-7xl lg:text-[88px]">
          <span className="block">
            {words.map((w, i) => (
              <span
                key={i}
                className="reveal inline-block mr-[0.22em]"
                data-delay={300 + i * 80}
              >
                {w}
              </span>
            ))}
          </span>
          <span
            className="reveal block italic text-[color:var(--accent)]"
            data-delay={300 + words.length * 80 + 120}
          >
            From a smartphone.
          </span>
        </h1>

        <p
          className="reveal mt-7 max-w-2xl text-base md:text-lg text-muted-foreground font-light leading-relaxed"
          data-delay={300 + words.length * 80 + 320}
        >
          13% battery. 74 browser tabs. Two products live in production.
          <br />
          I am Manish — and I have never used a laptop to build any of this.
        </p>

        <div className="reveal mt-9 flex flex-wrap items-center gap-3" data-delay={300 + words.length * 80 + 500}>
          <a
            href="#work"
            className="btn-press inline-flex items-center justify-center h-12 px-6 rounded-full bg-[color:var(--accent)] text-[color:var(--accent-foreground)] font-medium text-sm hover:bg-[color:var(--accent-hover)]"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="btn-press inline-flex items-center justify-center h-12 px-6 rounded-full border border-border text-foreground font-medium text-sm hover:border-foreground/40"
          >
            Get in Touch
          </a>
        </div>

        <div className="reveal mt-12" data-delay={300 + words.length * 80 + 680}>
          <div className="h-px bg-border w-full max-w-xl" />
          <p className="mt-5 text-sm text-muted-foreground tracking-wide">
            2 products shipped <span className="mx-2 text-border">·</span> 0 laptops, ever
            <span className="mx-2 text-border">·</span> Bengaluru, June 20
          </p>
        </div>
      </div>
    </section>
  );
}
