import { MessageCircle, Mail } from "lucide-react";

export function Availability() {
  return (
    <section className="py-20 md:py-28 bg-[color:var(--accent)]">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <h2 className="reveal font-serif text-3xl md:text-5xl tracking-tight text-[#0a0a0a] max-w-3xl leading-tight">
          Open to Opportunities — <span className="italic">Bengaluru, June 2025</span>
        </h2>
        <p className="reveal mt-6 max-w-3xl text-[#0a0a0a]/85 text-base md:text-lg leading-relaxed" data-delay="100">
          Moving permanently to HSR Layout on June 20. Looking to join an early-stage AI startup, D2C brand, or tech product team as AI Product Operations Specialist, Marketplace Analyst, or Technical MVP Builder. Day 1 ready.
        </p>
        <div className="reveal mt-9 flex flex-wrap gap-3" data-delay="180">
          <a
            href="https://wa.me/918822310026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#0a0a0a] text-white text-sm font-medium hover:scale-[1.02] transition-transform"
          >
            <MessageCircle size={16} /> WhatsApp Me
          </a>
          <a
            href="mailto:manisharkvoid@gmail.com"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-white text-[#0a0a0a] text-sm font-medium border border-[#0a0a0a]/10 hover:scale-[1.02] transition-transform"
          >
            <Mail size={16} /> Email Me
          </a>
        </div>
      </div>
    </section>
  );
}
