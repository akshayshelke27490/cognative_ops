import React, { useState } from 'react';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  initialService?: string;
  initialOverview?: string;
  onScheduleCall: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = 'Custom Web & SaaS Application',
  initialOverview = '',
  onScheduleCall,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    service: initialService,
    overview: initialOverview,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync if props change
  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  React.useEffect(() => {
    if (initialOverview) {
      setFormData((prev) => ({ ...prev, overview: initialOverview }));
    }
  }, [initialOverview]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24" id="contact">
      <div className="relative w-full rounded-2xl bg-gradient-to-br from-[#272a32] via-[#1d1f27] to-[#0b0e15] p-6 sm:p-10 lg:p-12 border border-[#272a32] shadow-2xl overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#00f0ff]/5 blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#32353d] border border-[#3b494b]/50">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff]"></span>
              <span className="font-mono text-xs text-[#dbfcff] uppercase font-semibold">
                Let&apos;s Build Together
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#e1e2ec] tracking-tight leading-tight">
              Ready to build your next custom software solution?
            </h2>

            <p className="text-sm sm:text-base text-[#b9cacb] max-w-xl leading-relaxed">
              Tell us about your project or business idea. We review every request and respond within 24 hours with architectural suggestions and ballpark scope.
            </p>

            <div className="space-y-4 pt-2 text-sm text-[#b9cacb]">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#00f0ff] text-[20px]">mail</span>
                <span className="font-mono text-xs sm:text-sm text-[#e1e2ec] font-semibold">
                  hello@cognitiveops.ai
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#6ffbbe] text-[20px]">timer</span>
                <span>&lt;24 hours guaranteed architect response</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#c0c1ff] text-[20px]">verified_user</span>
                <span>Non-disclosure agreements signed upon request</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#32353d]/60">
              <p className="text-xs text-[#849495] mb-2">Prefer an instant direct discussion?</p>
              <button
                type="button"
                onClick={onScheduleCall}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#00f0ff] hover:underline"
              >
                <span className="material-symbols-outlined text-sm">calendar_month</span>
                <span>Schedule a 30-min discovery call directly &rarr;</span>
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6 bg-[#0b0e15]/90 border border-[#272a32] backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-[#e1e2ec] mb-5">
              Send Us a Message
            </h3>

            {submitted ? (
              <div className="text-center py-8 space-y-4 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-[#006970]/30 border border-[#00f0ff] mx-auto flex items-center justify-center text-[#00f0ff]">
                  <span className="material-symbols-outlined text-2xl">check_circle</span>
                </div>
                <h4 className="text-base font-bold text-white">Thank You! Message Received.</h4>
                <p className="text-xs text-[#b9cacb] leading-relaxed max-w-sm mx-auto">
                  Our software architects will review your project requirements and email your technical assessment to <strong className="text-white">{formData.email}</strong> within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      company: '',
                      service: 'Custom Web & SaaS Application',
                      overview: '',
                    });
                  }}
                  className="px-4 py-2 rounded-lg bg-[#272a32] text-xs text-[#dbfcff] hover:bg-[#32353d] transition-all"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block font-mono text-[11px] text-[#b9cacb] uppercase mb-1">
                      Your Name *
                    </label>
                    <input
                      className="w-full bg-[#1d1f27] border border-[#272a32] px-3.5 py-2.5 rounded text-sm text-[#e1e2ec] placeholder:text-[#3b494b] outline-none focus:border-[#00f0ff] focus:bg-[#272a32] transition-all"
                      placeholder="Sarah Jenkins"
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[11px] text-[#b9cacb] uppercase mb-1">
                      Work Email *
                    </label>
                    <input
                      className="w-full bg-[#1d1f27] border border-[#272a32] px-3.5 py-2.5 rounded text-sm text-[#e1e2ec] placeholder:text-[#3b494b] outline-none focus:border-[#00f0ff] focus:bg-[#272a32] transition-all"
                      placeholder="sarah@company.com"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[11px] text-[#b9cacb] uppercase mb-1">
                    Company / Organization
                  </label>
                  <input
                    className="w-full bg-[#1d1f27] border border-[#272a32] px-3.5 py-2.5 rounded text-sm text-[#e1e2ec] placeholder:text-[#3b494b] outline-none focus:border-[#00f0ff] focus:bg-[#272a32] transition-all"
                    placeholder="Acme Corp"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] text-[#b9cacb] uppercase mb-1">
                    Service Interested In
                  </label>
                  <select
                    className="w-full bg-[#1d1f27] border border-[#272a32] px-3.5 py-2.5 rounded text-sm text-[#e1e2ec] outline-none focus:border-[#00f0ff] focus:bg-[#272a32] transition-all"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="Custom Web & SaaS Application">Custom Web &amp; SaaS Application</option>
                    <option value="Intelligent Enterprise CRM">Intelligent Enterprise CRM</option>
                    <option value="Predictive Project Management Tool">Predictive Project Management Tool</option>
                    <option value="Custom AI & Agent Automation">Custom AI &amp; Agent Automation</option>
                    <option value="Full-Stack Consultation">Full-Stack Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[11px] text-[#b9cacb] uppercase mb-1">
                    Brief Project Overview
                  </label>
                  <textarea
                    className="w-full bg-[#1d1f27] border border-[#272a32] px-3.5 py-2.5 rounded text-sm text-[#e1e2ec] placeholder:text-[#3b494b] outline-none focus:border-[#00f0ff] focus:bg-[#272a32] transition-all resize-none"
                    placeholder="Tell us about what you'd like to build, your timeline, or current challenges..."
                    rows={3}
                    value={formData.overview}
                    onChange={(e) => setFormData({ ...formData, overview: e.target.value })}
                  ></textarea>
                </div>

                <button
                  className="w-full mt-2 py-3 px-4 rounded-lg bg-[#00f0ff] text-[#006970] font-semibold text-sm hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:bg-[#7df4ff] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'Transmitting Scope...' : 'Send Message'}</span>
                  <span className="material-symbols-outlined text-[18px]">
                    {isSubmitting ? 'hourglass_top' : 'send'}
                  </span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
