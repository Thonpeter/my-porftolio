'use client';

import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronDown } from 'react-icons/fa';

interface Project {
  year: string;
  title: string;
  summary: string;
  architecture: {
    problem: string;
    decision: string;
    impact: string;
  };
  metrics?: string[];
  github?: string;
  demo?: string;
  tags: string[];
}

const projects: Project[] = [
  {
    year: '2025',
    title: 'South Sudan National Exams Hub',
    summary: 'A unified digital archive and study hub for South Sudan Certificate of Secondary Education past papers and syllabus notes.',
    architecture: {
      problem: 'Students in regional schools face severe scarcity of syllabus-aligned past papers and curriculum guides.',
      decision: 'Chose Next.js with SSG and MongoDB caching layer to ensure fast page loads over constrained 3G mobile connections.',
      impact: 'Centralized multi-year examination papers into an accessible zero-bloat repository.',
    },
    metrics: ['Sub-second page loads', 'Accessible on low-bandwidth mobile', 'Indexed by subject & year'],
    github: 'https://github.com/Thonpeter/nec',
    demo: 'https://github.com/Thonpeter/nec',
    tags: ['Next.js', 'React', 'TypeScript', 'MongoDB'],
  },
  {
    year: '2025',
    title: 'Lost & Found Platform for South Sudan',
    summary: 'A community credential and property recovery registry built specifically for citizens across South Sudan.',
    architecture: {
      problem: 'Recovering lost national IDs, academic certificates, and personal documents relied on unstructured social media posts.',
      decision: 'Designed a lightweight, category-indexed database with strict search filters and location-based discovery.',
      impact: 'Replaced scattered chat channels with a searchable, permanent recovery registry.',
    },
    metrics: ['Instant keyword search', 'Categorized document recovery', 'Mobile-first design'],
    github: 'https://github.com/Thonpeter/lost-and-found-south-sudan',
    demo: 'https://lostnfound-10hbg7kzf-thons-projects-d3ecb359.vercel.app/',
    tags: ['Next.js', 'MongoDB', 'Tailwind CSS'],
  },
  {
    year: '2024',
    title: 'Amonto Girls Academy Platform',
    summary: 'Official digital portal for an all-girls secondary institution, supporting admissions, academic calendars, and school visibility.',
    architecture: {
      problem: 'The institution needed an authoritative web presence to attract prospective students and communicate curriculum standards.',
      decision: 'Built an editorial, typography-first static platform with zero third-party tracking scripts to maximize speed and privacy.',
      impact: 'Established the school’s digital foundation and direct public contact channel.',
    },
    metrics: ['100% Lighthouse SEO score', 'Zero tracking overhead', 'Mobile responsive'],
    github: 'https://github.com/Thonpeter/amonto',
    demo: 'https://www.amontogirls.com',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    year: '2024',
    title: 'Decentralized Voting System',
    summary: 'Undergraduate thesis project: an immutable cryptographic voting architecture eliminating voter manipulation.',
    architecture: {
      problem: 'Traditional electronic and paper ballots risk central authority tampering and lack verifiable audit trails.',
      decision: 'Utilized Solidity smart contracts on EVM to enforce one-voter-one-vote mechanics with cryptographic immutability.',
      impact: 'Demonstrated verifiable tally integrity without reliance on a single central server.',
    },
    metrics: ['Tamper-evident ledger', 'Smart contract verified', 'Undergraduate Thesis'],
    github: 'https://github.com/Thonpeter/Blockchain-Voting-System',
    tags: ['Solidity', 'Web3', 'React', 'Node.js'],
  },
];

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            Portfolio
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mt-1">
            Selected Work
          </h2>
          <p className="mt-3 text-sm text-neutral-500 leading-relaxed">
            Click any project to inspect architectural decisions, problem constraints, and measurable impact.
          </p>
        </div>

        <div className="md:col-span-2 divide-y divide-neutral-200 dark:divide-neutral-800">
          {projects.map((project, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <article key={project.title} className="py-6 first:pt-0 last:pb-0">
                <div className="flex items-start justify-between gap-4">
                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-left group flex-1 focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono tabular-nums text-neutral-400">
                        {project.year}
                      </span>
                      <h3 className="text-base font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-2">
                        <span>{project.title}</span>
                        <FaChevronDown
                          size={11}
                          className={`text-neutral-400 transform transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </h3>
                    </div>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {project.summary}
                    </p>
                  </button>

                  <div className="flex items-center gap-3 text-neutral-400 pt-1 shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                        className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                      >
                        <FaGithub size={15} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Demo"
                        className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                      >
                        <FaExternalLinkAlt size={13} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-neutral-500 dark:text-neutral-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Architecture Deep Dive Drawer */}
                {isExpanded && (
                  <div className="mt-5 p-5 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-100/40 dark:bg-neutral-900/40 space-y-4 text-xs font-mono animate-in fade-in duration-150">
                    <div>
                      <span className="text-neutral-400 uppercase tracking-wider block mb-1">
                        Problem Constraint
                      </span>
                      <p className="font-sans text-xs text-neutral-700 dark:text-neutral-300">
                        {project.architecture.problem}
                      </p>
                    </div>

                    <div>
                      <span className="text-neutral-400 uppercase tracking-wider block mb-1">
                        Architecture Decision
                      </span>
                      <p className="font-sans text-xs text-neutral-700 dark:text-neutral-300">
                        {project.architecture.decision}
                      </p>
                    </div>

                    {project.metrics && (
                      <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap gap-3">
                        {project.metrics.map((m) => (
                          <span
                            key={m}
                            className="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400"
                          >
                            <span className="w-1 h-1 rounded-full bg-emerald-500" />
                            <span>{m}</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
