export function Story() {
  return (
    <section id="story" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="reveal font-serif text-4xl md:text-6xl tracking-tight max-w-3xl">
          No Degree. No Laptop. <span className="italic">Just Architecture.</span>
        </h2>
        <div className="mt-16 grid md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-5">
            <blockquote className="reveal font-serif italic text-3xl md:text-4xl leading-snug tracking-tight text-foreground">
              <span className="text-[color:var(--accent)]">"</span>I skipped syntax memorization and went straight to systems.<span className="text-[color:var(--accent)]">"</span>
            </blockquote>
          </div>
          <div className="md:col-span-7 space-y-6 text-[16px] md:text-[17px] leading-relaxed text-foreground/80">
            <p className="reveal" data-delay="80">
              Class 12 Commerce graduate. Zero formal computer science education. Instead of memorizing theory, I started building real products — and used LLMs as my compiler while I learned to think in systems.
            </p>
            <p className="reveal" data-delay="160">
              Both arkvoid.com and apeironai.pro were architected, debugged, and deployed entirely from a smartphone. No IDE. No laptop. Just resourcefulness, documentation, and an obsession with making things work.
            </p>
            <p className="reveal" data-delay="240">
              Before code, I spent a year in e-commerce operations — managing Amazon Seller Central storefronts, running inventory pipelines in Excel, and learning how real businesses move. That operational DNA is baked into every product I build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
