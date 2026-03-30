import StickyBanner from "@/components/StickyBanner";
import Hero from "@/components/Hero";
import WeWantYou from "@/components/WeWantYou";
import WeWantYou2 from "@/components/WeWantYou2";
import WhatYoullDo from "@/components/WhatYoullDo";
import Tiers from "@/components/Tiers";
import HowToJoin from "@/components/HowToJoin";
import MeetTheTeam from "@/components/MeetTheTeam";

export default function Home() {
  return (
    <main className="relative">
      <StickyBanner />
      {/* Scattered gradient blobs */}
      <div className="gradient-blob gradient-blob-1" />
      <div className="gradient-blob gradient-blob-2" />
      <div className="gradient-blob gradient-blob-3" />
      <div className="gradient-blob gradient-blob-4" />

      <Hero />
      <WeWantYou />
      <WhatYoullDo />
      <Tiers />
      <WeWantYou2 />
      <HowToJoin />
      <MeetTheTeam />
    </main>
  );
}
