import { MessageCircle, Mail } from "lucide-react";

export function Availability() {
  return (
    <section className="py-20 md:py-28 bg-[color:var(--accent)]">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <h2 className="reveal font-serif text-3xl md:text-5xl tracking-tight text-[#0a0a0a] max-w-3xl leading-tight">
          I am moving to Bengaluru on June 20.
        </h2>
        <p className="reveal mt-4 font-serif italic text-2xl md:text-3xl text-[#0a0a0a]/90" data-delay="100">
          Are you building something worth joining?
        </p>
        <div className="reveal mt-7 max-w-3xl text-[#0a0a0a]/90 text-base md:text-lg leading-relaxed space-y-4" data-delay="160">
          <p>
            I am looking for one team — a founder, a startup, a product company — where I can sit down, understand the problem deeply, and start building on Day 1.
          </p>
          <p>
            I do not need onboarding. I do not need handholding. I need an interesting problem and a desk.
          </p>
          <p className="text-sm md:text-base text-[#0a0a0a]/75">
            AI Product Operations · Technical MVP Building · Automation Systems · Marketplace Engineering
          </p>
        </div>
        <div className="reveal mt-9 flex flex-wrap gap-3" data-delay="240">
          <a
            href="https://wa.me/918822310026"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#0a0a0a] text-white text-sm font-medium"
          >
            <MessageCircle size={16} /> WhatsApp Me Now
          </a>
          <a
            href="mailto:manisharkvoid@gmail.com"
            className="btn-press inline-flex items-center gap-2 h-12 px-6 rounded-full bg-white text-[#0a0a0a] text-sm font-medium border border-[#0a0a0a]/10"
          >
            <Mail size={16} /> Send an Email
          </a>
        </div>
      </div>
    </section>
  );
}
