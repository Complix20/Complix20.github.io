import { Shield, TrendingUp, Server } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {t.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              {t.description}
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              {t.focus}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-blue-400 mb-1">{t.stats.year}</div>
                <div className="text-sm text-slate-400">{t.stats.experience}</div>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-purple-400 mb-1">1000+</div>
                <div className="text-sm text-slate-400">{t.stats.alerts}</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 p-6 rounded-2xl">
              <Shield className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">SIEM & SOC</h3>
              <p className="text-slate-400">Monitoreo 24/7, análisis de alertas y respuesta a incidentes</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/20 p-6 rounded-2xl">
              <Server className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cloud Security</h3>
              <p className="text-slate-400">Azure, AWS y OCI - Infraestructura segura en la nube</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border border-indigo-500/20 p-6 rounded-2xl">
              <TrendingUp className="w-12 h-12 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t.stats.integration}</h3>
              <p className="text-slate-400">{t.stats.sources} de datos integradas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}