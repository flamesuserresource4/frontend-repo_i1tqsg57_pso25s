import { Github, Mail, Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/30 dark:bg-black/30 border-b border-white/20 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 font-semibold tracking-tight text-gray-900 dark:text-white">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 via-indigo-500 to-fuchsia-500 text-white">
            <Rocket size={18} />
          </span>
          <span className="text-lg">MyFancyPortfolio</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition">Projects</a>
          <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition">About</a>
          <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium bg-gray-900 text-white hover:opacity-90 dark:bg-white dark:text-black"
          >
            <Mail size={16} />
            Say hi
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center justify-center h-9 w-9 rounded-full border border-gray-300/70 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
