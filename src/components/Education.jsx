import { GraduationCap, Award, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Education() {
  const { language } = useLanguage();
  const t = translations[language].education;

  return (
    <section id="education" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {t.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Degree */}
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl p-8">
            <GraduationCap className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">{t.degree.title}</h3>
            <p className="text-lg text-blue-300 mb-4">{t.degree.institution}</p>
            <div className="space-y-2">
              <p className="text-slate-300">{t.degree.period}</p>
              <p className="text-slate-300 font-semibold">{t.degree.gpa}</p>
            </div>
          </div>

          {/* Leadership */}
          <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/30 rounded-2xl p-8">
            <Users className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">{t.leadership.title}</h3>
            <p className="text-lg text-purple-300 mb-2">{t.leadership.role}</p>
            <p className="text-sm text-slate-400 mb-4">{t.leadership.period}</p>
            <p className="text-slate-300">{t.leadership.description}</p>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <Award className="text-yellow-400" />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Certificaciones
            </span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {t.certifications.map((cert, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all hover:scale-105">
                <div className="flex items-start gap-3 mb-3">
                  <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">{cert.title}</h4>
                    <p className="text-sm text-blue-400">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-400">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}