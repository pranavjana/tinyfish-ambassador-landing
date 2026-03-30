"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import ScrambleIn from "@/components/ScrambleIn";

const Grainient = dynamic(() => import("@/components/Grainient"), {
  ssr: false,
});

const FISH_ICONS = [
  "/Discover.svg",
  "/Navigate.svg",
  "/Observe.svg",
  "/Reason.svg",
  "/Search.svg",
  "/Train.svg",
  "/Tiny 4.svg",
  "/Tiny 5.svg",
  "/Tiny 7.svg",
  "/Tiny 8.svg",
  "/Tiny 11.svg",
  "/Tiny 13.svg",
  "/Tiny 15.svg",
  "/Tiny 16.svg",
  "/Tiny 17.svg",
  "/Tiny 25.svg",
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
          timeSpeed={0.9}
          colorBalance={-0.15}
          warpStrength={1.8}
          warpFrequency={6.5}
          warpSpeed={5.0}
          warpAmplitude={30.0}
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

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 md:px-6 w-full">
        {/* Small label */}
        <p className="font-[family-name:var(--font-pristine)] text-xs md:text-xs text-white/60 mb-8 tracking-wide text-center w-full">
          Ambassador Programme 2026
        </p>

        {/* Massive headline */}
        <h1 className="font-[family-name:var(--font-host)] text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white leading-[0.9] text-center uppercase w-full">
          <span className="flex items-center justify-center gap-2 md:gap-5 w-full">
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
          <span className="block text-[0.65em] font-[family-name:var(--font-mono)] font-normal tracking-wide mt-[0.4em] text-center w-full">
            <ScrambleIn text="Ambassador Programme" scrambleSpeed={40} scrambledLetterCount={4} />
          </span>
        </h1>

        {/* CTA button */}
        <div className="mt-16 w-full flex justify-center">
          <a
            href="https://form.typeform.com/to/EEHLger3" target="_blank" rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center"
          >
            {/* Radiating rings */}
            <span className="absolute -inset-1 border-2 border-white/55 animate-[radiate_2.5s_ease-out_infinite]" />
            <span className="absolute -inset-1 border-2 border-white/55 animate-[radiate_2.5s_ease-out_infinite_0.5s]" />
            <span className="absolute -inset-1 border-2 border-white/55 animate-[radiate_2.5s_ease-out_infinite_1s]" />
            <span className="relative bg-white text-neutral-900 text-xs font-semibold tracking-[0.3em] uppercase px-8 md:px-14 py-4 md:py-5">
              Start Application
            </span>
          </a>
        </div>
      </div>

      {/* Bottom bleed */}
      <div className="absolute -bottom-px left-0 right-0 h-32 z-10 bg-gradient-to-t from-white via-white/40 to-transparent" />

      {/* Scroll arrow */}
      <div className="relative z-20 flex justify-center pb-10 animate-bounce">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="text-white">
          <path d="M8 14L18 24L28 14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
