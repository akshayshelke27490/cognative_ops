/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InteractiveScreensModal } from './components/InteractiveScreensModal';
import { ScheduleCallModal } from './components/ScheduleCallModal';
import { LegalModal } from './components/LegalModal';
import { ActiveScreenType } from './types';

export default function App() {
  const [scheduleCallOpen, setScheduleCallOpen] = useState(false);
  const [activeScreen, setActiveScreen] = useState<ActiveScreenType>(null);
  const [legalModalType, setLegalModalType] = useState<'soc2' | 'privacy' | 'terms' | null>(null);
  
  // Cross-component communication (e.g. from screen configurator to contact form)
  const [prefilledService, setPrefilledService] = useState('Custom Web & SaaS Application');
  const [prefilledOverview, setPrefilledOverview] = useState('');

  const handleSelectServiceForContact = (service: string, notes?: string) => {
    setPrefilledService(service);
    if (notes) {
      setPrefilledOverview(notes);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const servicesElem = document.getElementById('services');
    if (servicesElem) {
      servicesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#10131a] text-[#e1e2ec] font-sans antialiased selection:bg-[#00f0ff]/20 selection:text-[#00f0ff]">
      {/* Fixed Header */}
      <Header
        onScheduleCall={() => setScheduleCallOpen(true)}
        onOpenLiveScreens={() => setActiveScreen('crm')}
      />

      {/* Main Content Area */}
      <main className="w-full pt-16">
        <HeroSection
          onExploreServices={handleExploreServices}
          onOpenLiveScreens={() => setActiveScreen('crm')}
        />

        <AboutSection />

        <ServicesSection
          onOpenScreen={(screen) => setActiveScreen(screen)}
          onSelectServiceForContact={handleSelectServiceForContact}
        />

        <ProcessSection />

        <TestimonialsSection />

        <ContactSection
          initialService={prefilledService}
          initialOverview={prefilledOverview}
          onScheduleCall={() => setScheduleCallOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenLegal={(type) => setLegalModalType(type)}
        onOpenScreen={(screen) => setActiveScreen(screen)}
      />

      {/* Interactive Live Screens Modal */}
      <InteractiveScreensModal
        activeScreen={activeScreen}
        onClose={() => setActiveScreen(null)}
        onSelectServiceForContact={handleSelectServiceForContact}
      />

      {/* Schedule a Call Modal */}
      <ScheduleCallModal
        isOpen={scheduleCallOpen}
        onClose={() => setScheduleCallOpen(false)}
      />

      {/* Legal & Compliance Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
