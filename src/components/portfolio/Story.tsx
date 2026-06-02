import { useCountUp } from "@/hooks/use-count-up";

function StatBox({ value, label }: { value: number; label: string }) {
  const { ref, value: v } = useCountUp(value);
  return (
    <div className="flex-1 py-4 md:py-2">
      <div ref={ref} className="font-serif text-[color:var(--accent)]" style={{ fontSize: 48, lineHeight: 1 }}>
        {v}
      </div>
      <div className="mt-3 text-[12px] uppercase tracking-[0.16em] text-muted-foreground">{label}</div>
    </div>
  );
}

export function Story() {
  return (
    <section id="story" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="reveal font-serif text-4xl md:text-6xl tracking-tight max-w-3xl">
          No Degree. No Laptop. <span className="italic">Just Architecture.</span>
        </h2>

        <div className="reveal mt-12 flex flex-col md:flex-row md:divide-x divide-border" data-delay="120">
          <StatBox value={116} label="Arkvoid Deployments" />
          <div className="md:pl-8"><StatBox value={61} label="Apeiron Deployments" /></div>
          <div className="md:pl-8"><StatBox value={1} label="Device Used" /></div>
        </div>

        <div className="mt-16 grid md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-5">
            <blockquote className="reveal font-serif italic text-2xl md:text-3xl leading-snug tracking-tight text-foreground border-l-2 border-[color:var(--accent)] pl-6">
              The battery was at 13%. I had 74 tabs open. The webhook was failing. I fixed it anyway.
            </blockquote>
          </div>
          <div className="md:col-span-7 space-y-6 text-[16px] md:text-[17px] leading-relaxed text-foreground/80">
            <p className="reveal" data-delay="80">
              I am a Class 12 Commerce graduate from Assam. I have never studied computer science. What I have done is spend the last year building real things, breaking them, reading the error messages, and figuring out why.
              <br /><br />
              I do not memorize syntax. I think in systems. I understand what needs to happen — data needs to move from point A to point B securely, reliably, at scale — and I engineer the path to make it work.
            </p>
            <p className="reveal" data-delay="160">
              Both arkvoid.com and apeironai.pro are live. Real users. Real infrastructure. Real payment processing.
              <br /><br />
              I built them entirely from a smartphone. Not as a stunt. Not to prove a point. Because it was the only tool I had — and I refused to wait until I had something better. The phone forced me to be precise. I could not rely on a desktop IDE to catch errors. I had to understand what I was building well enough to get it right.
            </p>
            <p className="reveal" data-delay="240">
              Before this, I spent a year in e-commerce operations — managing Amazon storefronts, inventory pipelines, and business metrics. I learned how a real business breathes at ground level.
              <br /><br />
              That is not separate from my technical work. It is the reason everything I build functions as a business, not just as code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
