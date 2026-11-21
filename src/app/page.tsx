import type { ReactNode } from "react";
import ContactForm from "@/components/ContactForm";
import MobileNav from "@/components/MobileNav";
import { Parallax, Reveal } from "@/components/Parallax";
import { CropMarks } from "@/components/decor";
import { FloorPlan, LandscapePlan } from "@/components/drawings";

const COMPANY = "京太設計工作室";
const COMPANY_EN = "JINGTAI DESIGN STUDIO";

const nav = [
  { href: "#about", label: "關於我們" },
  { href: "#services", label: "服務項目" },
  { href: "#process", label: "合作流程" },
  { href: "#contact", label: "聯繫我們" },
];

const services = [
  {
    no: "01",
    title: "墨線圖",
    en: "Line Drawing",
    desc: "以建築圖說為基礎，精準轉繪格局、門窗、尺寸與設備配置。線條粗細分明、層次清楚，是所有銷售圖面與後續彩圖的根本。",
    items: ["平面墨線圖", "樓層配置圖", "公設配置圖", "尺寸標註與圖例整理"],
    sheet: { code: "A-101", name: "平面墨線圖", scale: "1/100" },
    drawing: <FloorPlan variant="ink" className="h-auto w-full" />,
  },
  {
    no: "02",
    title: "景觀公設彩圖",
    en: "Landscape & Amenities",
    desc: "將景觀設計與公設規劃轉化為易讀的彩色平面，植栽、水景、鋪面與動線一目了然，讓購屋者看見社區未來的生活樣貌。",
    items: ["景觀平面彩圖", "公設配置彩圖", "植栽與鋪面表現", "樓層公設示意"],
    sheet: { code: "L-201", name: "景觀配置彩圖", scale: "1/300" },
    drawing: <LandscapePlan className="h-auto w-full" />,
  },
  {
    no: "03",
    title: "傢俱配置彩圖",
    en: "Furniture Layout",
    desc: "依實際尺度配置傢俱與動線，搭配溫潤配色與材質表現，讓每一坪空間的使用方式都清楚可感，有效提升銷售說明力。",
    items: ["戶別傢俱配置彩圖", "多種格局變化方案", "材質與色系客製", "海報 / DM 輸出規格"],
    sheet: { code: "F-301", name: "傢俱配置彩圖", scale: "1/100" },
    drawing: <FloorPlan variant="furniture" className="h-auto w-full" />,
  },
];

const steps = [
  { no: "01", title: "需求溝通", desc: "確認圖面用途、表現風格、數量與交期。" },
  { no: "02", title: "底圖整理", desc: "依建築圖說校對尺寸、格局與設備位置。" },
  { no: "03", title: "繪製校稿", desc: "提交初稿，依回饋細修直到定稿。" },
  { no: "04", title: "完稿交付", desc: "提供印刷與數位用的高解析檔案。" },
];

function SectionLabel({ no, en }: { no: string; en: string }) {
  return (
    <div className="flex items-center gap-4 font-display text-sm tracking-[0.35em] text-ink-soft">
      <span className="text-seal">{no}</span>
      <span className="h-px w-10 bg-ink/30" />
      <span className="uppercase">{en}</span>
    </div>
  );
}

function Sheet({
  children,
  code,
  name,
  scale,
}: {
  children: ReactNode;
  code: string;
  name: string;
  scale: string;
}) {
  return (
    <figure className="relative border border-ink/70 bg-paper p-3 shadow-[12px_12px_0_0_var(--paper-deep)] sm:p-4">
      <div className="border border-ink/20 p-4 sm:p-6">{children}</div>
      <figcaption className="mt-3 grid grid-cols-[auto_1fr_auto] border border-ink/20 text-[10px] tracking-[0.2em] text-ink-soft sm:text-xs">
        <span className="border-r border-ink/20 px-3 py-2 font-display">{code}</span>
        <span className="px-3 py-2 font-serif text-ink">{name}</span>
        <span className="border-l border-ink/20 px-3 py-2 font-display">SCALE {scale}</span>
      </figcaption>
    </figure>
  );
}

