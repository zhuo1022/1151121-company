import type { CSSProperties } from "react";

const INK = "var(--ink)";
const INK_SOFT = "var(--ink-soft)";
const PAPER = "var(--paper)";

/* ------------------------------------------------------------------ */
/* 平面圖：墨線版 / 傢俱配置彩圖版                                       */
/* ------------------------------------------------------------------ */

type FloorPlanProps = {
  variant?: "ink" | "furniture";
  animate?: boolean;
  className?: string;
};

export function FloorPlan({ variant = "ink", animate = false, className }: FloorPlanProps) {
  const color = variant === "furniture";
  let step = 0;
  // 動畫模式下，每一筆線條依序「畫」出來
  const stroke = (): { pathLength?: number; className?: string; style?: CSSProperties } =>
    animate
      ? { pathLength: 1, className: "draw-line", style: { animationDelay: `${(step++) * 0.09}s` } }
      : {};
  const late = animate ? "fade-in" : undefined;
  const f = (c: string) => (color ? c : "none");

  const innerWalls = [
    "M260 40 V120",
    "M260 150 V205",
    "M260 235 V265",
    "M260 190 H440",
    "M340 190 V270",
    "M340 300 V320",
    "M260 260 H340",
    "M40 150 H120",
  ];
  const doors = [
    "M260 120 H290 A30 30 0 0 1 260 150",
    "M260 205 H290 A30 30 0 0 1 260 235",
    "M340 270 H370 A30 30 0 0 1 340 300",
    "M40 160 H76 A36 36 0 0 1 40 196",
  ];
  const windows = [
    { x: 60, y: 36, w: 90, h: 8 },
    { x: 360, y: 36, w: 60, h: 8 },
    { x: 436, y: 60, w: 8, h: 100 },
    { x: 436, y: 220, w: 8, h: 70 },
    { x: 100, y: 316, w: 120, h: 8 },
    { x: 360, y: 316, w: 60, h: 8 },
  ];

  return (
    <svg viewBox="0 0 480 350" className={className} role="img" aria-label={color ? "傢俱配置彩圖示意" : "建築墨線平面圖示意"}>
      {color && (
        <defs>
          <pattern id="fp-wood" width="10" height="10" patternUnits="userSpaceOnUse">
            <rect width="10" height="10" fill="#efe2cc" />
            <path d="M0 9.5 H10" stroke="#e2d0b2" strokeWidth="0.6" />
          </pattern>
          <pattern id="fp-tile" width="8" height="8" patternUnits="userSpaceOnUse">
            <rect width="8" height="8" fill="#dfe7e8" />
            <path d="M0 7.5 H8 M7.5 0 V8" stroke="#c8d4d6" strokeWidth="0.6" />
          </pattern>
        </defs>
      )}

      {/* 地坪 */}
      {color && (
        <g>
          <rect x="43" y="43" width="214" height="274" fill="url(#fp-wood)" />
          <rect x="263" y="43" width="174" height="144" fill="#e9dcc4" />
          <rect x="343" y="193" width="94" height="124" fill="#e9dcc4" />
          <rect x="263" y="193" width="74" height="64" fill="url(#fp-tile)" />
          <rect x="263" y="263" width="74" height="54" fill="url(#fp-wood)" />
        </g>
      )}

      {/* 傢俱與設備 */}
      <g stroke={INK} strokeWidth="0.9" className={late}>
        {/* 廚房 */}
        <rect x="44" y="44" width="150" height="22" fill={f("#f7f4ee")} />
        <rect x="108" y="48" width="28" height="14" rx="3" fill={f("#d7e1e3")} />
        <circle cx="160" cy="55" r="5" fill="none" />
        <circle cx="178" cy="55" r="5" fill="none" />
        {/* 餐桌 */}
        <rect x="104" y="82" width="14" height="10" rx="2" fill={f("#6f6457")} />
        <rect x="142" y="82" width="14" height="10" rx="2" fill={f("#6f6457")} />
        <rect x="104" y="128" width="14" height="10" rx="2" fill={f("#6f6457")} />
        <rect x="142" y="128" width="14" height="10" rx="2" fill={f("#6f6457")} />
        <rect x="98" y="92" width="64" height="36" rx="2" fill={f("#b48e66")} />
        {/* 客廳 */}
        <rect x="78" y="212" width="104" height="76" rx="2" fill={f("#d7bf9c")} strokeDasharray={color ? undefined : "3 2"} />
        <rect x="108" y="232" width="44" height="36" rx="3" fill={f("#8c6d4f")} />
        <rect x="44" y="215" width="12" height="70" fill={f("#5f554a")} />
        <rect x="196" y="204" width="32" height="92" rx="5" fill={f("#8d9c8a")} />
        <rect x="196" y="213" width="23" height="74" rx="3" fill={f("#a6b4a2")} />
        {/* 主臥 */}
        <rect x="280" y="44" width="70" height="18" fill={f("#cbb796")} />
        <path d="M280 44 L350 62 M350 44 L280 62" strokeWidth="0.5" />
        <rect x="420" y="60" width="16" height="14" fill={f("#9b7a58")} />
        <rect x="420" y="146" width="16" height="14" fill={f("#9b7a58")} />
        <rect x="356" y="78" width="80" height="64" rx="2" fill={f("#f3eee4")} />
        <rect x="356" y="78" width="54" height="64" rx="2" fill={f("#c6a98a")} />
        <rect x="416" y="84" width="14" height="24" rx="3" fill={f("#ffffff")} />
        <rect x="416" y="112" width="14" height="24" rx="3" fill={f("#ffffff")} />
        {/* 次臥 */}
        <rect x="380" y="196" width="54" height="80" rx="2" fill={f("#c6a98a")} />
        <rect x="388" y="200" width="38" height="12" rx="3" fill={f("#ffffff")} />
        <rect x="392" y="294" width="42" height="18" fill={f("#b48e66")} />
        {/* 衛浴 */}
        <rect x="300" y="194" width="36" height="30" fill={f("#eef3f4")} />
        <path d="M300 194 L336 224 M336 194 L300 224" strokeWidth="0.5" />
        <rect x="312" y="248" width="20" height="8" rx="1" fill={f("#ffffff")} />
        <ellipse cx="322" cy="238" rx="8" ry="10" fill={f("#ffffff")} />
        {/* 植栽 */}
        {color && (
          <g stroke="#4f6a43">
            <circle cx="240" cy="60" r="10" fill="#8fa77a" />
            <circle cx="240" cy="60" r="4" fill="#5f7d50" />
            <circle cx="62" cy="300" r="9" fill="#8fa77a" />
            <circle cx="62" cy="300" r="3.5" fill="#5f7d50" />
          </g>
        )}
      </g>

      {/* 牆體 */}
      <g stroke={INK} fill="none" strokeLinecap="square">
        <rect x="40" y="40" width="400" height="280" strokeWidth="6" {...stroke()} />
        {innerWalls.map((d) => (
          <path key={d} d={d} strokeWidth="3" {...stroke()} />
        ))}
      </g>

      {/* 門窗 */}
      <g className={late}>
        <rect x="36" y="160" width="8" height="36" fill={color ? "#efe2cc" : PAPER} />
        {windows.map((w) => (
          <g key={`${w.x}-${w.y}`}>
            <rect x={w.x} y={w.y} width={w.w} height={w.h} fill={PAPER} stroke={INK} strokeWidth="1" />
            {w.w > w.h ? (
              <path d={`M${w.x} ${w.y + w.h / 2} H${w.x + w.w}`} stroke={INK} strokeWidth="0.7" />
            ) : (
              <path d={`M${w.x + w.w / 2} ${w.y} V${w.y + w.h}`} stroke={INK} strokeWidth="0.7" />
            )}
          </g>
        ))}
      </g>
      <g stroke={INK} fill="none" strokeWidth="0.9">
        {doors.map((d) => (
          <path key={d} d={d} {...stroke()} />
        ))}
      </g>

      {/* 尺寸線 */}
      <g stroke={INK_SOFT} strokeWidth="0.6" className={late}>
        <path d="M40 18 H440 M40 13 V23 M260 13 V23 M440 13 V23" />
        <path d="M18 40 V320 M13 40 H23 M13 320 H23" />
        <path d="M36 22 L44 14 M256 22 L264 14 M436 22 L444 14" strokeWidth="1" />
      </g>
      <g fill={INK_SOFT} fontSize="8" fontFamily="var(--font-cormorant)" letterSpacing="1" className={late} textAnchor="middle">
        <text x="150" y="12">6,600</text>
        <text x="350" y="12">5,400</text>
        <text x="12" y="180" transform="rotate(-90 12 180)">8,400</text>
      </g>

      {/* 空間名稱 */}
      <g fill={INK} fontSize="9" fontFamily="var(--font-noto-serif)" textAnchor="middle" className={late}>
        <text x="215" y="112">廚房</text>
        <text x="130" y="203">客廳</text>
        <text x="310" y="172">主臥</text>
        <text x="282" y="252">衛浴</text>
        <text x="358" y="240">次臥</text>
      </g>
      <text x="440" y="340" fill={INK_SOFT} fontSize="7" letterSpacing="2" textAnchor="end" fontFamily="var(--font-cormorant)" className={late}>
        TYPE A · 1/100
      </text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* 景觀公設彩圖                                                          */
/* ------------------------------------------------------------------ */

function Tree({ x, y, r }: { x: number; y: number; r: number }) {
  const spokes = Array.from({ length: 6 }, (_, i) => {
    const a = (i / 6) * Math.PI * 2;
    return `M${x} ${y} L${(x + Math.cos(a) * r * 0.8).toFixed(1)} ${(y + Math.sin(a) * r * 0.8).toFixed(1)}`;
  }).join(" ");
  return (
    <g>
      <circle cx={x + 2} cy={y + 2.5} r={r} fill="#1c1b19" opacity="0.12" />
      <circle cx={x} cy={y} r={r} fill="#8fa77a" stroke="#4f6a43" strokeWidth="0.8" />
      <path d={spokes} stroke="#5f7d50" strokeWidth="0.6" />
      <circle cx={x} cy={y} r={r * 0.25} fill="#5f7d50" />
    </g>
  );
}

export function LandscapePlan({ className }: { className?: string }) {
  const trees = [
    { x: 44, y: 50, r: 16 },
    { x: 46, y: 96, r: 13 },
    { x: 42, y: 140, r: 15 },
    { x: 78, y: 170, r: 11 },
    { x: 438, y: 54, r: 16 },
    { x: 436, y: 104, r: 13 },
    { x: 184, y: 318, r: 13 },
    { x: 380, y: 318, r: 15 },
    { x: 424, y: 244, r: 14 },
    { x: 246, y: 214, r: 11 },
    { x: 118, y: 186, r: 9 },
  ];
  return (
    <svg viewBox="0 0 480 360" className={className} role="img" aria-label="景觀公設彩圖示意">
      <defs>
        <pattern id="ls-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="6" height="6" fill="#ebe6dc" />
          <path d="M0 0 V6" stroke="#cfc6b6" strokeWidth="1" />
        </pattern>
      </defs>

      {/* 基地範圍 */}
      <rect x="20" y="20" width="440" height="320" fill="#d3ddbd" />
      <rect x="20" y="20" width="440" height="320" fill="none" stroke={INK} strokeWidth="1.2" strokeDasharray="8 3 2 3" />

      {/* 主體建築 */}
      <rect x="150" y="36" width="250" height="110" fill="url(#ls-hatch)" stroke={INK} strokeWidth="1.6" />
      <rect x="150" y="146" width="250" height="30" fill="#e4d9c4" stroke={INK} strokeWidth="0.8" />
      <path d="M150 161 H400" stroke="#cdbfa5" strokeWidth="0.6" strokeDasharray="4 3" />

      {/* 步道 */}
      <path d="M300 340 C300 290 250 250 275 176" stroke={INK_SOFT} strokeWidth="18" fill="none" />
      <path d="M300 340 C300 290 250 250 275 176" stroke="#ece3cf" strokeWidth="16" fill="none" />

      {/* 泳池 */}
      <rect x="50" y="204" width="170" height="80" rx="6" fill="#dccaa8" stroke={INK} strokeWidth="0.8" />
      <rect x="62" y="216" width="146" height="56" rx="24" fill="#9fc6d1" stroke={INK} strokeWidth="1" />
      <path
        d="M80 236 q8 -4 16 0 t16 0 t16 0 M120 252 q8 -4 16 0 t16 0 t16 0"
        stroke="#ffffff"
        strokeWidth="1"
        fill="none"
        opacity="0.75"
      />

      {/* 涼亭 */}
      <rect x="338" y="218" width="52" height="52" fill="#cbb38d" stroke={INK} strokeWidth="1.1" />
      <path d="M338 218 L390 270 M390 218 L338 270" stroke={INK} strokeWidth="0.6" />

      {/* 兒童遊戲區 */}
      <circle cx="118" cy="312" r="16" fill="#e8c693" stroke={INK} strokeWidth="0.8" />
      <circle cx="118" cy="312" r="7" fill="none" stroke={INK} strokeWidth="0.5" strokeDasharray="2 2" />

      {/* 花台 */}
      {[170, 200, 230, 330, 360].map((x, i) => (
        <ellipse key={x} cx={x} cy="190" rx="11" ry="5" fill={i % 2 ? "#e5b97a" : "#d89a8c"} stroke="#8a5a4c" strokeWidth="0.5" />
      ))}

      {trees.map((t) => (
        <Tree key={`${t.x}-${t.y}`} {...t} />
      ))}

      {/* 指北針 */}
      <g transform="translate(436 176)" stroke={INK} strokeWidth="0.8">
        <circle r="12" fill={PAPER} />
        <path d="M0 -9 L4 6 L0 3 L-4 6 Z" fill={INK} />
      </g>

      {/* 標示 */}
      <g fill={INK} fontSize="9" fontFamily="var(--font-noto-serif)" textAnchor="middle">
        <text x="275" y="95">住宅大樓</text>
        <text x="135" y="248">景觀泳池</text>
        <text x="364" y="290">涼亭</text>
        <text x="118" y="342" fontSize="8">兒童遊戲區</text>
        <text x="275" y="172" fontSize="7.5">入口廣場</text>
        <text x="318" y="332" fontSize="8">主入口</text>
      </g>
      <text x="436" y="200" fill={INK} fontSize="7" textAnchor="middle" fontFamily="var(--font-cormorant)">N</text>
    </svg>
  );
}
