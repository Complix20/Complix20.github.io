import { Shield, Server, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const cardIcons = [Shield, Server, TrendingUp];
const cardColors = [
  { border: 'border-blue-500/20', bg: 'from-blue-500/8 to-blue-500/4', icon: 'text-blue-400' },
  { border: 'border-purple-500/20', bg: 'from-purple-500/8 to-purple-500/4', icon: 'text-purple-400' },
  { border: 'border-indigo-500/20', bg: 'from-indigo-500/8 to-indigo-500/4', icon: 'text-indigo-400' },
];

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  const headingRef = useScrollAnimation();
  const textRef = useScrollAnimation();
  const cardsRef = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-slate-900/60">
      <div className="max-w-6xl mx-auto px-4">

        <h2
          ref={headingRef}
          className="fade-up text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          {t.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Text + stats + languages */}
          <div ref={textRef} className="fade-left space-y-6">
            <p className="text-slate-300 leading-relaxed text-[1.05rem]">{t.description}</p>
            <p className="text-slate-400 leading-relaxed">{t.focus}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 card-glow">
                <div className="text-3xl font-bold text-blue-400 mb-1">{t.stats.year}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">{t.stats.experience}</div>
              </div>
              <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 card-glow">
                <div className="text-3xl font-bold text-purple-400 mb-1">1000+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">{t.stats.alerts}</div>
              </div>
            </div>

            {/* Languages */}
            <div className="flex items-center gap-3 pt-1">
              <span className="text-xs text-slate-500 uppercase tracking-wider shrink-0">
                {t.languagesLabel}
              </span>
              <div className="flex gap-2 flex-wrap">
                {t.languages.map((lang) => (
                  <span
                    key={lang.name}
                    className="px-3 py-1 bg-slate-800/60 border border-slate-700/60 rounded-lg text-xs text-slate-300"
                  >
                    {lang.name}
                    <span className="text-blue-400 ml-1">· {lang.level}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div ref={cardsRef} className="fade-right space-y-4">
            {t.cards.map((card, i) => {
              const Icon = cardIcons[i];
              const color = cardColors[i];
              return (
                <div
                  key={i}
                  className={`bg-gradient-to-br ${color.bg} border ${color.border} p-5 rounded-2xl card-glow cursor-default`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className={`w-5 h-5 ${color.icon}`} />
                    <h3 className="font-semibold text-white">{card.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
