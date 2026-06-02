import { useCallback, useEffect, useRef, useState, ReactNode, KeyboardEvent } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Props = {
  children: ReactNode[];
  ariaLabel: string;
};

export function Carousel({ children, ariaLabel }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.querySelector<HTMLElement>("[data-card]");
    const step = first ? first.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
    setIndex((i) => Math.max(0, Math.min(children.length - 1, i + dir)));
  };

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); scrollByCard(1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); scrollByCard(-1); }
  };

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) scrollByCard(dx < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  return (
    <div className="relative" aria-label={ariaLabel}>
      <div className="flex justify-end gap-2 mb-5 px-6 md:px-10">
        <button
          aria-label="Previous"
          disabled={atStart}
          onClick={() => scrollByCard(-1)}
          className="w-10 h-10 rounded-full bg-white border border-border shadow-sm flex items-center justify-center hover:border-[color:var(--accent)] hover:text-[color:var(--accent-hover)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ArrowLeft size={16} />
        </button>
        <button
          aria-label="Next"
          disabled={atEnd}
          onClick={() => scrollByCard(1)}
          className="w-10 h-10 rounded-full bg-white border border-border shadow-sm flex items-center justify-center hover:border-[color:var(--accent)] hover:text-[color:var(--accent-hover)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ArrowRight size={16} />
        </button>
      </div>
      <div
        ref={trackRef}
        tabIndex={0}
        role="region"
        onKeyDown={onKey}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 md:px-10 pb-6 focus:outline-none"
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
      >
        <style>{`[role="region"]::-webkit-scrollbar{display:none}`}</style>
        {children.map((c, i) => (
          <div key={i} data-card className="snap-start shrink-0">
            {c}
          </div>
        ))}
        <div aria-hidden className="shrink-0 w-2" />
      </div>
    </div>
  );
}
