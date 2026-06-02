import { Layout, Database, Cpu, Shield, CreditCard, GitBranch } from "lucide-react";

const items = [
  { icon: Layout, cat: "Frontend", desc: "Next.js App Router, Vercel, Dynamic Routing" },
  { icon: Database, cat: "Database", desc: "Supabase, RLS Policies, Schema Engineering" },
  { icon: Cpu, cat: "AI Pipelines", desc: "Mistral AI, Claude API, Google AI Studio" },
  { icon: Shield, cat: "Auth & Security", desc: "Google OAuth 2.0, Cloud IAM, Secret Management" },
  { icon: CreditCard, cat: "Payments", desc: "Razorpay Production API, Async Webhooks" },
  { icon: GitBranch, cat: "Infrastructure", desc: "GitHub, Environment Builds, Middleware" },
];

export function Stack() {
  return (
    <section id="stack" className="py-24 md:py-32 bg-[color:var(--surface)] border-y border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="reveal font-serif text-4xl md:text-6xl tracking-tight">
          The <span className="italic">Engine</span>
        </h2>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-5">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <div
                key={it.cat}
                className="reveal bg-white rounded-xl border border-border p-5 md:p-6 card-hover"
                data-delay={i * 80}
              >
                <div className="w-10 h-10 rounded-lg bg-[color:var(--surface)] border border-border flex items-center justify-center text-[color:var(--accent)]">
                  <Icon size={18} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-[11px] uppercase tracking-[0.16em] font-medium text-muted-foreground">
                  {it.cat}
                </h3>
                <p className="mt-2 text-[15px] text-foreground/85 leading-snug">{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
