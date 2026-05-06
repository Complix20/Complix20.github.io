import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

function TypingText({ text }) {
  const [displayed, setDisplayed] = useState('');
  const prefersReduced =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  useEffect(() => {
    if (prefersReduced) { setDisplayed(text); return; }
    setDisplayed('');
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(timer);
    }, 55);
    return () => clearInterval(timer);
  }, [text, prefersReduced]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <span className="cursor-blink">|</span>
      )}
    </span>
  );
}

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const contentRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const onScroll = () => {
      const y = window.scrollY;
      if (!contentRef.current) return;
      contentRef.current.style.transform = `translateY(${y * 0.22}px)`;
      contentRef.current.style.opacity = `${Math.max(0, 1 - y / 520)}`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle vignette to improve text readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 75% 65% at 50% 50%, transparent 20%, rgba(15,23,42,0.55) 100%)',
        }}
      />

      {/* Parallax content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        style={{ willChange: 'transform, opacity' }}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-blue-500/10 border border-blue-500/25 rounded-full backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="ping-dot absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="text-blue-300 text-sm font-medium">{t.badge}</span>
        </div>

        {/* Role chip */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Terminal size={13} className="text-slate-600" />
          <span className="font-mono-tech text-xs text-slate-600 tracking-widest uppercase">
            SIEM · SOC · Cloud Security
          </span>
        </div>

        {/* Main title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-glow bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent leading-tight">
          <TypingText text={t.title} />
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#experience"
            className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-250 hover:-translate-y-0.5 cursor-pointer"
          >
            {t.cta1}
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-slate-600 hover:border-blue-500 rounded-xl font-semibold text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-250 hover:-translate-y-0.5 cursor-pointer backdrop-blur-sm"
          >
            {t.cta2}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none">
        <span className="text-xs text-slate-700 font-mono-tech tracking-widest uppercase">scroll</span>
        <ArrowDown size={15} className="text-slate-700 scroll-bounce" />
      </div>
    </section>
  );
}
