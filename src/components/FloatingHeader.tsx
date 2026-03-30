"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function FloatingHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-[41px] z-40 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-10 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <Image
            src="/Discover.svg"
            alt="TinyFish"
            width={28}
            height={28}
            priority
          />
          <span className="font-[family-name:var(--font-mono)] text-xs text-white font-semibold uppercase tracking-[0.2em] hidden md:inline">
            TinyFish Ambassador Program
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="#about"
            className="font-[family-name:var(--font-mono)] text-xs text-white/70 font-semibold uppercase tracking-[0.15em] hover:text-white transition-colors hidden md:inline"
          >
            About
          </a>
          <a
            href="#role"
            className="font-[family-name:var(--font-mono)] text-xs text-white/70 font-semibold uppercase tracking-[0.15em] hover:text-white transition-colors hidden md:inline"
          >
            The Role
          </a>
          <a
            href="#tiers"
            className="font-[family-name:var(--font-mono)] text-xs text-white/70 font-semibold uppercase tracking-[0.15em] hover:text-white transition-colors hidden md:inline"
          >
            Tiers
          </a>
          <a
            href="#join"
            className="font-[family-name:var(--font-mono)] text-xs text-white/70 font-semibold uppercase tracking-[0.15em] hover:text-white transition-colors hidden md:inline"
          >
            Join
          </a>
          <a
            href="/apply"
            className={`font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-[0.2em] px-5 py-2.5 transition-colors ${
              scrolled
                ? "bg-[#FF6700] text-white hover:bg-[#FF8C38]"
                : "bg-white text-neutral-900 hover:bg-[#FF6700] hover:text-white"
            }`}
          >
            Apply Now
          </a>
        </div>
      </nav>
    </header>
  );
}
