import { useState } from "react";

type Errors = { name?: string; email?: string; message?: string };

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Please add your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Enter a valid email";
    if (form.message.trim().length < 5) e.message = "Tell me a bit more";
    return e;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:manisharkvoid@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const field =
    "w-full h-12 px-4 rounded-lg bg-white border border-border text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-[color:var(--accent)] transition-colors";

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="reveal font-serif text-4xl md:text-6xl tracking-tight">
          Let's Build <span className="italic">Something</span>
        </h2>
        <p className="reveal mt-4 text-base md:text-lg text-muted-foreground" data-delay="80">
          I reply within the hour. Every time.
        </p>
        <div className="mt-14 grid md:grid-cols-2 gap-12 md:gap-20">
          <div className="reveal space-y-6">
            <Detail label="Email" value="manisharkvoid@gmail.com" href="mailto:manisharkvoid@gmail.com" />
            <Detail label="Phone / WhatsApp" value="+91 8822310026" href="https://wa.me/918822310026" />
            <Detail
              label="LinkedIn"
              value="linkedin.com/in/manish-talukdar-a76b4533a"
              href="https://linkedin.com/in/manish-talukdar-a76b4533a"
            />
            <Detail label="GitHub" value="github.com/arkvoidai" href="https://github.com/arkvoidai" />
            <Detail
              label="Location"
              value="HSR Layout, Bengaluru — available at BHIVE, WeWork, 315 Work Avenue from June 22"
            />
          </div>

          <form onSubmit={onSubmit} className="reveal space-y-4" data-delay="120" noValidate>
            <div>
              <label className="block text-xs uppercase tracking-[0.14em] text-muted-foreground mb-2">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={field}
                placeholder="Your name"
              />
              {errors.name && <p className="text-xs text-red-600 mt-1.5">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.14em] text-muted-foreground mb-2">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={field}
                placeholder="Your work email"
              />
              {errors.email && <p className="text-xs text-red-600 mt-1.5">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.14em] text-muted-foreground mb-2">Message</label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${field} h-auto py-3 resize-none`}
                placeholder="What are you building? What is the problem you are trying to solve?"
              />
              {errors.message && <p className="text-xs text-red-600 mt-1.5">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="btn-press inline-flex items-center justify-center h-12 px-7 rounded-full bg-[color:var(--accent)] text-[color:var(--accent-foreground)] font-medium text-sm hover:bg-[color:var(--accent-hover)]"
            >
              {sent ? "Opening your mail app…" : "Send Message →"}
            </button>
            <p className="text-[13px] italic text-muted-foreground">
              I read every message personally. No autoresponder. No assistant.
            </p>
          </form>

        </div>
      </div>
    </section>
  );
}

function Detail({ label, value, href }: { label: string; value: string; href?: string }) {
  const inner = <span className="text-foreground text-[15px] md:text-base break-words">{value}</span>;
  return (
    <div className="border-b border-border pb-5">
      <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-1.5">{label}</div>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--accent-hover)] transition-colors">
          {inner}
        </a>
      ) : (
        inner
      )}
    </div>
  );
}
