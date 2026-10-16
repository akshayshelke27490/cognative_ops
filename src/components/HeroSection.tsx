import React from 'react';

interface HeroSectionProps {
  onExploreServices: () => void;
  onOpenLiveScreens: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreServices,
  onOpenLiveScreens,
}) => {
  return (
    <div className="relative w-full overflow-hidden pt-12 pb-16 md:py-20">
      {/* Ambient Glows */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-[#00f0ff]/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute top-48 right-10 w-[420px] h-[300px] bg-[#3131c0]/15 blur-[120px] rounded-full pointer-events-none"></div>

      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#272a32]/70 border border-[#3b494b]/50 backdrop-blur-md shadow-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse"></span>
          <span className="font-mono text-xs uppercase tracking-wider text-[#dbfcff] font-semibold">
            AI-Powered Software Development Partner
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold max-w-5xl text-[#e1e2ec] tracking-tight leading-[1.15] mb-5">
          We Build Modern Websites, Intelligent CRMs &amp;{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dbfcff] via-[#00dbe9] to-[#e1e0ff]">
            Project Management Software
          </span>{' '}
          Powered by AI
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#b9cacb] max-w-2xl mb-8 leading-relaxed font-normal">
          Transform your business operations with tailor-made web platforms, automated customer workflows, and smart sprint delivery—engineered for growth and future-proofed for modern AI.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              onExploreServices();
            }}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#00f0ff] text-[#006970] text-sm font-semibold hover:shadow-[0_0_24px_rgba(0,240,255,0.45)] hover:bg-[#7df4ff] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Explore Our Services</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>

          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#272a32]/80 text-[#e1e2ec] text-sm font-medium hover:bg-[#32353d] border border-[#3b494b]/40 transition-colors"
          >
            <span className="material-symbols-outlined text-[#00dbe9] text-[18px]">info</span>
            <span>About Our Company</span>
          </a>

          <button
            onClick={onOpenLiveScreens}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-[#191b23] text-[#00f0ff] text-sm font-medium border border-[#00f0ff]/40 hover:bg-[#1d1f27] hover:border-[#00f0ff] transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">visibility</span>
            <span>View Live Screens</span>
          </button>
        </div>

        {/* Trust Bar & Client Counter */}
        <div className="w-full max-w-5xl mx-auto pt-4 border-t border-[#272a32]/60">
          <p className="font-mono text-xs uppercase tracking-widest text-[#849495] mb-5">
            Trusted by 50+ growing businesses &amp; tech innovators
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 items-center">
            <div className="py-2.5 px-4 rounded bg-[#1d1f27]/60 border border-[#272a32]/50 flex items-center justify-center text-xs font-mono font-semibold text-[#b9cacb] hover:text-[#00f0ff] transition-colors">
              &lt;Synthetix/&gt;
            </div>
            <div className="py-2.5 px-4 rounded bg-[#1d1f27]/60 border border-[#272a32]/50 flex items-center justify-center text-xs font-mono font-semibold text-[#b9cacb] hover:text-[#00f0ff] transition-colors">
              NEXUS AI
            </div>
            <div className="py-2.5 px-4 rounded bg-[#1d1f27]/60 border border-[#272a32]/50 flex items-center justify-center text-xs font-mono font-semibold text-[#b9cacb] hover:text-[#00f0ff] transition-colors">
              HYPERSCALE
            </div>
            <div className="py-2.5 px-4 rounded bg-[#1d1f27]/60 border border-[#272a32]/50 flex items-center justify-center text-xs font-mono font-semibold text-[#b9cacb] hover:text-[#00f0ff] transition-colors">
              CYBERLOGIC
            </div>
            <div className="py-2.5 px-4 rounded bg-[#1d1f27]/60 border border-[#272a32]/50 flex items-center justify-center text-xs font-mono font-semibold text-[#b9cacb] hover:text-[#00f0ff] transition-colors col-span-2 sm:col-span-1">
              VECTR SYSTEMS
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