export default function Home() {
  return (
    <>
      {/* 導覽列 */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center bg-seal font-serif text-lg text-paper">京</span>
            <span className="leading-tight">
              <span className="block font-serif text-base tracking-[0.3em]">{COMPANY}</span>
              <span className="block font-display text-[9px] tracking-[0.3em] text-ink-soft">{COMPANY_EN}</span>
            </span>
          </a>
          <nav className="hidden items-center gap-10 text-sm tracking-[0.2em] md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="relative py-1 text-ink-soft transition-colors hover:text-ink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-ink after:transition-transform hover:after:scale-x-100">
                {n.label}
              </a>
            ))}
          </nav>
          <MobileNav items={nav} />
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* 主視覺 */}
        <section className="bg-grid relative isolate overflow-hidden pt-[72px]">
          {/* 直書標註 */}
          <p
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-8 hidden -translate-y-1/2 font-serif text-xs tracking-[0.6em] text-ink-soft/60 [writing-mode:vertical-rl] 2xl:block"
          >
            建築墨線圖・景觀公設彩圖・傢俱配置彩圖
          </p>
          <CropMarks label="Sheet 00 — Index" className="text-ink/20 sm:top-[92px]" />
          {/* 背景大字（遠景） */}
          <Parallax
            speed={0.35}
            className="pointer-events-none absolute -right-[4vw] bottom-0 select-none font-serif text-[clamp(9rem,30vw,28rem)] leading-none text-ink/[0.035]"
          >
            <span aria-hidden>京太</span>
          </Parallax>
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:py-28">
            <Parallax speed={-0.1} className="md:text-center lg:text-left">
              <p className="font-display text-sm tracking-[0.4em] text-ink-soft uppercase">Architectural Drawing Studio</p>
              <h1 className="mt-6 font-serif text-4xl leading-[1.35] font-medium tracking-[0.08em] sm:text-5xl lg:text-6xl">
                一筆一線
                <br />
                勾勒空間的<span className="text-seal">溫度</span>
              </h1>
              <p className="mt-8 max-w-md leading-loose text-ink-soft md:mx-auto lg:mx-0">
                專注建築墨線圖、景觀公設彩圖與傢俱配置彩圖繪製，為建設公司、代銷團隊與設計單位，提供精準且具美感的銷售圖面。
              </p>
              <div className="mt-10 flex flex-wrap gap-3 sm:gap-4 md:justify-center lg:justify-start">
                <a href="#services" className="group inline-flex items-center gap-4 bg-ink px-7 py-4 text-sm tracking-[0.3em] text-paper transition-colors hover:bg-seal">
                  瀏覽服務
                  <span className="inline-block h-px w-8 bg-paper transition-all group-hover:w-12" />
                </a>
                <a href="#contact" className="inline-flex items-center border border-ink/40 px-7 py-4 text-sm tracking-[0.3em] transition-colors hover:border-ink">
                  洽詢合作
                </a>
              </div>
            </Parallax>
            <Parallax speed={0.12} className="relative mx-auto w-full max-w-2xl lg:max-w-none">
              <Sheet code="A-000" name="標準層平面圖" scale="1/100">
                <FloorPlan variant="ink" animate className="h-auto w-full" />
              </Sheet>
              <span className="absolute -top-5 -right-2 hidden h-16 w-16 rotate-6 items-center justify-center border-2 border-seal font-serif text-xs leading-tight tracking-widest text-seal sm:flex">
                精準
                <br />
                製圖
              </span>
            </Parallax>
          </div>
        </section>

        {/* 關於我們 */}
        <section id="about" className="relative isolate overflow-hidden border-t border-ink/10">
          <CropMarks label="Sheet 01 — About" />
          <Parallax
            speed={0.3}
            className="pointer-events-none absolute -left-[2vw] top-1/2 -translate-y-1/2 select-none font-display text-[clamp(14rem,36vw,34rem)] leading-none text-ink/[0.04]"
          >
            <span aria-hidden>30</span>
          </Parallax>
          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-24 md:grid-cols-[1fr_1.4fr] md:gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-14 lg:py-32">
            <Reveal>
              <SectionLabel no="01" en="About Us" />
              <h2 className="mt-8 font-serif text-3xl leading-snug tracking-[0.1em] sm:text-4xl">關於我們</h2>
              <p className="mt-8 border-l-2 border-seal pl-6 font-serif text-xl leading-relaxed text-ink sm:text-2xl">
                線條與色彩，是空間最誠實的語言。
              </p>
            </Reveal>
            <Reveal delay={150} className="space-y-6 leading-loose text-ink-soft">
              <p>
                {COMPANY}深耕建築製圖逾三十年，是一支專注於建築銷售圖面的製圖團隊。我們相信，一張好的平面圖，不只是尺寸與格局的轉譯，更是購屋者想像生活的起點。
              </p>
              <p>
                從最基礎的墨線圖，到景觀公設與傢俱配置彩圖，我們以嚴謹的製圖標準校對每一道牆、每一扇門窗，並以客製而溫潤的色彩，讓圖面既清楚易讀，也兼具美感與質感。
              </p>
              <dl className="grid grid-cols-3 gap-4 border-t border-ink/15 pt-8 sm:gap-6 sm:pt-10">
                {[
                  { n: "30", u: "年+", l: "製圖經驗" },
                  { n: "1000", u: "案+", l: "完成建案" },
                  { n: "100", u: "家+", l: "合作廠商" },
                ].map((s) => (
                  <div key={s.l}>
                    <dt className="sr-only">{s.l}</dt>
                    <dd>
                      <span className="font-display text-3xl text-ink sm:text-5xl">{s.n}</span>
                      <span className="ml-1 text-sm text-ink">{s.u}</span>
                      <span className="mt-2 block text-xs tracking-[0.2em]">{s.l}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* 服務項目 */}
        <section id="services" className="relative isolate overflow-hidden border-t border-ink/10 bg-paper-deep/50">
          <CropMarks label="Sheet 02 — Services" />
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:py-32">
            <Reveal>
              <SectionLabel no="02" en="Services" />
              <h2 className="mt-8 font-serif text-3xl tracking-[0.1em] sm:text-4xl">服務項目</h2>
            </Reveal>

            <div className="mt-14 space-y-20 sm:mt-20 sm:space-y-28 lg:space-y-36">
              {services.map((s, i) => (
                <article
                  key={s.no}
                  className="relative mx-auto grid max-w-2xl items-center gap-10 sm:gap-12 lg:max-w-none lg:grid-cols-2 lg:gap-20"
                >
                  <Parallax speed={0.08} className={i % 2 ? "lg:order-2" : undefined}>
                    <Reveal>
                      <Sheet code={s.sheet.code} name={s.sheet.name} scale={s.sheet.scale}>
                        {s.drawing}
                      </Sheet>
                    </Reveal>
                  </Parallax>
                  <Reveal delay={120} className={i % 2 ? "lg:order-1" : undefined}>
                    <div className="flex items-baseline gap-5">
                      <Parallax speed={-0.18} className="inline-block">
                        <span className="font-display text-5xl text-ink/15 sm:text-7xl">{s.no}</span>
                      </Parallax>
                      <span className="font-display text-xs tracking-[0.3em] text-ink-soft uppercase italic sm:text-sm">{s.en}</span>
                    </div>
                    <h3 className="mt-4 font-serif text-2xl tracking-[0.12em] sm:text-3xl">{s.title}</h3>
                    <p className="mt-6 leading-loose text-ink-soft">{s.desc}</p>
                    <ul className="mt-8 grid grid-cols-2 gap-x-4 border-t border-ink/15 sm:gap-x-6">
                      {s.items.map((it) => (
                        <li key={it} className="flex items-center gap-3 border-b border-ink/15 py-4 text-sm">
                          <span className="h-1.5 w-1.5 rotate-45 bg-seal" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 合作流程 */}
        <section id="process" className="relative isolate overflow-hidden border-t border-ink/10">
          <CropMarks label="Sheet 03 — Process" />
          {/* 平面圖浮水印 */}
          <Parallax
            speed={0.3}
            className="pointer-events-none absolute top-0 -right-[20vw] -z-10 w-[min(110vw,900px)] opacity-[0.07] sm:-right-[8vw]"
          >
            <FloorPlan variant="ink" className="h-auto w-full" />
          </Parallax>
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
            <Reveal>
              <SectionLabel no="03" en="Process" />
              <h2 className="mt-8 font-serif text-3xl tracking-[0.1em] sm:text-4xl">合作流程</h2>
            </Reveal>
            <ol className="mt-10 grid border-t border-l border-ink/15 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.no} className="border-r border-b border-ink/15">
                  <Reveal delay={i * 120} className="group h-full p-6 transition-colors hover:bg-ink hover:text-paper sm:p-8">
                    <span className="font-display text-sm tracking-[0.3em] text-seal">STEP {s.no}</span>
                    <h3 className="mt-4 font-serif text-xl tracking-[0.15em] sm:mt-10">{s.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-ink-soft transition-colors group-hover:text-paper/70">{s.desc}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 聯繫我們 */}
        <section id="contact" className="relative isolate overflow-hidden bg-ink text-paper">
          <CropMarks label="Sheet 04 — Contact" className="text-paper/25" />
          <Parallax
            speed={0.3}
            className="pointer-events-none absolute -right-[2vw] top-[8%] select-none font-display text-[clamp(6rem,18vw,16rem)] leading-none text-paper/[0.04] italic"
          >
            <span aria-hidden>Contact</span>
          </Parallax>
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1fr_1.3fr] lg:gap-14 lg:py-32">
            <Reveal>
              <div className="flex items-center gap-4 font-display text-sm tracking-[0.35em] text-paper/60">
                <span className="text-seal">04</span>
                <span className="h-px w-10 bg-paper/30" />
                <span className="uppercase">Contact</span>
              </div>
              <h2 className="mt-8 font-serif text-3xl tracking-[0.1em] sm:text-4xl">聯繫我們</h2>
              <p className="mt-6 max-w-sm leading-loose text-paper/70">
                無論是新建案的整套銷售圖面，或是單一戶型的彩圖需求，歡迎與我們聊聊。
              </p>
              <dl className="mt-10 grid gap-y-6 text-sm sm:mt-12 md:grid-cols-2 md:gap-x-10 lg:grid-cols-1">
                {[
                  { k: "電話", v: "(04) 2311-5881", href: "tel:+886423115881" },
                  { k: "信箱", v: "zen1788@gmail.com", href: "mailto:zen1788@gmail.com" },
                  { k: "地址", v: "台中市西屯區重慶路 322 號 13 樓之 2" },
                  { k: "時間", v: "週一至週五 09:00 – 18:00" },
                ].map((c) => (
                  <div key={c.k} className="grid grid-cols-[4rem_1fr] border-b border-paper/15 pb-6">
                    <dt className="tracking-[0.3em] text-paper/50">{c.k}</dt>
                    <dd>
                      {c.href ? (
                        <a href={c.href} className="transition-colors hover:text-seal">
                          {c.v}
                        </a>
                      ) : (
                        c.v
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={150} className="-mx-5 bg-paper p-6 text-ink sm:mx-0 sm:p-10 lg:p-12">
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-ink text-paper/50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-paper/10 px-5 py-8 text-xs tracking-[0.2em] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span className="flex items-center gap-3">
            <span className="flex h-6 w-6 items-center justify-center bg-seal font-serif text-paper">京</span>
            {COMPANY} {COMPANY_EN}
          </span>
          <span className="font-display">© 2026 {COMPANY}. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
