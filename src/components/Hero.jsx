import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-6 inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
          <span className="text-blue-400 text-sm font-medium">SIEM & SOC Analyst</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-6">
          {t.title}
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="#experience" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-10 py-4 rounded-2xl text-xl font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1"
          >
            {t.cta1}
          </a>
          <a 
            href="#contact" 
            className="border-2 border-slate-600 hover:border-blue-400 px-10 py-4 rounded-2xl text-xl font-semibold hover:bg-slate-800/50 transition-all duration-300"
          >
            {t.cta2}
          </a>
        </div>
      </div>
    </section>
  );
}