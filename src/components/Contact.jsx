import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const headingRef = useScrollAnimation();
  const gridRef = useScrollAnimation(0.1);

  const items = [
    {
      href: `mailto:${t.email}`,
      icon: Mail,
      label: 'Email',
      value: t.email,
      iconColor: 'text-blue-400',
      borderHover: 'hover:border-blue-500/50',
    },
    {
      href: `tel:${t.phone}`,
      icon: Phone,
      label: t.labels.phone,
      value: t.phone,
      iconColor: 'text-green-400',
      borderHover: 'hover:border-green-500/50',
    },
    {
      href: null,
      icon: MapPin,
      label: t.labels.location,
      value: t.location,
      iconColor: 'text-purple-400',
      borderHover: '',
    },
    {
      href: `https://linkedin.com/in/${t.linkedin}`,
      icon: Linkedin,
      label: 'LinkedIn',
      value: t.linkedin,
      iconColor: 'text-blue-500',
      borderHover: 'hover:border-blue-500/50',
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-900/80">
      <div className="max-w-4xl mx-auto px-4">

        <h2
          ref={headingRef}
          className="fade-up text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          {t.title}
        </h2>
        <p className="text-center text-slate-500 mb-12">{t.subtitle}</p>

        <div ref={gridRef} className="stagger-grid grid sm:grid-cols-2 gap-4 mb-10">
          {items.map((item, i) => {
            const Icon = item.icon;
            const Tag = item.href ? 'a' : 'div';
            const extraProps = item.href
              ? {
                  href: item.href,
                  ...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
                }
              : {};

            return (
              <Tag
                key={i}
                {...extraProps}
                className={`stagger-item flex items-start gap-4 bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6 card-glow ${item.borderHover} transition-all duration-250 ${item.href ? 'cursor-pointer hover:-translate-y-0.5' : 'cursor-default'}`}
              >
                <div className="p-2.5 bg-slate-700/50 rounded-xl shrink-0">
                  <Icon className={`w-5 h-5 ${item.iconColor}`} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-slate-200 text-sm font-medium truncate">{item.value}</p>
                </div>
              </Tag>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href={`mailto:${t.email}`}
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-10 py-4 rounded-2xl font-semibold text-white shadow-xl shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-250 hover:-translate-y-0.5 cursor-pointer"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
