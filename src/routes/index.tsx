import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { Projects } from "@/components/portfolio/Projects";
import { Stack } from "@/components/portfolio/Stack";
import { Story } from "@/components/portfolio/Story";
import { Availability } from "@/components/portfolio/Availability";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { useReveal } from "@/hooks/use-reveal";

const title = "Manish Talukdar — AI Systems Integrator & Full-Stack Builder | Bengaluru";
const description =
  "Self-taught AI builder from Bengaluru. Built and deployed two live AI products from a smartphone. Expert in Next.js, Supabase, Mistral AI, Claude API, Razorpay. Open to AI startups in HSR Layout.";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Manish Talukdar",
  jobTitle: "AI Systems Integrator & Full-Stack Builder",
  url: "https://manishtalukdar.com",
  email: "mailto:manisharkvoid@gmail.com",
  telephone: "+91-8822310026",
  address: {
    "@type": "PostalAddress",
    addressLocality: "HSR Layout, Bengaluru",
    addressCountry: "IN",
  },
  sameAs: [
    "https://linkedin.com/in/manish-talukdar-a76b4533a",
    "https://github.com/arkvoidai",
  ],
  knowsAbout: [
    "Next.js",
    "Supabase",
    "Mistral AI",
    "Claude API",
    "Razorpay",
    "Google OAuth 2.0",
    "AI Systems Integration",
  ],
  worksFor: [
    { "@type": "Organization", name: "Arkvoid", url: "https://arkvoid.com" },
    { "@type": "Organization", name: "Apeiron AI", url: "https://apeironai.pro" },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(personJsonLd),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Projects />
      <Stack />
      <Story />
      <Availability />
      <Contact />
      <Footer />
    </main>
  );
}
