import React from 'react';
import { ActiveScreenType } from '../types';

interface ServicesSectionProps {
  onOpenScreen: (screen: ActiveScreenType) => void;
  onSelectServiceForContact: (service: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenScreen,
  onSelectServiceForContact,
}) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24" id="services">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#272a32] border border-[#3b494b]/40 mb-3">
          <span className="font-mono text-xs text-[#dbfcff] uppercase tracking-wider font-semibold">
            Capabilities &amp; Solutions
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#e1e2ec] tracking-tight mb-3">
          Our Services &amp; Custom Solutions
        </h2>
        <p className="text-sm sm:text-base text-[#b9cacb] leading-relaxed">
          From scalable web platforms and intelligent CRM engines to autonomous AI agents, operational tools, and bespoke enterprise software.
        </p>
      </div>

      {/* Services 3-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        
        {/* Card 1: Custom Web & Platform Development */}
        <div className="group p-6 md:p-8 rounded-xl bg-[#1d1f27]/70 hover:bg-[#272a32]/80 border border-[#272a32] hover:border-[#00f0ff]/40 transition-all flex flex-col justify-between shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-lg bg-[#32353d] flex items-center justify-center text-[#00f0ff]">
                <span className="material-symbols-outlined text-[28px]">devices</span>
              </div>
              <span className="font-mono text-xs font-semibold text-[#dbfcff] px-2.5 py-1 rounded bg-[#32353d] uppercase tracking-wider">
                Web &amp; SaaS
              </span>
            </div>

            <h3 className="text-xl font-semibold text-[#e1e2ec] mb-3 leading-snug">
              Custom Web &amp; Platform Development
            </h3>

            <p className="text-sm text-[#b9cacb] leading-relaxed mb-6">
              Modern, responsive web applications, customer portals, and high-conversion business software engineered with React, Next.js, and ultra-fast APIs.
            </p>

            <ul className="space-y-2.5 text-xs text-[#b9cacb] mb-6">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#00f0ff] text-[16px]">check_circle</span>
                <span>Ultra-fast, mobile-first responsive design</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#00f0ff] text-[16px]">check_circle</span>
                <span>Secure authentication &amp; payment integrations</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#00f0ff] text-[16px]">check_circle</span>
                <span>Scalable cloud architecture on AWS / Vercel</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-[#32353d]/50 flex items-center justify-between">
            <button
              onClick={() => onOpenScreen('web-quote')}
              className="flex items-center gap-1.5 text-[#dbfcff] font-semibold text-xs group-hover:text-[#00dbe9] transition-colors"
            >
              <span>Request Web Quote</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
            <button
              onClick={() => onOpenScreen('web-quote')}
              className="px-2 py-1 rounded bg-[#10131a] text-[10px] font-mono text-[#00f0ff] border border-[#272a32] hover:bg-[#272a32]"
            >
              Configure Stack
            </button>
          </div>
        </div>

        {/* Card 2: AI-Powered Enterprise CRM */}
        <div className="group p-6 md:p-8 rounded-xl bg-[#1d1f27]/70 hover:bg-[#272a32]/80 border border-[#272a32] hover:border-[#c0c1ff]/40 transition-all flex flex-col justify-between shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3131c0] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-lg bg-[#32353d] flex items-center justify-center text-[#c0c1ff]">
                <span className="material-symbols-outlined text-[28px]">contact_phone</span>
              </div>
              <span className="font-mono text-xs font-semibold text-[#c0c1ff] px-2.5 py-1 rounded bg-[#32353d] uppercase tracking-wider">
                AI CRM
              </span>
            </div>

            <h3 className="text-xl font-semibold text-[#e1e2ec] mb-3 leading-snug">
              AI-Powered Enterprise CRM
            </h3>

            <p className="text-sm text-[#b9cacb] leading-relaxed mb-6">
              Turn messy sales processes into unified pipelines. We develop bespoke CRMs with automatic lead enrichment, interaction logging, and instant follow-ups.
            </p>

            <ul className="space-y-2.5 text-xs text-[#b9cacb] mb-6">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#c0c1ff] text-[16px]">check_circle</span>
                <span>Automated meeting summaries &amp; follow-up drafts</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#c0c1ff] text-[16px]">check_circle</span>
                <span>Predictive lead scoring &amp; churn warning</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#c0c1ff] text-[16px]">check_circle</span>
                <span>Seamless bi-directional email/calendar sync</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-[#32353d]/50 flex items-center justify-between">
            <button
              onClick={() => onOpenScreen('crm')}
              className="flex items-center gap-1.5 text-[#c0c1ff] font-semibold text-xs group-hover:text-[#dbfcff] transition-colors"
            >
              <span>Request CRM Demo</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
            <button
              onClick={() => onOpenScreen('crm')}
              className="px-2 py-1 rounded bg-[#10131a] text-[10px] font-mono text-[#c0c1ff] border border-[#272a32] hover:bg-[#272a32]"
            >
              Launch Screen
            </button>
          </div>
        </div>

        {/* Card 3: Intelligent Project Management Tools */}
        <div className="group p-6 md:p-8 rounded-xl bg-[#1d1f27]/70 hover:bg-[#272a32]/80 border border-[#272a32] hover:border-[#6ffbbe]/40 transition-all flex flex-col justify-between shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#65f2b5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-lg bg-[#32353d] flex items-center justify-center text-[#65f2b5]">
                <span className="material-symbols-outlined text-[28px]">space_dashboard</span>
              </div>
              <span className="font-mono text-xs font-semibold text-[#6ffbbe] px-2.5 py-1 rounded bg-[#32353d] uppercase tracking-wider">
                Smart PM
              </span>
            </div>

            <h3 className="text-xl font-semibold text-[#e1e2ec] mb-3 leading-snug">
              Intelligent Project Management Tools
            </h3>

            <p className="text-sm text-[#b9cacb] leading-relaxed mb-6">
              Tailored management consoles that help teams forecast delivery dates, balance workloads intelligently, and prevent costly bottlenecks before they occur.
            </p>

            <ul className="space-y-2.5 text-xs text-[#b9cacb] mb-6">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#6ffbbe] text-[16px]">check_circle</span>
                <span>Smart sprint estimations &amp; delivery forecasts</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#6ffbbe] text-[16px]">check_circle</span>
                <span>Automated team resource &amp; capacity balancing</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#6ffbbe] text-[16px]">check_circle</span>
                <span>Real-time executive health &amp; milestone dashboards</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-[#32353d]/50 flex items-center justify-between">
            <button
              onClick={() => onOpenScreen('pm')}
              className="flex items-center gap-1.5 text-[#6ffbbe] font-semibold text-xs group-hover:text-[#dbfcff] transition-colors"
            >
              <span>Explore PM Systems</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
            <button
              onClick={() => onOpenScreen('pm')}
              className="px-2 py-1 rounded bg-[#10131a] text-[10px] font-mono text-[#6ffbbe] border border-[#272a32] hover:bg-[#272a32]"
            >
              Launch Screen
            </button>
          </div>
        </div>

      </div>

      {/* Custom & Specialized Solutions Banner */}
      <div className="mt-8 p-6 md:p-8 rounded-xl bg-gradient-to-r from-[#1d1f27] via-[#272a32]/90 to-[#1d1f27] border border-[#272a32] relative overflow-hidden shadow-lg">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#32353d] text-[#00f0ff] font-mono text-[11px] uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">hub</span>
              <span>Bespoke &amp; Adaptive Solutions</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#e1e2ec] tracking-tight">
              Need a Custom or Specialized Software Solution?
            </h3>
            <p className="text-sm text-[#b9cacb] leading-relaxed">
              We are not limited to fixed software categories. Whether you need autonomous AI agents, automated workflow micro-services, internal operations dashboards, or proprietary data pipelines, we architect tailored software engineered for your specific stack.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {['Autonomous AI Agents', 'Internal Ops Portals', 'Custom API & ETL Engines', 'Legacy Modernization', 'Multi-Tenant SaaS'].map((tag) => (
                <span key={tag} className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#191b23] text-[#dbfcff] border border-[#272a32]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
            <a
              href="#contact"
              onClick={() => onSelectServiceForContact('Custom AI & Enterprise Software')}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#00f0ff] text-[#006970] text-sm font-semibold hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:bg-[#7df4ff] transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Scope a Custom Solution</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
