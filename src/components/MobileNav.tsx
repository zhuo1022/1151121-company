"use client";

import { useEffect, useState } from "react";

type Item = { href: string; label: string };

export default function MobileNav({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(false);

  // 開啟時鎖定背景捲動，並支援 Esc 關閉
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "關閉選單" : "開啟選單"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="relative -mr-2 flex h-11 w-11 items-center justify-center"
      >
        <span
          className={`absolute h-px w-6 bg-ink transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-[4px]"}`}
        />
        <span
          className={`absolute h-px w-6 bg-ink transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-[4px]"}`}
        />
      </button>

      <div
        id="mobile-menu"
        className={`bg-grid absolute inset-x-0 top-full h-[calc(100dvh-72px)] border-t border-ink/10 bg-paper transition-all duration-300 ${
          open ? "visible opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col px-5 pt-8 pb-10 sm:px-8">
          {items.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-5 border-b border-ink/15 py-6"
            >
              <span className="font-display text-sm text-seal">0{i + 1}</span>
              <span className="font-serif text-2xl tracking-[0.2em]">{n.label}</span>
            </a>
          ))}
          <div className="mt-auto space-y-2 text-sm text-ink-soft">
            <a href="tel:+886423115881" className="block">(04) 2311-5881</a>
            <a href="mailto:zen1788@gmail.com" className="block">zen1788@gmail.com</a>
          </div>
        </nav>
      </div>
    </div>
  );
}
