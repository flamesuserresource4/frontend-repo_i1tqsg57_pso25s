import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-b from-white via-white to-white dark:from-black dark:via-black dark:to-black overflow-hidden">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0" aria-hidden>
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft radial glow overlays that don't block interactions */}
        <div className="pointer-events-none absolute -top-40 -left-40 h-[60vh] w-[60vh] rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[60vh] w-[60vh] rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-28 sm:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/60 dark:bg-white/10 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-200 backdrop-blur">
            <Sparkles size={14} /> Tech • Interactive • Modern
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            A playful, modern portfolio that feels alive
          </h1>
          <p className="mt-5 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I craft delightful experiences at the intersection of code and design. Scroll to explore my projects, skills, and ways to reach me.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-blue-600 to-fuchsia-600 px-5 py-3 text-white font-medium shadow-lg shadow-indigo-500/30 hover:opacity-95"
            >
              Explore Projects
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300/70 dark:border-white/20 px-5 py-3 text-gray-900 dark:text-white font-medium backdrop-blur hover:bg-white/60 dark:hover:bg-white/10"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
