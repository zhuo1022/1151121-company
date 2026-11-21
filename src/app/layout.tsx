import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif_TC({
  variable: "--font-noto-serif",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  preload: false,
});

const notoSans = Noto_Sans_TC({
  variable: "--font-noto-sans",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  preload: false,
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "京太設計工作室｜建築墨線圖・景觀公設彩圖・傢俱配置彩圖",
  description:
    "專注建築墨線圖、景觀公設彩圖與傢俱配置彩圖繪製，為建設公司、代銷團隊與設計單位提供精準且具美感的銷售圖面。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-Hant"
      className={`${notoSerif.variable} ${notoSans.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
