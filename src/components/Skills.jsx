import { Shield, Cloud, Code, Cpu, Zap, Wrench } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const META = {
  security:    { Icon: Shield,  gradient: 'from-blue-500 to-cyan-400',    ring: 'border-blue-500/30' },
  cloud:       { Icon: Cloud,   gradient: 'from-purple-500 to-pink-400',  ring: 'border-purple-500/30' },
  tools:       { Icon: Wrench,  gradient: 'from-emerald-500 to-green-400',ring: 'border-emerald-500/30' },
  programming: { Icon: Code,    gradient: 'from-orange-500 to-red-400',   ring: 'border-orange-500/30' },
  automation:  { Icon: Zap,     gradient: 'from-yellow-400 to-amber-400', ring: 'border-yellow-500/30' },
  hardware:    { Icon: Cpu,     gradient: 'from-indigo-500 to-blue-400',  ring: 'border-indigo-500/30' },
};

export default function Skills() {
  const { language } = useLanguage();
  const t = translations[language].skills;

  const headingRef = useScrollAnimation();
  const gridRef = useScrollAnimation(0.08);

  return (
    <section id="skills" className="py-24 bg-slate-900/80">
      <div className="max-w-6xl mx-auto px-4">

        <h2
          ref={headingRef}
          className="fade-up text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          {t.title}
        </h2>

        <div ref={gridRef} className="stagger-grid grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(t.categories).map(([key, category]) => {
            const { Icon, gradient, ring } = META[key];
            return (
              <div
                key={key}
                className={`stagger-item bg-slate-800/50 border border-slate-700/60 ${ring} rounded-2xl p-6 card-glow cursor-default`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, i) => (
                    <span
                      key={i}
                      className="skill-tag px-3 py-1 bg-slate-700/50 border border-slate-600/60 rounded-lg text-xs text-slate-300 hover:bg-slate-700 hover:border-blue-500/50 hover:text-white cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
