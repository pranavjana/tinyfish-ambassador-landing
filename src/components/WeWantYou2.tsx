import AnimateIn, { StaggerChildren, StaggerItem } from "@/components/AnimateIn";

const QUALIFICATIONS = [
  "Passionate about AI and the future of web agents",
  "2,000+ followers or strong community presence",
  "Built something with TinyFish or similar tools",
  "Campus leader, club officer, or hackathon organizer",
  "Track record of creating quality content",
];

export default function WeWantYou2() {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Scattered cross/plus marks */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[
          { top: '10%', left: '3%', size: 11 },
          { top: '22%', right: '7%', size: 13 },
          { top: '50%', left: '7%', size: 15 },
          { top: '38%', right: '14%', size: 10 },
          { top: '72%', right: '5%', size: 12 },
          { top: '88%', left: '20%', size: 9 },
          { top: '60%', left: '22%', size: 11 },
        ].map((pos, i) => (
          <svg key={i} className="absolute opacity-30" style={{ top: pos.top, left: (pos as Record<string, unknown>).left as string, right: (pos as Record<string, unknown>).right as string }} width={pos.size} height={pos.size} viewBox="0 0 16 16" fill="none">
            <line x1="8" y1="2" x2="8" y2="14" stroke="#FF6700" strokeWidth="2" />
            <line x1="2" y1="8" x2="14" y2="8" stroke="#FF6700" strokeWidth="2" />
          </svg>
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <AnimateIn variant="blur" delay={0.1}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="h-px w-12 bg-[#FF6700]/20" />
              <p className="font-[family-name:var(--font-mono)] text-[10px] md:text-xs text-[#FF6700] uppercase tracking-[0.3em]">
                Qualifications
              </p>
              <span className="h-px w-12 bg-[#FF6700]/20" />
            </div>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.2}>
            <h2 className="font-[family-name:var(--font-mono)] text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900">
              We want <span className="text-[#FF6700]">you.</span>
            </h2>
          </AnimateIn>
        </div>

        {/* Qualifications list */}
        <StaggerChildren className="space-y-0 max-w-2xl mx-auto" staggerDelay={0.12}>
          {QUALIFICATIONS.map((item, i) => (
            <StaggerItem key={i}>
              <div className="group relative flex items-start gap-8 py-7 border-b border-neutral-200/80 first:border-t transition-all duration-300 hover:pl-2">
                <span className="font-[family-name:var(--font-mono)] text-[11px] text-[#FF6700]/50 group-hover:text-[#FF6700] tabular-nums pt-1 shrink-0 transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-sans text-neutral-600 group-hover:text-neutral-900 text-base md:text-lg transition-colors duration-300 leading-snug">
                  {item}
                </span>
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 group-hover:w-0.5 h-6 bg-[#FF6700] transition-all duration-300 rounded-full" />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <AnimateIn variant="fadeUp" delay={0.8}>
          <p className="font-[family-name:var(--font-mono)] text-[10px] text-neutral-400 uppercase tracking-[0.2em] text-center mt-10">
            Meet at least 2 of 5 to be eligible
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
