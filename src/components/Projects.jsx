import { Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const PROJECT_COLORS = [
  'from-blue-500/12 to-purple-500/8',
  'from-purple-500/12 to-indigo-500/8',
  'from-indigo-500/12 to-blue-500/8',
];

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language].projects;

  const headingRef = useScrollAnimation();
  const gridRef = useScrollAnimation(0.08);

  return (
    <section id="projects" className="py-24 bg-slate-900/60">
      <div className="max-w-6xl mx-auto px-4">

        <h2
          ref={headingRef}
          className="fade-up text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          {t.title}
        </h2>

        <div ref={gridRef} className="stagger-grid grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.items.map((project, index) => (
            <div
              key={index}
              className={`stagger-item project-card relative bg-gradient-to-br ${PROJECT_COLORS[index % 3]} border border-slate-700/60 rounded-2xl p-6 overflow-hidden group cursor-default`}
            >
              {/* Top row */}
              <div className="mb-4">
                <div className="p-2 bg-blue-500/15 border border-blue-500/20 rounded-xl inline-flex">
                  <Terminal className="w-5 h-5 text-blue-400" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-base font-bold text-white mb-2 leading-snug">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/25 rounded text-xs text-blue-300 font-mono-tech"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover shimmer line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
