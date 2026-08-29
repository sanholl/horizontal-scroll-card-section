import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { initData } from "./data";

const MOBILE_BREAKPOINT = 1024;

export function HorizontalSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackWrapperRef = useRef<HTMLDivElement>(null);

  const [pinTop, setPinTop] = useState(0);
  const [pinHeight, setPinHeight] = useState(0);
  const [wrapperHeight, setWrapperHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    function measure() {
      const mobile = window.innerWidth <= MOBILE_BREAKPOINT;
      setIsMobile(mobile);

      if (mobile) return;
      if (!pinRef.current || !trackWrapperRef.current) return;

      const ph = pinRef.current.offsetHeight;
      const distance = trackWrapperRef.current.scrollWidth - trackWrapperRef.current.clientWidth;

      setPinHeight(ph);
      setPinTop(window.innerHeight / 2 - ph / 2);
      setWrapperHeight(ph + Math.max(distance, 0));
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let ticking = false;

    function updateScrollLeft() {
      if (!wrapperRef.current || !trackWrapperRef.current) return;

      const rect = wrapperRef.current.getBoundingClientRect();
      const scrollableRange = wrapperHeight - pinHeight;
      if (scrollableRange <= 0) return;

      const scrolledIntoSection = pinTop - rect.top;
      const progress = Math.min(Math.max(scrolledIntoSection / scrollableRange, 0), 1);

      trackWrapperRef.current.scrollLeft = progress * scrollableRange;
    }

    function handleScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateScrollLeft();
        ticking = false;
      });
    }

    updateScrollLeft();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile, wrapperHeight, pinTop, pinHeight]);

  return (
    <div
      className="horizontal-wrapper"
      ref={wrapperRef}
      style={{ height: isMobile ? undefined : wrapperHeight }}
    >
      <div
        className="sticky-pin"
        ref={pinRef}
        style={{ top: isMobile ? undefined : pinTop }}
      >
        <div className="track-wrapper" ref={trackWrapperRef}>
          <div className="track">
            {initData.map((section) => (
              <div key={section.id} className="section-wrapper">
                <div className="section-heading">
                  <h2>{section.title}</h2>
                  <p>{section.subtitle}</p>
                  <a href={section.moreHref}>더보기</a>
                </div>

                <div className="card-wrapper">
                  {section.cards.map((card) => (
                    <a key={card.id} href={card.href} className="card-item">
                      <div className="card-img">
                        <img src={card.image.src} alt={card.image.alt} />
                      </div>
                      <div className="card-content">
                        <span>{card.category}</span>
                        <h3>{card.title}</h3>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
