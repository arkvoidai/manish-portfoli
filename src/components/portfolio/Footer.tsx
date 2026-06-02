export function Footer() {
  return (
    <footer className="border-t border-border bg-[color:var(--surface)]">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-6 items-center text-sm text-foreground/75">
          <div className="md:text-left text-center">Manish Talukdar · HSR Layout, Bengaluru</div>
          <div className="text-center font-serif italic text-base">
            Built on a smartphone. Shipped to production.
          </div>
          <div className="flex md:justify-end justify-center gap-6">
            <a
              href="https://linkedin.com/in/manish-talukdar-a76b4533a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[color:var(--accent-hover)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/arkvoidai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[color:var(--accent-hover)] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © 2025 Manish Talukdar · Available for hire ·{" "}
          <a href="mailto:manisharkvoid@gmail.com" className="hover:text-[color:var(--accent-hover)]">manisharkvoid@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}
