import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white antialiased">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-slate-900/80 border-t border-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-400">
            © 2026 Alejandro Cabero Nacimento :D
          </p>
        </div>
      </footer>
    </div>
  );
}
