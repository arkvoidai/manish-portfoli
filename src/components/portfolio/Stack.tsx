import { Carousel } from "./Carousel";

type Item = { icon: string; cat: string; name: string; desc: string };

const items: Item[] = [
  { icon: "▣", cat: "FRONTEND", name: "Next.js + Vercel", desc: "App Router architecture, custom server rewrite middleware, dynamic routing. I write the middleware that intercepts HTTP requests and rewrites URL paths at runtime — not after." },
  { icon: "◈", cat: "DATABASE", name: "Supabase", desc: "Hand-designed relational schemas from scratch. Foreign key cross-mapping, Row-Level Security policies per user role, Auth mechanics. I design the tables, the relationships, and the access rules — not a GUI wizard." },
  { icon: "◎", cat: "AI PIPELINES", name: "Mistral AI + Claude API", desc: "Server-side AI pipelines that process unstructured data into structured outputs. Google AI Studio for prompt engineering — forcing models to return clean data, not broken markdown." },
  { icon: "⬡", cat: "AUTH & SECURITY", name: "Google OAuth 2.0", desc: "Token issuance, verification, session storage — built from the Google Cloud Console, not a library shortcut. IAM configuration, production secret management. Real security architecture." },
  { icon: "◆", cat: "PAYMENTS", name: "Razorpay Production", desc: "Live payment processing — not sandbox, not test mode. Server-to-server webhook listeners that read and verify cryptographic signatures. Database tiers only update after verification. Zero client-side trust." },
  { icon: "⬡", cat: "INFRASTRUCTURE", name: "GitHub + Vercel CI/CD", desc: "Version control across distributed builds, deployment pipelines, custom domain configuration, edge middleware. All monitored and managed via mobile browser and Vercel dashboard." },
];

export function Stack() {
  return (
    <section id="stack" className="py-24 md:py-32 bg-[color:var(--surface)] border-y border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-8 mb-10">
        <h2 className="reveal font-serif text-4xl md:text-6xl tracking-tight">
          The <span className="italic">Engine</span>
        </h2>
        <p className="reveal mt-4 text-base md:text-lg text-muted-foreground" data-delay="100">
          Everything I use is production-grade. Nothing is tutorial-level.
        </p>
      </div>
      <Carousel ariaLabel="Tech stack">
        {items.map((it) => <StackCard key={it.name} it={it} />)}
      </Carousel>
    </section>
  );
}

function StackCard({ it }: { it: Item }) {
  return (
    <div
      className="group relative bg-white rounded-xl border border-border p-6 transition-all duration-220 hover:shadow-[var(--shadow-card-hover)]"
      style={{ width: "min(75vw, 300px)", height: "100%", transition: "transform 220ms ease, box-shadow 220ms ease" }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <span className="absolute left-0 right-0 top-0 h-[2px] bg-[color:var(--accent)] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
      <div className="w-10 h-10 rounded-lg bg-[color:var(--surface)] border border-border flex items-center justify-center text-[color:var(--accent)] text-lg">
        {it.icon}
      </div>
      <h3 className="mt-5 text-[11px] uppercase tracking-[0.16em] font-medium text-muted-foreground">{it.cat}</h3>
      <p className="mt-1.5 font-serif text-2xl tracking-tight">{it.name}</p>
      <p className="mt-3 text-[14px] text-foreground/75 leading-relaxed">{it.desc}</p>
    </div>
  );
}
