import Border1 from "@/components/pixel-perfect/border1";
import Svg4 from "@/components/pixel-perfect/svg-4";
import AnimateIn, { StaggerChildren, StaggerItem } from "@/components/AnimateIn";

const ACTIVITIES = [
  {
    label: "Community",
    title: "Grow the network",
    description:
      "Build and nurture your local TinyFish community. Connect builders, share resources, mentor newcomers.",
    stat: null,
    statLabel: null,
    span: "md:col-span-2 md:row-span-2",
    hasSvg: true,
  },
  {
    label: "Content",
    title: "Create content that reaches thousands",
    description:
      "Write tutorials, make videos, and share your TinyFish workflows. 3 pieces per month minimum.",
    stat: "3/mo",
    statLabel: "minimum",
    span: "md:col-span-1",
    hasSvg: false,
  },
  {
    label: "Events",
    title: "Represent at events",
    description:
      "Host workshops, speak at hackathons, and run demos on campus.",
    stat: "1/qtr",
    statLabel: "events",
    span: "md:col-span-1",
    hasSvg: false,
  },
  {
    label: "Earnings",
    title: "Uncapped compensation",
    description:
      "$2 per click, $5 per signup. Monthly stipends up to $4,000 for top performers.",
    stat: "$4k",
    statLabel: "per month",
    span: "md:col-span-1",
    hasSvg: false,
  },
  {
    label: "Feedback",
    title: "Shape the product",
    description:
      "Direct access to the TinyFish team. Your feedback drives the roadmap. Test new features first.",
    stat: null,
    statLabel: null,
    span: "md:col-span-2",
    hasSvg: false,
  },
];


export default function WhatYoullDo() {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Scattered cross/plus marks */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[
          { top: '6%', right: '4%', size: 12 },
          { top: '20%', left: '6%', size: 14 },
          { top: '40%', right: '10%', size: 10 },
          { top: '65%', left: '4%', size: 13 },
          { top: '50%', right: '18%', size: 11 },
          { top: '85%', left: '12%', size: 10 },
          { top: '30%', left: '18%', size: 9 },
          { top: '75%', right: '7%', size: 15 },
        ].map((pos, i) => (
          <svg key={i} className="absolute opacity-30" style={{ top: pos.top, left: (pos as Record<string, unknown>).left as string, right: (pos as Record<string, unknown>).right as string }} width={pos.size} height={pos.size} viewBox="0 0 16 16" fill="none">
            <line x1="8" y1="2" x2="8" y2="14" stroke="#FF6700" strokeWidth="2" />
            <line x1="2" y1="8" x2="14" y2="8" stroke="#FF6700" strokeWidth="2" />
          </svg>
        ))}
      </div>

      <div className="relative max-w-5xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-20">
          <AnimateIn variant="blur" delay={0.1}>
            <p className="font-[family-name:var(--font-mono)] text-[10px] md:text-xs text-[#FF6700] uppercase tracking-[0.3em] mb-4">
              The Role
            </p>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.2}>
            <h2 className="font-[family-name:var(--font-mono)] text-3xl md:text-5xl font-normal tracking-tight text-neutral-900">
              What you&apos;ll be <span className="text-[#FF6700]">doing.</span>
            </h2>
          </AnimateIn>
        </div>

        {/* Bento grid */}
        <StaggerChildren className="rounded-2xl overflow-hidden mb-12 md:mb-28" staggerDelay={0.1}>
        <div className="grid md:grid-cols-3 gap-[1px] bg-neutral-200">
          {ACTIVITIES.map((item, i) => (
            <StaggerItem key={i} className={item.span}>
            <div
              className={`relative bg-white group hover:bg-[#FFFAF5] transition-colors duration-300 h-full ${item.hasSvg ? 'overflow-hidden' : ''}`}
            >
              {/* SVG in top-right for big card */}
              {item.hasSvg && (
                <>
                  <svg width="0" height="0" className="absolute">
                    <defs>
                      <filter id="svg4-orange">
                        <feColorMatrix type="saturate" values="0" result="gray" />
                        <feComponentTransfer in="gray">
                          <feFuncR type="table" tableValues="0.95 0.3" />
                          <feFuncG type="table" tableValues="0.85 0.1" />
                          <feFuncB type="table" tableValues="0.8 0" />
                          <feFuncA type="linear" slope="1" intercept="0" />
                        </feComponentTransfer>
                      </filter>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-end md:items-center justify-center translate-y-20 md:translate-y-16 pointer-events-none" style={{ filter: "url(#svg4-orange)", maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)" }}>
                    <div className="opacity-60 [&_svg]:w-[180px] [&_svg]:h-[180px] md:[&_svg]:w-[280px] md:[&_svg]:h-[280px]">
                      <Svg4 />
                    </div>
                  </div>
                </>
              )}
              <Border1>
                <div className="p-8 md:p-10 h-full flex flex-col">
                  {/* Label row */}
                  <div className="flex items-center justify-between mb-6">
                    <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#FF6700] uppercase tracking-[0.3em]">
                      {item.label}
                    </p>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6700]/30" />
                  </div>

                  {/* Title */}
                  <h3 className="font-sans text-lg md:text-xl font-semibold text-neutral-900 mb-3 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-neutral-500 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Stat callout */}
                  {item.stat && (
                    <div className="mt-auto pt-6 border-t border-dashed border-neutral-200">
                      <span className="font-[family-name:var(--font-mono)] text-2xl md:text-3xl text-[#FF6700]/70 leading-none">
                        {item.stat}
                      </span>
                      <span className="font-[family-name:var(--font-mono)] text-[10px] text-neutral-400 uppercase tracking-[0.2em] ml-2">
                        {item.statLabel}
                      </span>
                    </div>
                  )}

                  {/* Decorative corner line for cards without stats */}
                  {!item.stat && (
                    <div className="mt-auto">
                      <div className="flex items-center gap-2 pt-4">
                        <span className="h-px flex-1 bg-gradient-to-r from-[#FF6700]/15 to-transparent" />
                      </div>
                    </div>
                  )}
                </div>
              </Border1>
            </div>
          </StaggerItem>
          ))}
        </div>
        </StaggerChildren>

      </div>
    </section>
  );
}
