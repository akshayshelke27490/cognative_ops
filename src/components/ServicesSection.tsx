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
            What We Do
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#e1e2ec] tracking-tight mb-3">
          Our Core Services
        </h2>
        <p className="text-sm sm:text-base text-[#b9cacb] leading-relaxed">
          End-to-end custom digital platforms, intelligent customer workflows, and operational tools designed for scale.
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
    </section>
  );
};
