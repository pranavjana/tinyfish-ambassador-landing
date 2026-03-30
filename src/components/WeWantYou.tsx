import Intersection2 from "@/components/pixel-perfect/intersection2";
import AnimateIn from "@/components/AnimateIn";

export default function WeWantYou() {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Scattered cross/plus marks */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[
          { top: '8%', left: '5%', size: 14 },
          { top: '15%', right: '12%', size: 10 },
          { top: '35%', left: '8%', size: 12 },
          { top: '55%', right: '6%', size: 16 },
          { top: '70%', left: '15%', size: 10 },
          { top: '25%', right: '20%', size: 11 },
          { top: '80%', right: '15%', size: 13 },
          { top: '45%', left: '3%', size: 9 },
          { top: '90%', left: '25%', size: 11 },
          { top: '60%', right: '25%', size: 10 },
        ].map((pos, i) => (
          <svg
            key={i}
            className="absolute opacity-30"
            style={{ top: pos.top, left: (pos as Record<string, unknown>).left as string, right: (pos as Record<string, unknown>).right as string }}
            width={pos.size}
            height={pos.size}
            viewBox="0 0 16 16"
            fill="none"
          >
            <line x1="8" y1="2" x2="8" y2="14" stroke="#FF6700" strokeWidth="2" />
            <line x1="2" y1="8" x2="14" y2="8" stroke="#FF6700" strokeWidth="2" />
          </svg>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 md:px-6">
        <AnimateIn variant="scale" duration={0.8}>
          <Intersection2>
            <div className="px-4 py-10 md:px-20 md:py-24">
              <AnimateIn variant="blur" delay={0.2}>
                <p className="font-[family-name:var(--font-mono)] text-[10px] md:text-xs text-[#FF6700] uppercase tracking-[0.3em] mb-6">
                  About the Programme
                </p>
              </AnimateIn>

              <AnimateIn variant="fadeUp" delay={0.3}>
                <h2 className="font-[family-name:var(--font-mono)] text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 mb-8 md:mb-12 leading-[1.15]">
                  Autonomy, mentorship,
                  <br />
                  real <span className="text-[#FF6700]">impact.</span>
                </h2>
              </AnimateIn>

              <AnimateIn variant="fadeUp" delay={0.5}>
                <div className="grid md:grid-cols-[1fr_1px_1fr] gap-10 md:gap-12">
                  <div className="space-y-5 text-neutral-500 text-[15px] leading-relaxed font-sans">
                    <p>
                      The TinyFish Ambassador Programme isn&apos;t a gig — it&apos;s a
                      career accelerator. You&apos;ll work directly with our growth team,
                      create content that reaches thousands, and represent TinyFish at
                      events that matter.
                    </p>
                    <p>
                      Applications are reviewed on a rolling basis. Phase 1 spots are
                      limited.
                    </p>
                  </div>
                  <div className="hidden md:block bg-neutral-200" />
                  <div className="space-y-5 text-neutral-500 text-[15px] leading-relaxed font-sans">
                    <p>
                      We tier by impact. Start as an Ambassador, prove yourself, and
                      advance to Senior Ambassador or Fellow with monthly stipends up to
                      $4,000.
                    </p>
                    <div className="flex items-center gap-3 pt-2">
                      <span className="inline-block w-8 h-px bg-[#FF6700]/40" />
                      <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#FF6700] uppercase tracking-[0.2em]">
                        Up to $4k/month
                      </span>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </Intersection2>
        </AnimateIn>
      </div>
    </section>
  );
}
