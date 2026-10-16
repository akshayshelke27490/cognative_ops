import React from 'react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Scoping',
      desc: 'We dig deep into your business goals, user personas, workflows, and technical constraints to outline a crisp roadmap.',
      deliverable: 'Technical Scope & Sprint Plan',
    },
    {
      num: '02',
      title: 'Rapid Prototype',
      desc: 'Within days, review clickable high-fidelity wireframes and software architecture specifications before building.',
      deliverable: 'Interactive Figma & Architecture Spec',
    },
    {
      num: '03',
      title: 'Full Build & AI Integration',
      desc: 'Bi-weekly sprint releases with continuous testing, strict quality assurance, and seamless agent pipeline integration.',
      deliverable: 'Working Software on Staging Environment',
    },
    {
      num: '04',
      title: 'Scale & Support',
      desc: 'Production deployment, team training, performance optimization, and SLA-backed ongoing evolution.',
      deliverable: 'Zero-Downtime AWS/Vercel Launch & SLA',
    },
  ];

  return (
    <section className="w-full bg-[#191b23] py-16 md:py-20 border-y border-[#272a32]/40" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[#dbfcff] font-semibold block mb-2">
            How We Work
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#e1e2ec] tracking-tight mb-2">
            A Transparent 4-Step Process
          </h2>
          <p className="text-sm sm:text-base text-[#b9cacb]">
            From initial napkin sketch to production deployment, we deliver clarity and momentum at every step.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 rounded-xl bg-[#1d1f27]/80 border border-[#272a32] flex flex-col justify-between hover:border-[#3b494b] transition-all group"
            >
              <div>
                <span className="font-mono text-2xl font-bold text-[#dbfcff] group-hover:text-[#00f0ff] transition-colors block mb-3">
                  {step.num}
                </span>
                <h4 className="text-base font-semibold text-[#e1e2ec] mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-[#b9cacb] leading-relaxed mb-4">
                  {step.desc}
                </p>
              </div>
              <div className="pt-3 border-t border-[#272a32]/60 text-[11px] font-mono text-[#849495] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]"></span>
                <span className="truncate">{step.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
