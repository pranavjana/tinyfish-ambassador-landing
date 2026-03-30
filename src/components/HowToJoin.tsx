import Intersection2 from "@/components/pixel-perfect/intersection2";
import AnimateIn, { StaggerChildren, StaggerItem } from "@/components/AnimateIn";

const STEPS = [
  { number: "01", text: "Apply with your profile and a short pitch" },
  { number: "02", text: "Interview with the TinyFish growth team" },
  { number: "03", text: "Get onboarded with Pro access and credits" },
  { number: "04", text: "Start creating, earning, and growing" },
];

export default function HowToJoin() {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Scattered cross/plus marks */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[
          { top: '12%', right: '6%', size: 13 },
          { top: '30%', left: '5%', size: 11 },
          { top: '55%', right: '12%', size: 14 },
          { top: '70%', left: '8%', size: 10 },
          { top: '20%', left: '15%', size: 12 },
          { top: '85%', right: '18%', size: 9 },
        ].map((pos, i) => (
          <svg key={i} className="absolute opacity-30" style={{ top: pos.top, left: (pos as Record<string, unknown>).left as string, right: (pos as Record<string, unknown>).right as string }} width={pos.size} height={pos.size} viewBox="0 0 16 16" fill="none">
            <line x1="8" y1="2" x2="8" y2="14" stroke="#FF6700" strokeWidth="2" />
            <line x1="2" y1="8" x2="14" y2="8" stroke="#FF6700" strokeWidth="2" />
          </svg>
        ))}
      </div>

      <div className="relative max-w-5xl mx-auto px-4 md:px-6">
        <AnimateIn variant="scale" duration={0.8}>
          <Intersection2>
            <div className="py-10 px-4 md:py-14 md:px-14">
              <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
                {/* Left: heading */}
                <div>
                  <AnimateIn variant="fadeLeft" delay={0.2}>
                    <p className="font-[family-name:var(--font-mono)] text-[10px] md:text-xs text-[#FF6700] uppercase tracking-[0.3em] mb-4">
                      Get Started
                    </p>
                    <h3 className="font-[family-name:var(--font-mono)] text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 leading-snug">
                      How to <span className="text-[#FF6700]">join.</span>
                    </h3>
                  </AnimateIn>
                </div>

                {/* Right: steps */}
                <StaggerChildren className="space-y-0" staggerDelay={0.15}>
                  {STEPS.map((step) => (
                    <StaggerItem key={step.number}>
                      <div className="flex items-start gap-6 py-5 border-b border-dashed border-neutral-200 last:border-0">
                        <span className="font-[family-name:var(--font-mono)] text-sm text-[#FF6700] leading-none shrink-0 w-8 pt-0.5">
                          {step.number}
                        </span>
                        <p className="font-sans text-neutral-700 text-[15px] leading-relaxed">
                          {step.text}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
              </div>
            </div>
          </Intersection2>
        </AnimateIn>
      </div>
    </section>
  );
}
