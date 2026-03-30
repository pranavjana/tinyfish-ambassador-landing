"use client";

import { useState, useEffect, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

interface ScrambleInProps {
  text: string;
  scrambleSpeed?: number;
  scrambledLetterCount?: number;
  className?: string;
}

export default function ScrambleIn({
  text,
  scrambleSpeed = 40,
  scrambledLetterCount = 4,
  className = "",
}: ScrambleInProps) {
  const [displayed, setDisplayed] = useState(text);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    let revealedCount = 0;
    setDisplayed(
      Array.from({ length: Math.min(scrambledLetterCount, text.length) }, () =>
        CHARS[Math.floor(Math.random() * CHARS.length)]
      ).join("")
    );

    const interval = setInterval(() => {
      revealedCount++;
      const revealed = text.slice(0, revealedCount);
      const remaining = text.length - revealedCount;
      const scrambleLen = Math.min(scrambledLetterCount, remaining);
      const scrambled = Array.from({ length: scrambleLen }, () =>
        CHARS[Math.floor(Math.random() * CHARS.length)]
      ).join("");

      setDisplayed(revealed + scrambled);

      if (revealedCount >= text.length) {
        clearInterval(interval);
      }
    }, scrambleSpeed);

    return () => clearInterval(interval);
  }, [text, scrambleSpeed, scrambledLetterCount]);

  return <span className={className}>{displayed}</span>;
}
