"use client";

import { useState } from "react";

export default function StickyBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="sticky top-0 z-50 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-center gap-3 relative">
        <span className="font-[family-name:var(--font-mono)] text-[10px] md:text-xs tracking-[0.15em] uppercase text-neutral-400">
          Phase 1 applications open
        </span>
        <span className="hidden md:inline text-neutral-600">—</span>
        <a
          href="/apply"
          className="font-[family-name:var(--font-mono)] text-[10px] md:text-xs tracking-[0.15em] uppercase text-[#FF6700] hover:text-[#FF8C38] transition-colors"
        >
          Apply now &rarr;
        </a>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white transition-colors"
          aria-label="Dismiss"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 3L11 11M11 3L3 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
