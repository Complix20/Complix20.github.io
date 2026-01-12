import { Shield, Cloud, Code, Cpu, Zap, Wrench } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Skills() {
  const { language } = useLanguage();
  const t = translations[language].skills;

  const icons = {
    security: Shield,
    cloud: Cloud,
    tools: Wrench,
    programming: Code,
    automation: Zap,
    hardware: Cpu
  };

  const colors = {
    security: 'from-blue-500 to-cyan-500',
    cloud: 'from-purple-500 to-pink-500',
    tools: 'from-green-500 to-emerald-500',
    programming: 'from-orange-500 to-red-500',
    automation: 'from-yellow-500 to-amber-500',
    hardware: 'from-indigo-500 to-blue-500'
  };

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {t.title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(t.categories).map(([key, category]) => {
            const Icon = icons[key];
            const colorClass = colors[key];
            
            return (
              <div key={key} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${colorClass} bg-opacity-10`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 bg-slate-700/50 border border-slate-600 rounded-lg text-sm text-slate-300 hover:bg-slate-700 hover:border-blue-500/50 transition-all"
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