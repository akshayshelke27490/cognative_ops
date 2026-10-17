import React, { useState } from 'react';
import { CognitiveOpsLogo } from './CognitiveOpsLogo';

interface HeaderProps {
  onScheduleCall: () => void;
  onOpenLiveScreens: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onScheduleCall, onOpenLiveScreens }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-40 bg-[#10131a]/85 backdrop-blur-xl border-b border-[#272a32]/40 shadow-[0_1px_8px_rgba(0,0,0,0.24)]">
      <div className="h-16 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Brand Lockup */}
        <div className="flex items-center gap-6 shrink-0">
          <a href="#" className="flex items-center gap-2 group">
            <CognitiveOpsLogo size="md" />
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono uppercase bg-[#272a32] text-[#00dbe9] tracking-wider border border-[#00dbe9]/20">
              Modular Solutions
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
            <a
              href="#about"
              className="px-3 py-1.5 rounded text-[#b9cacb] hover:text-[#dbfcff] hover:bg-[#1d1f27]/50 transition-colors"
            >
              About Us
            </a>
            <a
              href="#services"
              className="px-3 py-1.5 rounded text-[#b9cacb] hover:text-[#dbfcff] hover:bg-[#1d1f27]/50 transition-colors"
            >
              Services &amp; Solutions
            </a>
            <a
              href="#why-us"
              className="px-3 py-1.5 rounded text-[#b9cacb] hover:text-[#dbfcff] hover:bg-[#1d1f27]/50 transition-colors"
            >
              Why Us
            </a>
            <a
              href="#testimonials"
              className="px-3 py-1.5 rounded text-[#b9cacb] hover:text-[#dbfcff] hover:bg-[#1d1f27]/50 transition-colors"
            >
              Testimonials
            </a>
            <button
              onClick={onOpenLiveScreens}
              className="px-3 py-1.5 rounded text-[#00f0ff] hover:bg-[#00f0ff]/10 transition-colors flex items-center gap-1 font-semibold"
            >
              <span className="material-symbols-outlined text-sm">laptop_mac</span>
              <span>Live Screens</span>
            </button>
            <a
              href="#contact"
              className="px-3 py-1.5 rounded text-[#b9cacb] hover:text-[#dbfcff] hover:bg-[#1d1f27]/50 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Right CTA Area */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded bg-[#191b23] border border-[#272a32]">
            <span className="w-2 h-2 rounded-full bg-[#65f2b5] animate-pulse"></span>
            <span className="font-mono text-[10px] uppercase text-[#b9cacb] tracking-wider">
              Accepting New Projects
            </span>
          </div>

          <button
            onClick={onScheduleCall}
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#00f0ff] text-[#006970] font-semibold text-sm hover:shadow-[0_0_20px_rgba(0,240,255,0.45)] hover:bg-[#7df4ff] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Schedule a Call
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#b9cacb] hover:text-white hover:bg-[#1d1f27]"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#272a32] bg-[#10131a] px-4 py-3 space-y-1">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded text-sm text-[#b9cacb] hover:text-white hover:bg-[#191b23]"
          >
            About Us
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded text-sm text-[#b9cacb] hover:text-white hover:bg-[#191b23]"
          >
            Services &amp; Solutions
          </a>
          <a
            href="#why-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded text-sm text-[#b9cacb] hover:text-white hover:bg-[#191b23]"
          >
            Why Us
          </a>
          <a
            href="#testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded text-sm text-[#b9cacb] hover:text-white hover:bg-[#191b23]"
          >
            Testimonials
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenLiveScreens();
            }}
            className="w-full text-left px-3 py-2 rounded text-sm text-[#00f0ff] hover:bg-[#191b23] flex items-center gap-2 font-semibold"
          >
            <span className="material-symbols-outlined text-sm">laptop_mac</span>
            <span>Live Screens &amp; Demo Explorer</span>
          </button>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded text-sm text-[#b9cacb] hover:text-white hover:bg-[#191b23]"
          >
            Contact &amp; Scoping
          </a>
        </div>
      )}
    </header>
  );
};
