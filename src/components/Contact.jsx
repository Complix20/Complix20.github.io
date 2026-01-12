import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {t.title}
        </h2>
        <p className="text-center text-slate-400 mb-12 text-lg">{t.subtitle}</p>

        <div className="grid md:grid-cols-2 gap-6">
          <a 
            href={`mailto:${t.email}`}
            className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all hover:scale-105 group"
          >
            <Mail className="w-8 h-8 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <p className="text-slate-400">{t.email}</p>
          </a>

          <a 
            href={`tel:${t.phone}`}
            className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all hover:scale-105 group"
          >
            <Phone className="w-8 h-8 text-green-400 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-white mb-2">Teléfono</h3>
            <p className="text-slate-400">{t.phone}</p>
          </a>

          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
            <MapPin className="w-8 h-8 text-purple-400 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Ubicación</h3>
            <p className="text-slate-400">{t.location}</p>
          </div>

          <a 
            href={`https://linkedin.com/in/${t.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all hover:scale-105 group"
          >
            <Linkedin className="w-8 h-8 text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
            <p className="text-slate-400">{t.linkedin}</p>
          </a>
        </div>

        <div className="mt-12 text-center">
          <a 
            href={`mailto:${t.email}`}
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}