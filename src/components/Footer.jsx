import { Github, Mail, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative py-16 border-t border-white/20 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Let’s build something delightful</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">Open to collaborations, freelance work, and full-time opportunities.</p>
        </div>
        <div className="mt-6 flex items-center gap-3">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 hover:opacity-90 dark:bg-white dark:text-black"
          >
            <Mail size={16} /> hello@example.com
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300/70 dark:border-white/20 px-4 py-2 text-gray-900 dark:text-white hover:bg-white/60 dark:hover:bg-white/10"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300/70 dark:border-white/20 px-4 py-2 text-gray-900 dark:text-white hover:bg-white/60 dark:hover:bg-white/10"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
        <p className="mt-10 text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} MyFancyPortfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}
