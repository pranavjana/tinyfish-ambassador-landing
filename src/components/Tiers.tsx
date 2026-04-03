import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import Intersection2 from "@/components/pixel-perfect/intersection2";

const TIERS = [
  {
    fish: "/Discover.svg",
    name: "Ambassador",
    tier: "01",
    tag: "Open Applications",
    who: "You're passionate, capable, and ready to build with TinyFish. This is where it starts.",
    content: "3 pieces/month — short videos, written posts, or tutorials",
    events: "1 event/quarter — represent TinyFish at hackathons",
    compensation: "$3/sign-up + $6/active user, uncapped",
    perks: ["TinyFish Pro + API credits", "Early feature access", "Ambassador merch kit", "LinkedIn badge"],
  },
  {
    fish: "/Navigate.svg",
    name: "Ambassador Elite",
    tier: "02",
    tag: "By Promotion or Invite",
    who: "You've proven yourself. Consistent output, growing influence, trusted voice in your community.",
    hasAsterisk: true,
    content: "3 pieces/month — 2 short-form + 1 anchor piece",
    events: "Organize 1 event/quarter — co-host TinyFish events",
    compensation: "$2,000/mo stipend + $3/sign-up + $6/active user",
    perks: ["Everything in Tier 1", "Monthly stipend", "Co-creation with content team", "Priority beta access"],
  },
  {
    fish: "/Train.svg",
    name: "Ambassador Fellow",
    tier: "03",
    tag: "By Promotion or Invite",
    who: "The inner circle. Your content, events, and voice shape how TinyFish shows up in the world.",
    hasAsterisk: true,
    content: "4 pieces/month — 2 anchor pieces + 2 short-form",
    events: "Lead major events — workshops, talks, demos at conferences",
    compensation: "$4,000/mo stipend + $3/sign-up + $6/active user",
    perks: ["Everything in Tier 2", "Premium stipend", "Product roadmap input", "Trip to TinyFish HQ", "Recommendation letters"],
  },
];

export default function Tiers() {
  return (
    <section id="tiers" className="relative py-16 md:py-24 bg-white overflow-hidden scroll-mt-16">
      {/* Plus marks */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[
          { top: '5%', right: '4%', size: 12 },
          { top: '30%', left: '3%', size: 14 },
          { top: '60%', right: '8%', size: 11 },
          { top: '85%', left: '6%', size: 13 },
        ].map((pos, i) => (
          <svg key={i} className="absolute opacity-30" style={{ top: pos.top, left: (pos as Record<string, unknown>).left as string, right: (pos as Record<string, unknown>).right as string }} width={pos.size} height={pos.size} viewBox="0 0 16 16" fill="none">
            <line x1="8" y1="2" x2="8" y2="14" stroke="#FF6700" strokeWidth="2" />
            <line x1="2" y1="8" x2="14" y2="8" stroke="#FF6700" strokeWidth="2" />
          </svg>
        ))}
      </div>

      <div className="relative max-w-5xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <AnimateIn variant="blur" delay={0.1}>
            <p className="font-[family-name:var(--font-mono)] text-[10px] md:text-xs text-[#FF6700] uppercase tracking-[0.3em] mb-4">
              The Journey
            </p>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.2}>
            <h2 className="font-[family-name:var(--font-mono)] text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900">
              Grow with <span className="text-[#FF6700]">us.</span>
            </h2>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.3}>
            <p className="font-sans text-neutral-500 text-sm md:text-base max-w-lg mx-auto mt-4">
              Your path as an ambassador. Start where you are, advance by impact.
            </p>
          </AnimateIn>
        </div>

        {/* Tiers as journey steps */}
        <div className="space-y-6">
          {TIERS.map((tier, i) => (
            <AnimateIn key={i} variant="fadeUp" delay={0.2 + i * 0.15}>
              <Intersection2>
                <div className={`px-4 py-8 md:px-14 md:py-12 ${i === 0 ? 'bg-[#FF6700]/[0.06] ring-1 ring-[#FF6700]/20' : ''}`}>
                  <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-14">
                    {/* Left: identity */}
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <span className="font-[family-name:var(--font-mono)] text-3xl text-[#FF6700]/20">{tier.tier}</span>
                        <span className="font-[family-name:var(--font-mono)] text-[9px] text-[#FF6700] uppercase tracking-[0.2em]">{tier.tag}</span>
                      </div>
                      <div className="mb-4 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#FFF1E6] to-[#FFE4CF] rounded-xl flex items-center justify-center border border-[#FF6700]/10">
                        <Image src={tier.fish} alt={tier.name} width={56} height={56} className="w-10 h-10 md:w-14 md:h-14" />
                      </div>
                      <h3 className="font-[family-name:var(--font-mono)] text-lg text-neutral-900 leading-tight mb-2">{tier.name}{tier.hasAsterisk && <span className="text-[#FF6700]">*</span>}</h3>
                      <p className="font-sans text-neutral-400 text-xs leading-relaxed">{tier.who}</p>
                    </div>

                    {/* Right: details */}
                    <div className="space-y-0">
                      {/* What you do */}
                      <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 py-4 border-b border-dashed border-neutral-200">
                        <span className="font-[family-name:var(--font-mono)] text-[10px] text-neutral-300 uppercase tracking-[0.15em] w-24 shrink-0 pt-0.5">Content</span>
                        <p className="font-sans text-neutral-600 text-sm leading-relaxed">{tier.content}</p>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 py-4 border-b border-dashed border-neutral-200">
                        <span className="font-[family-name:var(--font-mono)] text-[10px] text-neutral-300 uppercase tracking-[0.15em] w-24 shrink-0 pt-0.5">Events</span>
                        <p className="font-sans text-neutral-600 text-sm leading-relaxed">{tier.events}</p>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 py-4 border-b border-dashed border-neutral-200">
                        <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#FF6700]/60 uppercase tracking-[0.15em] w-24 shrink-0 pt-0.5">Earnings</span>
                        <p className="font-[family-name:var(--font-mono)] text-neutral-900 text-sm">{tier.compensation}</p>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 py-4">
                        <span className="font-[family-name:var(--font-mono)] text-[10px] text-neutral-300 uppercase tracking-[0.15em] w-24 shrink-0 pt-0.5">Includes</span>
                        <div className="flex flex-wrap gap-2">
                          {tier.perks.map((perk, j) => (
                            <span key={j} className="font-sans text-neutral-500 text-xs border border-neutral-200 px-2.5 py-1">
                              {perk}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Intersection2>
            </AnimateIn>
          ))}
        </div>

        {/* Advancement note */}
        <AnimateIn variant="fadeUp" delay={0.8}>
          <div className="mt-10">
            <p className="font-[family-name:var(--font-mono)] text-[10px] text-neutral-400 tracking-[0.1em]">
              <span className="text-[#FF6700]">*</span> Advancement to Ambassador Elite and Ambassador Fellow is reserved for exceptional ambassadors who have consistently delivered high-quality content, driven measurable growth, and demonstrated genuine commitment to the TinyFish community. Promotion is reviewed quarterly and is never automatic.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
