import AnimateIn, { StaggerChildren, StaggerItem } from "@/components/AnimateIn";

const TEAM = [
  { name: "Divya Lath", school: "NUS Singapore", img: "https://lh3.googleusercontent.com/aida/ADBb0uhns2m3k_s2hJIODm6f98UNTeEQsx_3ShJ2jseZEhooXj0_eqdXOaZqv0x-byxb1q17PZbdR0hL_yI9TQdfclBeF7K7VuWql8rG324NJJBUH-3xSUsxumcGxTH5F_x4zQh0ZJ0M1eaYRauGmp4kMD_Llt3j0ZhE35hG1TRbjpHIPpperAcvXWX2HGojTIkxMngXdwOy2u2O4R5a4stUh0fLGLnUtvaZ5aDeEUq1PP70RR-3Mx1NfHOomoYq0v3n0qi2_lieUMjHeg", isPlaceholder: false },
  { name: "Pranav Janakiraman", school: "NUS Singapore", img: "https://lh3.googleusercontent.com/aida/ADBb0uiG2e38IUw7-RriwEq3H3xkV1TxzbdOlWi8wbSakNPxg3MzNda_egJNObxFzFk-7wPZyRSV_ayLZTHevB2fkL_wYB_3Fn3yD_-RSZuO50AVWlA4QOUiUYW6JXULNDUl_CZgXr3SoC9PPRI1O_MrE3cO3xMEDFOWbBqDVllGvxeqdQofy3-ZhmYFAn8-F7a4vr4evQNA4bzlmv0demEtqeLMg3iQgWDT9b5NPrnZ3lGokO-hNDZ4aSj8ZoS9FbM0WQK14U_8f83hbg", isPlaceholder: false },
  { name: "You?", school: "Your University", img: "", isPlaceholder: true },
  { name: "You?", school: "Your University", img: "", isPlaceholder: true },
];

export default function MeetTheTeam() {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Plus marks */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[
          { top: '8%', left: '4%', size: 12 },
          { top: '25%', right: '8%', size: 14 },
          { top: '65%', left: '10%', size: 11 },
          { top: '80%', right: '6%', size: 13 },
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
            <p className="font-[family-name:var(--font-mono)] text-[10px] md:text-xs text-[#FF6700] uppercase tracking-[0.3em] mb-4">
              Ready to Apply?
            </p>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.2}>
            <h2 className="font-[family-name:var(--font-mono)] text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900">
              Join <span className="text-[#FF6700]">us.</span>
            </h2>
          </AnimateIn>
        </div>

        {/* Team grid */}
        <StaggerChildren staggerDelay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 border border-neutral-200">
            {TEAM.map((member, i) => (
              <StaggerItem key={i}>
                <div className="aspect-square flex flex-col items-center justify-center p-4 relative border border-neutral-200 -m-px">
                  {/* Index */}
                  <span className="absolute top-3 left-3 font-[family-name:var(--font-mono)] text-[10px] text-[#FF6700]/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Avatar */}
                  {member.isPlaceholder ? (
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#FFF1E6] to-[#FFE4CF] border-2 border-dashed border-[#FF6700]/30 flex items-center justify-center mb-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#FF6700]/50">
                        <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={member.img}
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover mb-4"
                    />
                  )}

                  {/* Name */}
                  <p className="font-[family-name:var(--font-mono)] text-xs md:text-sm text-neutral-900 text-center leading-tight">
                    {member.name}
                  </p>

                  {/* School */}
                  <p className="font-[family-name:var(--font-mono)] text-[9px] md:text-[10px] text-neutral-400 uppercase tracking-[0.15em] text-center mt-1.5">
                    {member.school}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>

        {/* Join CTA */}
        <AnimateIn variant="fadeUp" delay={0.6}>
          <div className="text-center mt-12 md:mt-16">
            <a
              href="/apply"
              className="inline-flex items-center justify-center bg-[#FF6700] text-white text-[10px] md:text-xs font-semibold tracking-[0.3em] uppercase px-12 py-4 hover:bg-[#e65c00] transition-colors duration-300"
            >
              Apply Now
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
