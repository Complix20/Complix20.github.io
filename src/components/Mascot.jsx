import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const MSG = {
  es: { main: '¡Sistema seguro!', sub: 'Sin amenazas detectadas 🛡️' },
  en: { main: 'System secure!', sub: 'No threats detected 🛡️' },
};

export default function Mascot() {
  const [hovered, setHovered] = useState(false);
  const { language } = useLanguage();
  const { main, sub } = MSG[language];

  return (
    <div
      className="fixed bottom-5 right-5 z-50 select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Byte — portfolio mascot"
    >
      {/* Speech bubble */}
      {hovered && (
        <div className="absolute bottom-full right-0 mb-3 bubble-appear">
          <div className="bg-slate-800/95 backdrop-blur-sm border border-blue-500/30 rounded-2xl px-4 py-3 shadow-2xl shadow-blue-500/15 whitespace-nowrap">
            <p className="text-sm font-semibold text-white">{main}</p>
            <p className="text-xs text-slate-400 mt-0.5">{sub}</p>
          </div>
          {/* Bubble tail */}
          <div className="absolute -bottom-1.5 right-7 w-3 h-3 bg-slate-800/95 border-r border-b border-blue-500/30 rotate-45 rounded-br-sm" />
        </div>
      )}

      {/* Robot mascot "Byte" */}
      <div className="mascot-float cursor-pointer">
        <svg
          width="70"
          height="90"
          viewBox="0 0 70 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ground glow */}
          <ellipse cx="35" cy="88" rx="20" ry="3.5" fill="rgba(59,130,246,0.2)" />

          {/* Antenna wire */}
          <line x1="35" y1="5" x2="35" y2="0" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" />

          {/* Antenna light (SVG animate for pulse) */}
          <circle cx="35" cy="0" r="2.5" fill="#93c5fd">
            <animate attributeName="r" values="2.5;4.5;2.5" dur="1.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.35;1" dur="1.8s" repeatCount="indefinite" />
            <animate attributeName="fill" values="#93c5fd;#60a5fa;#93c5fd" dur="1.8s" repeatCount="indefinite" />
          </circle>

          {/* Antenna base */}
          <rect x="32" y="4" width="6" height="4" rx="2" fill="#1e293b" />

          {/* Head body */}
          <rect x="7" y="7" width="56" height="40" rx="11" fill="#0f172a" stroke="#2563eb" strokeWidth="1.5" />
          <rect x="9" y="9" width="52" height="36" rx="9" fill="#080e1e" />

          {/* Scanline shimmer on head */}
          <rect x="9" y="9" width="52" height="36" rx="9" fill="url(#scanline)" opacity="0.08" />

          {/* LEFT EYE */}
          <circle cx="25" cy="25" r="8" fill="#010612" />
          <circle cx="25" cy="25" r="6" fill="#1e3a8a" />
          <circle cx="25" cy="25" r="4" fill="#3b82f6" />
          <circle cx="25" cy="25" r="2.2" fill="#bfdbfe" />
          <circle cx="23.2" cy="23.2" r="1.1" fill="white" opacity="0.9" />
          {/* Left blink overlay */}
          <ellipse cx="25" cy="25" rx="8" ry="0" fill="#080e1e">
            <animate attributeName="ry" values="0;0;0;0;0;8;0;0;0;0;0;0;0;0;0;0;0;0;0;0" dur="6s" repeatCount="indefinite" />
          </ellipse>

          {/* RIGHT EYE */}
          <circle cx="45" cy="25" r="8" fill="#010612" />
          <circle cx="45" cy="25" r="6" fill="#1e3a8a" />
          <circle cx="45" cy="25" r="4" fill="#3b82f6" />
          <circle cx="45" cy="25" r="2.2" fill="#bfdbfe" />
          <circle cx="43.2" cy="23.2" r="1.1" fill="white" opacity="0.9" />
          {/* Right blink overlay */}
          <ellipse cx="45" cy="25" rx="8" ry="0" fill="#080e1e">
            <animate attributeName="ry" values="0;0;0;0;0;8;0;0;0;0;0;0;0;0;0;0;0;0;0;0" dur="6s" begin="0.08s" repeatCount="indefinite" />
          </ellipse>

          {/* Mouth / speaker grille */}
          <rect x="17" y="38" width="36" height="5" rx="2.5" fill="#010612" />
          <rect x="19" y="39.5" width="4.5" height="2" rx="1" fill="#3b82f6" opacity="0.75" />
          <rect x="25.5" y="39.5" width="4.5" height="2" rx="1" fill="#3b82f6" opacity="0.5" />
          <rect x="32" y="39.5" width="4.5" height="2" rx="1" fill="#3b82f6" opacity="0.75" />
          <rect x="38.5" y="39.5" width="4.5" height="2" rx="1" fill="#3b82f6" opacity="0.5" />
          <rect x="45" y="39.5" width="4.5" height="2" rx="1" fill="#3b82f6" opacity="0.75" />

          {/* Neck */}
          <rect x="29" y="47" width="12" height="7" rx="3.5" fill="#0f172a" stroke="#1e40af" strokeWidth="1" />

          {/* Body */}
          <rect x="9" y="54" width="52" height="30" rx="11" fill="#0f172a" stroke="#2563eb" strokeWidth="1.5" />
          <rect x="11" y="56" width="48" height="26" rx="9" fill="#080e1e" />

          {/* Shield on body */}
          <path d="M35 59 L46 64 L46 73 Q46 79 35 81 Q24 79 24 73 L24 64 Z" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="1" />
          <path d="M35 62 L43 66.5 L43 73 Q43 77.5 35 79 Q27 77.5 27 73 L27 66.5 Z" fill="#2563eb" opacity="0.3" />
          {/* Shield pulse ring */}
          <path d="M35 59 L46 64 L46 73 Q46 79 35 81 Q24 79 24 73 L24 64 Z" stroke="#60a5fa" strokeWidth="0.8" fill="none" opacity="0.5">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2.2s" repeatCount="indefinite" />
          </path>
          {/* Checkmark */}
          <path d="M28 72 L33 77 L42 64" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />

          {/* Left arm connector */}
          <rect x="0" y="59" width="9" height="3" rx="1.5" fill="#1e3a8a" />
          <circle cx="0" cy="60.5" r="3" fill="#1e40af" opacity="0.6" />
          <circle cx="0" cy="60.5" r="1.5" fill="#60a5fa" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
          </circle>

          {/* Right arm connector */}
          <rect x="61" y="59" width="9" height="3" rx="1.5" fill="#1e3a8a" />
          <circle cx="70" cy="60.5" r="3" fill="#1e40af" opacity="0.6" />
          <circle cx="70" cy="60.5" r="1.5" fill="#60a5fa" opacity="0.8">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
          </circle>

          {/* Left foot */}
          <rect x="13" y="83" width="18" height="7" rx="3.5" fill="#0f172a" stroke="#1e40af" strokeWidth="1" />

          {/* Right foot */}
          <rect x="39" y="83" width="18" height="7" rx="3.5" fill="#0f172a" stroke="#1e40af" strokeWidth="1" />

          {/* Defs */}
          <defs>
            <linearGradient id="scanline" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
