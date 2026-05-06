import { GraduationCap, Award, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Education() {
  const { language } = useLanguage();
  const t = translations[language].education;

  const headingRef = useScrollAnimation();
  const topRowRef = useScrollAnimation();
  const certTitleRef = useScrollAnimation();
  const certsRef = useScrollAnimation(0.06);

  return (
    <section id="education" className="py-24 bg-slate-900/60">
      <div className="max-w-6xl mx-auto px-4">

        <h2
          ref={headingRef}
          className="fade-up text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          {t.title}
        </h2>

        {/* Degree + Leadership */}
        <div ref={topRowRef} className="fade-up grid md:grid-cols-2 gap-6 mb-12">

          <div className="bg-gradient-to-br from-blue-500/8 to-purple-500/4 border border-blue-500/25 rounded-2xl p-7 card-glow">
            <GraduationCap className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-1">{t.degree.title}</h3>
            <p className="text-blue-300 font-medium mb-4">{t.degree.institution}</p>
            <div className="space-y-1">
              <p className="text-slate-400 text-sm">{t.degree.period}</p>
              <p className="text-slate-300 text-sm font-semibold">{t.degree.gpa}</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/8 to-indigo-500/4 border border-purple-500/25 rounded-2xl p-7 card-glow">
            <Users className="w-10 h-10 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-1">{t.leadership.title}</h3>
            <p className="text-purple-300 font-medium mb-1">{t.leadership.role}</p>
            <p className="text-slate-500 text-xs mb-3 font-mono-tech">{t.leadership.period}</p>
            <p className="text-slate-400 text-sm leading-relaxed">{t.leadership.description}</p>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3
            ref={certTitleRef}
            className="fade-up flex items-center justify-center gap-2 text-xl font-bold text-center mb-8"
          >
            <Award className="text-yellow-400 w-5 h-5" />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              {t.certificationTitle}
            </span>
          </h3>

          <div ref={certsRef} className="stagger-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.certifications.map((cert, index) => (
              <div
                key={index}
                className="stagger-item bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5 card-glow cursor-default flex flex-col"
              >
                <div className="flex items-start gap-2.5 mb-3">
                  <Award className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <h4 className="font-semibold text-white text-sm leading-snug mb-1">{cert.title}</h4>
                    <p className="text-xs text-blue-400 font-medium">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed flex-1">{cert.description}</p>
                <p className="text-slate-600 text-xs font-mono-tech mt-3">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
