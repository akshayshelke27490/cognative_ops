export type ActiveScreenType = 'crm' | 'pm' | 'web-quote' | null;

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  metric?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tag: string;
  icon: string;
  description: string;
  highlights: string[];
  ctaText: string;
  screenType: 'web-quote' | 'crm' | 'pm';
  badgeColorClass: string;
  glowColorClass: string;
  accentTextColor: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  overview: string;
}
