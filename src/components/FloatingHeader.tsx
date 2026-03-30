"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function FloatingHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-40 left-1/2 -translate-x-1/2 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        scrolled
          ? "top-[calc(var(--banner-height)+12px)] w-[min(92vw,800px)]"
          : "top-[var(--banner-height)] w-full"
      }`}
    >
      <nav
        className={`flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] mx-auto ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl shadow-lg border border-neutral-200/50 px-5 md:px-8 py-3.5 gap-5 md:gap-7 rounded-full max-w-[800px]"
            : "bg-transparent px-6 md:px-10 py-4 max-w-7xl"
        }`}
      >
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <Image
            src="/Discover.svg"
            alt="TinyFish"
            width={scrolled ? 22 : 28}
            height={scrolled ? 22 : 28}
            priority
            className="transition-all duration-500"
          />
          <span
            className={`font-[family-name:var(--font-mono)] font-semibold uppercase tracking-[0.2em] transition-all duration-500 ${
              scrolled
                ? "text-[10px] text-neutral-900"
                : "text-xs text-white"
            }`}
          >
            <span className="md:hidden">TinyFish</span>
            <span className="hidden md:inline">{scrolled ? "TinyFish" : "TinyFish Ambassador Program"}</span>
          </span>
        </div>

        <div className="flex items-center gap-3 md:gap-5">
          {["About", "The Role", "Tiers", "Join"].map((label) => (
            <a
              key={label}
              href={`#${label === "The Role" ? "role" : label.toLowerCase()}`}
              className={`font-[family-name:var(--font-mono)] font-semibold uppercase hover:text-[#FF6700] transition-all duration-500 hidden md:inline ${
                scrolled
                  ? "text-[10px] tracking-[0.1em] text-neutral-500"
                  : "text-xs tracking-[0.15em] text-white/70"
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href="https://form.typeform.com/to/EEHLger3"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-[family-name:var(--font-mono)] font-semibold uppercase transition-all duration-500 ${
              scrolled
                ? "text-[10px] tracking-[0.15em] bg-neutral-900 text-white px-5 py-2 rounded-full hover:bg-[#FF6700]"
                : "text-xs tracking-[0.2em] bg-white text-neutral-900 px-5 py-2.5 hover:bg-[#FF6700] hover:text-white"
            }`}
          >
            Apply
          </a>
        </div>
      </nav>
    </header>
  );
}
