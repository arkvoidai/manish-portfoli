import { ArrowUpRight } from "lucide-react";

type Project = {
  tag: string;
  title: string;
  url: string;
  href: string;
  description: string;
  tech: string[];
};

const projects: Project[] = [
  {
    tag: "B2B SaaS · Live in Production",
    title: "Arkvoid",
    url: "arkvoid.com",
    href: "https://arkvoid.com",
    description:
      "An autonomous AI agent compliance layer built for enterprise governance. Monitors, tracks, and enforces EU AI Act guidelines for background corporate AI agents. Full OAuth 2.0 authentication mesh, Supabase relational schema, Razorpay production payment processing with server-to-server webhook verification, and custom Next.js middleware for multi-domain routing on Vercel.",
    tech: ["Next.js", "Supabase", "Razorpay", "Google OAuth", "Vercel"],
  },
  {
    tag: "AI Research Tool · Live in Production",
    title: "Apeiron AI",
    url: "apeironai.pro",
    href: "https://apeironai.pro",
    description:
      "A scientific research intelligence platform that ingests unstructured text and transforms it into structured analytical profiles using open-weights language models. Mistral AI API server-side pipeline, advanced prompt engineering via Google AI Studio, backend orchestration loops that parse model payloads and route structured data cleanly to the frontend.",
    tech: ["Mistral AI", "Google AI Studio", "Next.js", "Supabase"],
  },
];

export function Projects() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="reveal font-serif text-4xl md:text-6xl tracking-tight">
          What I've <span className="italic">Shipped</span>
        </h2>
        <div className="mt-14 grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="reveal group relative bg-card rounded-2xl border border-border p-7 md:p-9 card-hover overflow-hidden flex flex-col"
              data-delay={i * 150}
            >
              <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[color:var(--accent)] scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300" />
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {p.tag}
                </span>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-[color:var(--surface)] border border-border text-foreground/80">
                  {p.url}
                </span>
              </div>
              <h3 className="font-serif text-4xl md:text-5xl mt-5 tracking-tight">{p.title}</h3>
              <p className="mt-5 text-foreground/75 leading-relaxed text-[15px]">{p.description}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-[color:var(--surface)] text-foreground/70 border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-[color:var(--accent-hover)] transition-colors"
              >
                Visit Live Site
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
