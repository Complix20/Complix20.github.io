import { Folder, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language].projects;

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {t.title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((project, index) => (
            <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all hover:scale-105 group">
              <div className="flex items-start justify-between mb-4">
                <Folder className="w-10 h-10 text-blue-400" />
                <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-slate-400 mb-4 text-sm leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-2 py-1 bg-blue-500/10 border border-blue-500/30 rounded text-xs text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}