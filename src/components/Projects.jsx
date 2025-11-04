import { ExternalLink, Github, Code2, Star } from 'lucide-react';

const projects = [
  {
    title: 'Neon Dashboard',
    description: 'A reactive analytics dashboard with real-time charts and delightful micro-interactions.',
    tech: ['React', 'Tailwind', 'D3'],
    url: '#',
    repo: '#',
    accent: 'from-fuchsia-500 to-pink-500',
  },
  {
    title: 'AI Playground',
    description: 'Interactive AI demos exploring text, image, and audio generation with smooth UX.',
    tech: ['FastAPI', 'Vite', 'OpenAI'],
    url: '#',
    repo: '#',
    accent: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'Motion Portfolio',
    description: 'A portfolio template with rich motion, accessibility, and theming baked in.',
    tech: ['React', 'Framer Motion', 'ARIA'],
    url: '#',
    repo: '#',
    accent: 'from-emerald-500 to-teal-500',
  },
];

function ProjectCard({ project }) {
  return (
    <div className="group relative rounded-2xl border border-white/20 bg-white/60 dark:bg-white/5 backdrop-blur p-6 overflow-hidden transition-transform will-change-transform hover:-translate-y-1">
      <div className={`pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-br ${project.accent} opacity-30 blur-3xl`} />
      <div className="relative z-10">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Code2 size={16} />
          <span>{project.tech.join(' • ')}</span>
        </div>
        <h3 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
          {project.description}
        </p>
        <div className="mt-5 flex items-center gap-3">
          <a
            href={project.url}
            className="inline-flex items-center gap-2 rounded-full border border-gray-300/70 dark:border-white/20 px-3 py-1.5 text-sm text-gray-900 dark:text-white hover:bg-white/70 dark:hover:bg-white/10"
          >
            <ExternalLink size={16} /> Live
          </a>
          <a
            href={project.repo}
            className="inline-flex items-center gap-2 rounded-full border border-gray-300/70 dark:border-white/20 px-3 py-1.5 text-sm text-gray-900 dark:text-white hover:bg-white/70 dark:hover:bg-white/10"
          >
            <Github size={16} /> Code
          </a>
          <span className="ml-auto inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
            <Star size={14} className="text-amber-400" /> Featured
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-28 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Selected Work</h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300">A few projects that showcase my focus on interactivity, performance, and aesthetics.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
