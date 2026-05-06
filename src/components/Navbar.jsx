import { Menu, X, Globe, Shield } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;

  const sections = ['about', 'experience', 'education', 'skills', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollY = window.scrollY + 120;
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = (id) =>
    `text-sm font-medium transition-colors duration-200 cursor-pointer ${
      activeSection === id
        ? 'text-blue-400'
        : 'text-slate-400 hover:text-white'
    }`;

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-slate-900/98 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
        : 'bg-slate-900/80 backdrop-blur-sm border-b border-slate-800/40'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group cursor-pointer">
            <div className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
              <Shield size={16} className="text-blue-400" />
            </div>
            <span className="font-bold text-white group-hover:text-blue-400 transition-colors">
              Alejandro Cabero<span className="text-blue-400">.</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-7">
            {sections.map((id) => (
              <a key={id} href={`#${id}`} className={linkClass(id)}>
                {t[id] || id}
              </a>
            ))}

            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 transition-all duration-200 cursor-pointer"
            >
              <Globe size={14} className="text-slate-400" />
              <span className="text-xs font-semibold text-slate-300 font-mono-tech">
                {language.toUpperCase()}
              </span>
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 cursor-pointer"
            >
              <Globe size={14} className="text-slate-400" />
              <span className="text-xs font-semibold text-slate-300 font-mono-tech">
                {language.toUpperCase()}
              </span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="p-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 pt-1 space-y-1 border-t border-slate-800/50">
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  activeSection === id
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {t[id] || id}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
