"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import ScrambleIn from "@/components/ScrambleIn";

const Grainient = dynamic(() => import("@/components/Grainient"), {
  ssr: false,
});

const FISH_ICONS = [
  "/fish-discover.svg",
  "/fish-evolve.svg",
  "/fish-navigate.svg",
  "/fish-observe.svg",
  "/fish-train.svg",
  "/fish-1.svg",
  "/fish-2.svg",
  "/fish-3.svg",
  "/fish-4.svg",
  "/fish-5.svg",
];

export default function Hero() {
  const [currentFish, setCurrentFish] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFish((prev) => (prev + 1) % FISH_ICONS.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-white">
      {/* Grainient background */}
      <div className="absolute inset-0 z-0">
        <Grainient
          color1="#FF7A1A"
          color2="#FF9A4D"
          color3="#FFBB78"
          timeSpeed={0.6}
          colorBalance={-0.15}
          warpStrength={1.5}
          warpFrequency={6.0}
          warpSpeed={4.0}
          warpAmplitude={35.0}
          blendAngle={0.0}
          blendSoftness={0.05}
          rotationAmount={500.0}
          noiseScale={2.0}
          grainAmount={0.1}
          grainScale={2.0}
          grainAnimated={false}
          contrast={1.5}
          gamma={1.0}
          saturation={1.0}
          centerX={0.0}
          centerY={0.0}
          zoom={0.9}
          className="w-full h-full"
        />
      </div>

      {/* Nav */}
      <nav className="relative z-20 flex items-center justify-between px-4 md:px-8 py-6">
        <Image
          src="/fish-discover.svg"
          alt="TinyFish"
          width={36}
          height={36}
          priority
        />
        <a
          href="/apply"
          className="border border-white/30 text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
        >
          Apply Now
        </a>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 md:px-6">
        {/* Small label */}
        <p className="font-[family-name:var(--font-pristine)] text-[10px] md:text-xs text-white/60 mb-8 tracking-wide">
          Ambassador Programme 2026
        </p>

        {/* Massive headline */}
        <h1 className="font-[family-name:var(--font-host)] text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white leading-[0.9] text-center uppercase">
          <span className="flex items-center justify-center gap-2 md:gap-5">
            <span className="font-[family-name:var(--font-pristine)] normal-case tracking-normal">TinyFish</span>
            <span className="relative inline-block w-[0.9em] h-[0.9em]">
              {FISH_ICONS.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  fill
                  className={`object-contain transition-all duration-500 ${
                    i === currentFish
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-75"
                  }`}
                />
              ))}
            </span>
          </span>
          <span className="block text-[0.65em] font-[family-name:var(--font-mono)] font-normal tracking-wide mt-[0.4em]">
            <ScrambleIn text="Ambassador Programme" scrambleSpeed={40} scrambledLetterCount={4} />
          </span>
        </h1>

        {/* CTA button */}
        <div className="mt-16">
          <a
            href="/apply"
            className="group relative inline-flex items-center justify-center"
          >
            {/* Radiating rings */}
            <span className="absolute -inset-1 rounded-full border-2 border-white/55 animate-[radiate_2.5s_ease-out_infinite]" />
            <span className="absolute -inset-1 rounded-full border-2 border-white/55 animate-[radiate_2.5s_ease-out_infinite_0.5s]" />
            <span className="absolute -inset-1 rounded-full border-2 border-white/55 animate-[radiate_2.5s_ease-out_infinite_1s]" />
            <span className="relative bg-white text-neutral-900 text-xs font-semibold tracking-[0.3em] uppercase px-8 md:px-14 py-4 md:py-5 rounded-full">
              Start Application
            </span>
          </a>
        </div>
      </div>

      {/* Bottom bleed */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-10 bg-gradient-to-t from-white via-white/60 to-transparent blur-sm" />
      <div className="absolute bottom-0 left-0 right-0 h-24 z-10 bg-gradient-to-t from-white to-transparent" />

      {/* Bottom indicator */}
      <div className="relative z-20 flex justify-center pb-8">
        <div className="w-10 h-1 bg-white/30 rounded-full" />
      </div>
    </section>
  );
}
