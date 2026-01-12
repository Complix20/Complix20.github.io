import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Alejandro Cabero
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-blue-400 transition">{t.about}</a>
            <a href="#experience" className="hover:text-blue-400 transition">{t.experience}</a>
            <a href="#education" className="hover:text-blue-400 transition">{t.education}</a>
            <a href="#skills" className="hover:text-blue-400 transition">{t.skills}</a>
            <a href="#projects" className="hover:text-blue-400 transition">{t.projects}</a>
            <a href="#contact" className="hover:text-blue-400 transition">{t.contact}</a>
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
            >
              <Globe size={18} />
              <span className="text-sm font-medium">{language === 'es' ? 'ES' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
            >
              <Globe size={18} />
              <span className="text-sm font-medium">{language === 'es' ? 'ES' : 'EN'}</span>
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <a href="#about" className="block hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>{t.about}</a>
            <a href="#experience" className="block hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>{t.experience}</a>
            <a href="#education" className="block hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>{t.education}</a>
            <a href="#skills" className="block hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>{t.skills}</a>
            <a href="#projects" className="block hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>{t.projects}</a>
            <a href="#contact" className="block hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>{t.contact}</a>
          </div>
        )}
      </div>
    </nav>
  );
}