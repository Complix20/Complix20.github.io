import { useEffect, useRef } from 'react';

export default function Background() {
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const orb3Ref = useRef(null);
  const orb4Ref = useRef(null);
  const scrollYRef = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const onScroll = () => { scrollYRef.current = window.scrollY; };
    window.addEventListener('scroll', onScroll, { passive: true });

    if (prefersReduced) return () => window.removeEventListener('scroll', onScroll);

    const tick = (time) => {
      const y = scrollYRef.current;
      const t = time * 0.001;

      if (orb1Ref.current) {
        const fx = Math.sin(t * 0.28) * 45;
        const fy = Math.cos(t * 0.18) * 35 + y * -0.13;
        orb1Ref.current.style.transform = `translate(${fx}px, ${fy}px)`;
      }
      if (orb2Ref.current) {
        const fx = Math.cos(t * 0.22) * 55;
        const fy = Math.sin(t * 0.16) * 45 + y * -0.07;
        orb2Ref.current.style.transform = `translate(${fx}px, ${fy}px)`;
      }
      if (orb3Ref.current) {
        const fx = Math.sin(t * 0.19) * 60;
        const fy = Math.cos(t * 0.14) * 50 + y * -0.04;
        orb3Ref.current.style.transform = `translate(${fx}px, ${fy}px)`;
      }
      if (orb4Ref.current) {
        const fx = Math.cos(t * 0.25) * 35;
        const fy = Math.sin(t * 0.2) * 30 + y * -0.09;
        orb4Ref.current.style.transform = `translate(${fx}px, ${fy}px)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Note: dot grid removed — replaced by ParticleNetwork canvas */}

      {/* Orb 1 — top left, blue */}
      <div
        ref={orb1Ref}
        style={{
          position: 'absolute',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 65%)',
          filter: 'blur(55px)',
          top: '-180px',
          left: '-220px',
          willChange: 'transform',
        }}
      />

      {/* Orb 2 — mid right, purple */}
      <div
        ref={orb2Ref}
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.13) 0%, transparent 65%)',
          filter: 'blur(65px)',
          top: '38vh',
          right: '-180px',
          willChange: 'transform',
        }}
      />

      {/* Orb 3 — lower left, indigo */}
      <div
        ref={orb3Ref}
        style={{
          position: 'absolute',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.09) 0%, transparent 65%)',
          filter: 'blur(80px)',
          top: '120vh',
          left: '5%',
          willChange: 'transform',
        }}
      />

      {/* Orb 4 — upper right, cyan */}
      <div
        ref={orb4Ref}
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.09) 0%, transparent 65%)',
          filter: 'blur(50px)',
          top: '10vh',
          right: '15%',
          willChange: 'transform',
        }}
      />
    </div>
  );
}
