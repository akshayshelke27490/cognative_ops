import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="w-full bg-[#191b23] py-16 md:py-20 border-y border-[#272a32]/40" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#272a32] border border-[#3b494b]/40 mb-3">
            <span className="font-mono text-xs text-[#dbfcff] uppercase tracking-wider font-semibold">
              Who We Are
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#e1e2ec] tracking-tight mb-3">
            Your Strategic Engineering Partner
          </h2>
          <p className="text-sm sm:text-base text-[#b9cacb] leading-relaxed">
            We are a specialized software development studio fusing senior engineering craft with modern AI automation. We partner with ambitious companies to build high-performance products that automate routine work and accelerate real revenue.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 md:p-8 rounded-xl bg-[#1d1f27]/80 border border-[#272a32] shadow-lg flex flex-col justify-between hover:border-[#3b494b] transition-all">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#32353d] flex items-center justify-center text-[#00f0ff] mb-6">
                <span className="material-symbols-outlined text-[28px]">groups</span>
              </div>
              <h3 className="text-lg font-semibold text-[#e1e2ec] mb-2">
                Senior Engineering Pods
              </h3>
              <p className="text-sm text-[#b9cacb] leading-relaxed mb-6">
                100% full-code ownership with pristine system architectures. Direct collaboration with seasoned engineers, not junior hand-offs or offshore middlemen.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[#dbfcff] font-mono text-xs pt-4 border-t border-[#272a32]/60">
              <span className="material-symbols-outlined text-[#00f0ff] text-[16px]">check_circle</span>
              <span>Zero vendor lock-in</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 md:p-8 rounded-xl bg-[#1d1f27]/80 border border-[#272a32] shadow-lg flex flex-col justify-between hover:border-[#3b494b] transition-all">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#32353d] flex items-center justify-center text-[#e1e0ff] mb-6">
                <span className="material-symbols-outlined text-[28px]">smart_toy</span>
              </div>
              <h3 className="text-lg font-semibold text-[#e1e2ec] mb-2">
                Built for Real-World AI
              </h3>
              <p className="text-sm text-[#b9cacb] leading-relaxed mb-6">
                Seamless integration of custom LLMs, intelligent agents, and conversational pipelines designed to solve practical company bottlenecks with high accuracy.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[#e1e0ff] font-mono text-xs pt-4 border-t border-[#272a32]/60">
              <span className="material-symbols-outlined text-[#c0c1ff] text-[16px]">check_circle</span>
              <span>Production-ready workflows</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 md:p-8 rounded-xl bg-[#1d1f27]/80 border border-[#272a32] shadow-lg flex flex-col justify-between hover:border-[#3b494b] transition-all">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#32353d] flex items-center justify-center text-[#6ffbbe] mb-6">
                <span className="material-symbols-outlined text-[28px]">speed</span>
              </div>
              <h3 className="text-lg font-semibold text-[#e1e2ec] mb-2">
                Agile &amp; Transparent
              </h3>
              <p className="text-sm text-[#b9cacb] leading-relaxed mb-6">
                Bi-weekly delivery sprints, zero fluff, and direct architect access on Slack. You see working software early and often with full transparent reporting.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[#6ffbbe] font-mono text-xs pt-4 border-t border-[#272a32]/60">
              <span className="material-symbols-outlined text-[#6ffbbe] text-[16px]">check_circle</span>
              <span>2-week iterative releases</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
