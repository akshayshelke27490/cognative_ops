import React from 'react';
import { Testimonial } from '../types';

export const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote:
        '“CognitiveOps rebuilt our custom CRM and automated lead handling from the ground up. Client onboarding went from days to under 10 minutes. The engineering quality is exceptional.”',
      name: 'Dr. Marcus Vance',
      role: 'VP of Engineering',
      company: 'Vectr Systems',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDoQi0JvigRulJKDGy4oV6RbIVc9t1dicRvhb5-kSzNTeSvUViB_9x3oAWxHwji3saobFP63iCfVkXVO1OBOB_c5lghnHxEgfz1GEHPPZmUdGrMDbuNIWinhKYiEQJTJiZA_HylMSHs3euYWsaDU36MTFYY31Gp-8m2v4sEed8D7OF-IvVZNE34SPHoR-8wlQQtwjbVeGx95WiFX0t_Bk2-DetAJ6N2Zj-fXw64qbrqX-nioR6kjCAS',
      metric: 'Onboarding: Days → <10 mins',
    },
    {
      quote:
        '“The predictive project management software they built for our 80-person engineering team accurately spots release bottlenecks two weeks early. It saved us hundreds of wasted hours.”',
      name: 'Elena Rostova',
      role: 'Head of Platform',
      company: 'Hyperscale',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDelmSCP2g-gnfmXAepFx8B7lZopXE8wrQOq9eCEhUyVqE7drAOnaA52r7GXWaqwYFw_b5GrHZi2m4WnNCCuf20_bEnHOj7tbDT-zZ2dZ97rOYDpNOMvb7nPclB2mFI0KA6l19u1MwCwf8RGvNby1RWEOAHWMb81XAEWPQpS1XzP5zixc0vS97S55q4ISrnG62vKnfi4xdr9lcglKzzUme9cEzQNxCkYUR992mvpI6nwu4Yq7Gist-w',
      metric: 'Bottlenecks spotted 2 weeks early',
    },
    {
      quote:
        '“Finding an agency that truly understands both pixel-perfect modern web UX and practical AI models is rare. CognitiveOps delivered our customer SaaS portal two weeks ahead of schedule.”',
      name: 'David Morales',
      role: 'Founder & CEO',
      company: 'Synthetix',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAUQZ0831SpW--585ie1uX9DFW2KHiypTF7Evjs22lnF1ESCn7xByENFme9vKUcuxf-4TzQJi-JdsdJYaOPM1BfXk7v65OLabCNFLU6Vu3chnOWbhI1Xc8To7vniVn8TKL7ZLd0NZHBpSGGtFNUivojARqLBxcyM85quclptWxyAAGSLH_AL55Lr8ry9lBbVqAPBugi18m3nRUmT6ONfwqCl0WBsXSqfydDtd867CS5y0fp_eBulxPG',
      metric: 'Delivered 2 weeks ahead of plan',
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24" id="testimonials">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="font-mono text-xs uppercase tracking-widest text-[#dbfcff] font-semibold block mb-2">
          Client Stories
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#e1e2ec] tracking-tight">
          What Founders &amp; Engineering Leaders Say
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="p-6 md:p-8 rounded-xl bg-[#1d1f27]/70 border border-[#272a32] flex flex-col justify-between shadow-md hover:border-[#3b494b] transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1 text-[#00f0ff]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm">
                      star
                    </span>
                  ))}
                </div>
                {t.metric && (
                  <span className="font-mono text-[11px] text-[#6ffbbe] px-2 py-0.5 rounded bg-[#10131a] border border-[#272a32]">
                    {t.metric}
                  </span>
                )}
              </div>
              <p className="text-sm text-[#e1e2ec] leading-relaxed mb-6">
                {t.quote}
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-[#32353d]/50">
              <img
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover border border-[#272a32]"
                src={t.avatar}
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="font-semibold text-sm text-[#e1e2ec]">
                  {t.name}
                </div>
                <div className="font-mono text-xs text-[#b9cacb]">
                  {t.role} • {t.company}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
