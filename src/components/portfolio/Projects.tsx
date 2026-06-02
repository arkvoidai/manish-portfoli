import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Carousel } from "./Carousel";

type Project = {
  tag: string;
  tagBg: string;
  tagColor: string;
  title: string;
  url?: string;
  href?: string;
  deployments?: string;
  description: string;
  more?: string;
  tech: string[];
  cta?: string;
  closer?: string;
};

const projects: Project[] = [
  {
    tag: "B2B SaaS · Live in Production",
    tagBg: "#FEF3C7", tagColor: "#92400E",
    title: "Arkvoid",
    url: "arkvoid.com",
    href: "https://arkvoid.com",
    deployments: "116 deployments",
    description:
      "When I started building Arkvoid, I did not know what OAuth was. I figured it out reading documentation at midnight on my phone.\n\nToday Arkvoid is a live B2B compliance layer helping companies keep their autonomous AI agents legally safe under the EU AI Act.\n\nI engineered the authentication system using Google Cloud OAuth 2.0 — real token flows, session management, secure Supabase storage. Designed the database schema from scratch: tenant profiles, audit trails, policy records, all cross-mapped with foreign keys and Row-Level Security. The payment layer runs Razorpay in full live production mode with server-to-server webhook endpoints that verify every transaction signature before touching the database. No client-side trust. Everything verified server-side.",
    more:
      "Right now I am solving multi-domain routing — mapping client subdomains to user dashboards using custom Next.js middleware that rewrites URL paths on Vercel at runtime. I debug this using Vercel logs, my phone, and pure stubbornness.",
    tech: ["Next.js", "Supabase", "Razorpay", "Google OAuth", "Vercel", "TypeScript"],
    cta: "Visit arkvoid.com →",
  },
  {
    tag: "AI Research Tool · Live in Production",
    tagBg: "#E6FBF5", tagColor: "#065F46",
    title: "Apeiron AI",
    url: "apeironai.pro",
    href: "https://apeironai.pro",
    deployments: "61 deployments",
    description:
      "Apeiron AI started as one question: can an LLM turn messy research notes into something structured and useful?\n\nThe answer is yes — but only if you build the pipeline correctly.\n\nI connected a direct server-side channel to the Mistral AI API, then spent days inside Google AI Studio engineering the system prompt until the model stopped returning broken markdown and started returning clean, structured data every single time. Backend functions intercept raw model responses, process the variables, and route structured parameters to the frontend. No token crashes. No half-rendered outputs. No UI breaking.",
    more:
      "The hypothesis engine on Apeiron calculates required sample sizes using Cohen's formulas, runs power analysis, and lets researchers pre-register studies with timestamped records before collecting a single data point. I built this from a phone, using Google AI Studio as my development environment.",
    tech: ["Mistral AI", "Google AI Studio", "Next.js", "Supabase", "TypeScript"],
    cta: "Visit apeironai.pro →",
  },
  {
    tag: "Before Code · Operations",
    tagBg: "#F5F3F0", tagColor: "#57534E",
    title: "1 Year Running a Real Business",
    description:
      "Before I wrote a single line of production code, I spent a year managing e-commerce operations for a handicrafts business on Amazon.\n\nI ran the Amazon Seller Central storefront end-to-end. Wrote and optimised product listings. Processed inventory flat files in bulk. Tracked velocity metrics in Excel. Learned what happens when a listing breaks at midnight and there is no one else to fix it.\n\nThis is why the products I build work like businesses, not like side projects. I understand unit economics, operational timing, and what it actually costs when something goes down.",
    tech: ["Amazon Seller Central", "MS Excel", "Inventory Management", "Business Operations"],
    closer: "This background is why I build differently.",
  },
];

export function Projects() {
  return (
    <section id="work" className="py-24 md:py-32">
      <Carousel
        ariaLabel="Projects"
        title={
          <h2 className="reveal font-serif text-4xl md:text-6xl tracking-tight">
            What I've <span className="italic">Shipped</span>
          </h2>
        }
      >
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </Carousel>
    </section>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const [open, setOpen] = useState(false);
  return (
    <article
      className="group relative overflow-hidden flex flex-col h-full"
    >
      <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[color:var(--accent)] scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300" />
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <span
          className="text-[11px] uppercase tracking-[0.14em] font-medium px-2.5 py-1 rounded-md"
          style={{ background: p.tagBg, color: p.tagColor }}
        >
          {p.tag}
        </span>
        {p.url && (
          <span className="text-xs font-mono px-3 py-1 rounded-full border border-border text-foreground/80">
            {p.url}
          </span>
        )}
      </div>
      <h3 className="font-serif mt-5 tracking-tight" style={{ fontSize: 36, lineHeight: 1.1 }}>
        {p.title}
      </h3>
      {p.deployments && (
        <span className="mt-2 text-xs text-muted-foreground">{p.deployments}</span>
      )}
      <p className="mt-5 text-foreground/80 leading-relaxed text-[15px] whitespace-pre-line">
        {p.description}
      </p>

      {p.more && (
        <>
          <div
            style={{
              maxHeight: open ? 400 : 0,
              transition: "max-height 300ms ease, opacity 300ms ease, margin 300ms ease",
              opacity: open ? 1 : 0,
              overflow: "hidden",
              marginTop: open ? 16 : 0,
            }}
          >
            <p className="text-foreground/80 leading-relaxed text-[15px]">{p.more}</p>
          </div>
          <button
            onClick={() => setOpen((o) => !o)}
            className="mt-3 inline-flex items-center gap-1 text-[13px] font-medium text-[color:var(--accent-hover)] hover:text-[color:var(--accent)] self-start"
          >
            {open ? "Read less" : "Read more"}
            <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
        </>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-[color:var(--surface)] text-foreground/70 border border-border">
            {t}
          </span>
        ))}
      </div>

      {p.href && p.cta && (
        <a
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--accent-hover)] hover:text-[color:var(--accent)] self-start"
        >
          {p.cta}
          <ArrowUpRight size={16} />
        </a>
      )}
      {p.closer && (
        <p className="mt-8 font-serif italic text-base text-foreground/80">{p.closer}</p>
      )}
    </article>
  );
}
