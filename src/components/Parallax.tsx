"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * 滾動視差：元素依捲動位置以不同速度位移。
 * speed > 0：比頁面捲動慢（遠景）；speed < 0：比頁面捲動快（近景）。
 */
export function Parallax({
  speed = 0.15,
  className,
  style,
  children,
}: {
  speed?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;

    let offset = 0;
    let frame = 0;
    let visible = true;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      // 扣掉目前位移，取得元素原本的位置，避免回饋抖動
      const center = rect.top - offset + rect.height / 2;
      const factor = window.innerWidth < 768 ? 0.5 : 1; // 手機上減弱效果
      offset = (center - window.innerHeight / 2) * -speed * factor;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    };
    const request = () => {
      if (visible && !frame) frame = requestAnimationFrame(update);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) request();
      },
      { rootMargin: "25% 0px" },
    );
    io.observe(el);
    update();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform", ...style }}>
      {children}
    </div>
  );
}

/** 捲動進入畫面時淡入上移 */
export function Reveal({
  delay = 0,
  className,
  children,
}: {
  delay?: number;
  className?: string;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reducedMotion()) {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className ?? ""}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
