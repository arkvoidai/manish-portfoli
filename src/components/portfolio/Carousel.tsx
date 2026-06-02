import { useCallback, useEffect, useRef, useState, ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Props = {
  children: ReactNode[];
  ariaLabel: string;
  title: ReactNode;
  subtitle?: ReactNode;
};

const GAP = 20;
const TRANSITION = "transform 420ms cubic-bezier(0.4, 0, 0.2, 1)";

export function Carousel({ children, ariaLabel, title, subtitle }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const total = children.length;

  const getOffset = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return 0;
    const cards = track.querySelectorAll<HTMLElement>(".carousel-card");
    let offset = 0;
    for (let k = 0; k < i && k < cards.length; k++) {
      offset += cards[k].getBoundingClientRect().width + GAP;
    }
    return offset;
  }, []);

  const apply = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transform = `translateX(-${getOffset(i)}px)`;
  }, [getOffset]);

  const goTo = useCallback((i: number) => {
    const clamped = Math.max(0, Math.min(i, total - 1));
    setIndex(clamped);
    apply(clamped);
  }, [apply, total]);

  // Resize: snap without animation, then re-enable
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const track = trackRef.current;
        if (!track) return;
        track.style.transition = "none";
        apply(index);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (trackRef.current) trackRef.current.style.transition = TRANSITION;
          });
        });
      }, 100);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(timer);
    };
  }, [apply, index]);

  // Touch handlers
  const touch = useRef({ x: 0, y: 0, t: 0, swiping: false });
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onStart = (e: TouchEvent) => {
      touch.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        t: Date.now(),
        swiping: false,
      };
    };
    const onMove = (e: TouchEvent) => {
      const dx = Math.abs(e.touches[0].clientX - touch.current.x);
      const dy = Math.abs(e.touches[0].clientY - touch.current.y);
      if (dx > dy && dx > 8) {
        touch.current.swiping = true;
        e.preventDefault();
      }
    };
    const onEnd = (e: TouchEvent) => {
      const deltaX = touch.current.x - e.changedTouches[0].clientX;
      const deltaY = Math.abs(touch.current.y - e.changedTouches[0].clientY);
      const elapsed = Math.max(1, Date.now() - touch.current.t);
      const velocity = Math.abs(deltaX) / elapsed;
      const horizontal = Math.abs(deltaX) > deltaY;
      const quickFlick = velocity > 0.3 && Math.abs(deltaX) > 20;
      const slowDrag = Math.abs(deltaX) > 60;
      if (horizontal && (quickFlick || slowDrag)) {
        goTo(index + (deltaX > 0 ? 1 : -1));
      }
      touch.current.swiping = false;
    };

    track.addEventListener("touchstart", onStart, { passive: true });
    track.addEventListener("touchmove", onMove, { passive: false });
    track.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      track.removeEventListener("touchstart", onStart);
      track.removeEventListener("touchmove", onMove);
      track.removeEventListener("touchend", onEnd);
    };
  }, [goTo, index]);

  const atStart = index === 0;
  const atEnd = index >= total - 1;

  return (
    <section className="carousel-container" aria-label={ariaLabel}>
      <div className="carousel-header">
        <div className="flex-1 min-w-0">
          {title}
          {subtitle}
        </div>
        <div className="carousel-arrows">
          <button
            type="button"
            aria-label="Previous"
            disabled={atStart}
            onClick={() => goTo(index - 1)}
            className={`carousel-arrow ${atStart ? "disabled" : ""}`}
          >
            <ArrowLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Next"
            disabled={atEnd}
            onClick={() => goTo(index + 1)}
            className={`carousel-arrow ${atEnd ? "disabled" : ""}`}
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <div className="carousel-viewport">
        <div ref={trackRef} className="carousel-track">
          {children.map((c, i) => (
            <div key={i} className="carousel-card">
              {c}
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-dots" role="tablist">
        {children.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-label={`Go to slide ${i + 1}`}
            aria-selected={i === index}
            onClick={() => goTo(i)}
            className={`dot ${i === index ? "active" : ""}`}
          />
        ))}
      </div>
    </section>
  );
}
