import { Briefcase, Award, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function TimelineItem({ job, t, index, isLast }) {
  const ref = useScrollAnimation(0.08);

  return (
    <div ref={ref} className="fade-up relative pl-10 md:pl-14" style={{ transitionDelay: `${index * 120}ms` }}>

      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-3 md:left-5 top-8 bottom-0 w-px bg-gradient-to-b from-blue-500/60 to-transparent" />
      )}

      {/* Timeline dot */}
      <div className={`absolute left-0 md:left-2 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center timeline-dot ${
        index === 0
          ? 'bg-blue-500 border-blue-400'
          : 'bg-slate-700 border-slate-500'
      }`}>
        <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-white' : 'bg-slate-400'}`} />
      </div>

      {/* Card */}
      <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6 md:p-7 card-glow mb-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{job.role}</h3>
            <div className="flex items-center gap-1.5 text-blue-400 font-medium text-sm mb-1.5">
              <Briefcase size={14} />
              <span>{job.company}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-500 text-xs">
              <MapPin size={12} />
              <span>{job.location}</span>
            </div>
          </div>
          <span className="self-start sm:self-auto px-3 py-1 bg-purple-500/15 border border-purple-500/25 rounded-full text-purple-300 text-xs font-medium whitespace-nowrap font-mono-tech">
            {job.period}
          </span>
        </div>

        {/* Responsibilities */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            {t.responsibilities}
          </h4>
          <ul className="space-y-2">
            {job.description.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-300 text-sm leading-relaxed">
                <span className="text-blue-400 mt-1 shrink-0">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Achievements */}
        {job.achievements.length > 0 && (
          <div className="pt-4 border-t border-slate-700/50">
            <h4 className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
              <Award size={13} className="text-yellow-400" />
              {t.achievements}
            </h4>
            <ul className="space-y-2">
              {job.achievements.map((a, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-300 text-sm leading-relaxed">
                  <span className="text-yellow-400 mt-1 shrink-0">★</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  const { language } = useLanguage();
  const t = translations[language].experience;

  const headingRef = useScrollAnimation();

  return (
    <section id="experience" className="py-24 bg-slate-900/80">
      <div className="max-w-4xl mx-auto px-4">

        <h2
          ref={headingRef}
          className="fade-up text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          {t.title}
        </h2>

        <div className="relative">
          {t.jobs.map((job, index) => (
            <TimelineItem
              key={index}
              job={job}
              t={t}
              index={index}
              isLast={index === t.jobs.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
