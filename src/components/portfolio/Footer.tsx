import { Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[color:var(--surface)]">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-6 items-center text-sm text-foreground/75">
          <div className="md:text-left text-center">Manish Talukdar · HSR Layout, Bengaluru</div>
          <div className="text-center font-serif italic text-base">
            Built from a smartphone. No shortcuts on quality.
          </div>
          <div className="flex md:justify-end justify-center gap-4">
            <a
              href="https://linkedin.com/in/manish-talukdar-a76b4533a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-foreground/40 hover:text-[color:var(--accent-hover)] transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://github.com/arkvoidai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-foreground/40 hover:text-[color:var(--accent-hover)] transition-colors"
            >
              <Github size={16} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © 2025 Manish Talukdar. Available for hire.
        </div>
      </div>
    </footer>
  );
}
