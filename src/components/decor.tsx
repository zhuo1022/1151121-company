/* 製圖符號裝飾（以 currentColor 上色，用文字顏色控制深淺） */

/** 區塊四角的裁切標記，加上圖號標籤 */
export function CropMarks({ label, className = "text-ink/25" }: { label?: string; className?: string }) {
  const mark = "absolute h-4 w-4 border-current";
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-3 -z-10 hidden sm:block sm:inset-5 ${className}`}>
      <span className={`${mark} top-0 left-0 border-t border-l`} />
      <span className={`${mark} top-0 right-0 border-t border-r`} />
      <span className={`${mark} bottom-0 left-0 border-b border-l`} />
      <span className={`${mark} right-0 bottom-0 border-r border-b`} />
      {label && (
        <span className="absolute top-0 right-7 -translate-y-1/2 font-display text-[10px] tracking-[0.35em] uppercase">
          {label}
        </span>
      )}
    </div>
  );
}
