import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#story", label: "Story" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors ${
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-border" : "bg-white/0"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-serif text-2xl tracking-tight text-foreground">
          MT
        </a>
        <ul className="hidden md:flex items-center gap-9 text-sm text-foreground/80">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          aria-label="Open menu"
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen(true)}
        >
          <Menu size={22} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/30 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-72 bg-white border-l border-border p-6 transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-10">
            <span className="font-serif text-2xl">MT</span>
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 -mr-2">
              <X size={22} />
            </button>
          </div>
          <ul className="flex flex-col gap-6 text-lg">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-foreground hover:text-[color:var(--accent-hover)] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </header>
  );
}
