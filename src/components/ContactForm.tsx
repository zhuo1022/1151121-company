"use client";

import { useState, type FormEvent } from "react";

const fieldClass =
  "w-full border-0 border-b border-ink/25 bg-transparent px-0 py-3 text-ink placeholder:text-ink-soft/60 focus:border-ink focus:outline-none focus:ring-0 transition-colors";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  // TODO: 之後串接寄信服務或後端 API
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  }

  if (sent) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
        <span className="flex h-14 w-14 items-center justify-center bg-seal font-serif text-xl text-paper">謝</span>
        <p className="mt-6 font-serif text-2xl">感謝您的來信</p>
        <p className="mt-3 text-sm text-ink-soft">我們將於一個工作天內與您聯繫。</p>
        <button
          onClick={() => setSent(false)}
          className="mt-8 text-xs tracking-[0.3em] text-ink-soft underline-offset-4 hover:text-ink hover:underline"
        >
          再填寫一份
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
      <label className="block">
        <span className="text-xs tracking-[0.2em] text-ink-soft">姓名 / 公司</span>
        <input required name="name" className={fieldClass} />
      </label>
      <label className="block">
        <span className="text-xs tracking-[0.2em] text-ink-soft">聯絡電話</span>
        <input required name="phone" type="tel" className={fieldClass} />
      </label>
      <label className="block sm:col-span-2">
        <span className="text-xs tracking-[0.2em] text-ink-soft">電子郵件</span>
        <input required name="email" type="email" className={fieldClass} />
      </label>
      <fieldset className="sm:col-span-2">
        <legend className="text-xs tracking-[0.2em] text-ink-soft">需求項目</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {["墨線圖", "景觀公設彩圖", "傢俱配置彩圖", "其他"].map((s) => (
            <label key={s} className="cursor-pointer">
              <input type="checkbox" name="service" value={s} className="peer sr-only" />
              <span className="inline-block border border-ink/25 px-4 py-2 text-sm transition-colors peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 hover:border-ink">
                {s}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className="block sm:col-span-2">
        <span className="text-xs tracking-[0.2em] text-ink-soft">需求說明</span>
        <textarea
          name="message"
          rows={4}
          className={`${fieldClass} resize-none`}
          placeholder="建案名稱、戶數、預計交期等資訊"
        />
      </label>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="group inline-flex items-center gap-4 bg-ink px-8 py-4 text-sm tracking-[0.3em] text-paper transition-colors hover:bg-seal"
        >
          送出諮詢
          <span className="inline-block h-px w-8 bg-paper transition-all group-hover:w-12" />
        </button>
      </div>
    </form>
  );
}
