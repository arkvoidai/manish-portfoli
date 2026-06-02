export function Hero() {
  return (
    <section id="top" className="relative pt-36 md:pt-44 pb-20 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-8">
        <h1
          className="reveal font-serif text-foreground leading-[1.02] tracking-tight text-[44px] sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          I build AI systems.
          <br />
          <span className="italic text-[color:var(--accent)]">From a smartphone.</span>
        </h1>

        <p
          className="reveal mt-7 max-w-2xl text-base md:text-lg text-muted-foreground font-light leading-relaxed"
          data-delay="120"
        >
          No laptop. No CS degree. Two live products in production. Based in HSR Layout, Bengaluru.
        </p>

        <div className="reveal mt-9 flex flex-wrap items-center gap-3" data-delay="220">
          <a
            href="#work"
            className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-[color:var(--accent)] text-[color:var(--accent-foreground)] font-medium text-sm hover:bg-[color:var(--accent-hover)] hover:scale-[1.02] transition-all"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-12 px-6 rounded-full border border-border text-foreground font-medium text-sm hover:border-foreground/40 hover:scale-[1.02] transition-all"
          >
            Get in Touch
          </a>
        </div>

        <div className="reveal mt-12" data-delay="320">
          <div className="h-px bg-border w-full max-w-xl" />
          <p className="mt-5 text-sm text-muted-foreground tracking-wide">
            2 live products <span className="mx-2 text-border">·</span> 0 laptops used
            <span className="mx-2 text-border">·</span> Moving to Bengaluru June 20
          </p>
        </div>
      </div>
    </section>
  );
}
