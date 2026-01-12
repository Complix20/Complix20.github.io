import { Briefcase, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Experience() {
  const { language } = useLanguage();
  const t = translations[language].experience;

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {t.title}
        </h2>

        <div className="space-y-8">
          {t.jobs.map((job, index) => (
            <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 md:p-8 hover:border-blue-500/50 transition-all">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">{job.role}</h3>
                  <div className="flex items-center gap-2 text-slate-300 mb-1">
                    <Briefcase size={18} />
                    <span className="font-semibold">{job.company}</span>
                  </div>
                  <p className="text-slate-400 text-sm">{job.location}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium">
                    {job.period}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-slate-200 mb-3">Responsabilidades:</h4>
                  <ul className="space-y-2">
                    {job.description.map((item, i) => (
                      <li key={i} className="text-slate-300 flex items-start gap-2">
                        <span className="text-blue-400 mt-1">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {job.achievements.length > 0 && (
                  <div className="pt-4 border-t border-slate-700">
                    <h4 className="text-lg font-semibold text-slate-200 mb-3 flex items-center gap-2">
                      <Award size={20} className="text-yellow-400" />
                      Logros Clave:
                    </h4>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="text-slate-300 flex items-start gap-2">
                          <span className="text-yellow-400 mt-1">★</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}