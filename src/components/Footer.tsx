import React from 'react';
import { CognitiveOpsLogo } from './CognitiveOpsLogo';

interface FooterProps {
  onOpenLegal: (type: 'soc2' | 'privacy' | 'terms') => void;
  onOpenScreen: (type: 'crm' | 'pm' | 'web-quote') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onOpenScreen }) => {
  return (
    <footer className="w-full bg-[#0b0e15] py-16 border-t border-[#272a32] shadow-[0_-1px_8px_rgba(0,0,0,0.2)] text-[#e1e2ec]">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pb-12">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <CognitiveOpsLogo size="md" />
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono uppercase bg-[#272a32] text-[#00dbe9] border border-[#00dbe9]/20">
                Modular Solutions
              </span>
            </div>

            <p className="text-sm text-[#b9cacb] max-w-sm leading-relaxed">
              We engineer modern web platforms, intelligent business systems, and scalable custom software powered by AI for forward-thinking enterprises.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#191b23] border border-[#272a32]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#65f2b5]"></span>
                <span className="font-mono text-xs text-[#6ffbbe]">
                  Now booking Q2 projects
                </span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase text-white tracking-wider font-semibold">
              Services
            </h3>
            <ul className="space-y-2 text-xs text-[#b9cacb]">
              <li>
                <button
                  onClick={() => onOpenScreen('web-quote')}
                  className="hover:text-[#dbfcff] transition-colors text-left"
                >
                  Web &amp; SaaS Platforms
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenScreen('crm')}
                  className="hover:text-[#dbfcff] transition-colors text-left"
                >
                  AI Enterprise CRM
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenScreen('pm')}
                  className="hover:text-[#dbfcff] transition-colors text-left"
                >
                  Predictive PM Software
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenScreen('web-quote')}
                  className="hover:text-[#dbfcff] transition-colors text-left"
                >
                  Custom AI Integration
                </button>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase text-white tracking-wider font-semibold">
              Company
            </h3>
            <ul className="space-y-2 text-xs text-[#b9cacb]">
              <li>
                <a href="#about" className="hover:text-[#dbfcff] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#dbfcff] transition-colors">
                  How We Work
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#dbfcff] transition-colors">
                  Client Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#dbfcff] transition-colors">
                  Contact &amp; Scoping
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div className="space-y-2.5">
            <h3 className="font-mono text-xs uppercase text-white tracking-wider font-semibold">
              Direct Contact
            </h3>
            <p className="text-xs text-[#b9cacb]">
              Have a question or looking to start a new project?
            </p>
            <p className="font-mono text-xs text-[#dbfcff] font-semibold">
              hello@cognitiveops.ai
            </p>
            <p className="font-mono text-[11px] text-[#849495]">
              Replies within 24 business hours
            </p>
          </div>

        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#272a32] text-xs text-[#849495]">
          <div>
            <span>© 2025 CognitiveOps Inc. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal('soc2')}
              className="hover:text-[#dbfcff] transition-colors cursor-pointer"
            >
              SOC2 Certified
            </button>
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-[#dbfcff] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-[#dbfcff] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
