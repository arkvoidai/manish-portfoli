const items = [
  "Next.js", "Supabase", "Mistral AI", "Claude API", "Razorpay",
  "Google OAuth 2.0", "Google Cloud IAM", "Vercel", "GitHub",
  "TypeScript", "EU AI Act Compliance", "Amazon Seller Central",
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <section className="bg-[color:var(--surface)] border-y border-border py-6 overflow-hidden">
      <div className="marquee-track flex whitespace-nowrap" style={{ width: "max-content" }}>
        {loop.map((it, i) => (
          <span
            key={i}
            className="font-sans flex items-center"
            style={{ fontSize: 13, fontWeight: 500, color: "var(--muted-foreground)" }}
          >
            <span className="px-6">{it}</span>
            <span className="text-[color:var(--accent)]">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}
