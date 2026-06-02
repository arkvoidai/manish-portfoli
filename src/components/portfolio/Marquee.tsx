const items = [
  "Next.js",
  "Supabase",
  "Mistral AI",
  "Claude API",
  "Razorpay",
  "Google OAuth 2.0",
  "Google Cloud IAM",
  "Vercel",
  "GitHub",
  "Amazon Seller Central",
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <section className="bg-[color:var(--surface)] border-y border-border py-7 overflow-hidden">
      <div
        className="flex gap-12 whitespace-nowrap will-change-transform"
        style={{ animation: "marquee 38s linear infinite", width: "max-content" }}
      >
        {loop.map((it, i) => (
          <span
            key={i}
            className="font-sans text-sm md:text-base text-foreground/70 tracking-wide flex items-center gap-12"
          >
            {it}
            <span className="text-[color:var(--accent)]/70">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}
