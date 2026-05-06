import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Background from './components/Background'
import ParticleNetwork from './components/ParticleNetwork'
import ScrollProgress from './components/ScrollProgress'
import Mascot from './components/Mascot'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white antialiased">
      {/* Layer 0 — gradient orbs */}
      <Background />

      {/* Layer 1 — particle network canvas */}
      <ParticleNetwork />

      {/* Reading progress bar */}
      <ScrollProgress />

      {/* Page content */}
      <div className="relative" style={{ zIndex: 2 }}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />

        <footer className="border-t border-slate-800/60 py-8">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-slate-600 text-sm">
              © {new Date().getFullYear()} Alejandro Cabero Nacimento
            </p>
            <p className="text-slate-700 text-xs font-mono-tech">
              React · Tailwind · Vite
            </p>
          </div>
        </footer>
      </div>

      {/* Mascot — always on top, outside content stacking context */}
      <Mascot />
    </div>
  );
}
