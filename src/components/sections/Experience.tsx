'use client';

import { useState } from 'react';

interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: string;
  mission: string;
  highlights: string[];
  stack: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 'amonto',
    role: 'Computer Science Tutor',
    organization: 'Amonto Girls Academy',
    location: 'Juba, South Sudan',
    period: '2024 — Present',
    type: 'Instruction & Technical Mentorship',
    mission: 'Empowering young women in South Sudan with foundational computer science principles and practical software development skills.',
    highlights: [
      'Architected and delivered curriculum covering C, C++, and JavaScript fundamentals, object-oriented concepts, and memory principles.',
      'Introduced applied data literacy, guiding students through practical data analytics and visual dashboards using SQL and Power BI.',
      'Mentored students through hands-on web development projects from idea to functional prototype.',
    ],
    stack: ['C', 'C++', 'JavaScript', 'Power BI', 'SQL', 'Curriculum Design'],
  },
  {
    id: 'world-vision',
    role: 'Data Systems Assistant',
    organization: 'World Vision Uganda',
    location: 'Adjumani, Uganda',
    period: '2021 — 2022',
    type: 'Field Operations & Data Engineering',
    mission: 'Ensuring data integrity and real-time humanitarian field assessment across refugee settlement operations.',
    highlights: [
      'Deployed and managed mobile data collection architectures using ODK & Kobo Toolbox across 10,000+ household interviews.',
      'Maintained system backups, data hygiene protocols, and disaster recovery procedures with zero data loss.',
      'Generated analytical business intelligence reports using SQL, Excel, and Power BI for rapid aid distribution and stakeholder monitoring.',
      'Trained and supported field enumerators on digital survey protocols and sync problem mitigation.',
    ],
    stack: ['Kobo Toolbox', 'ODK', 'SQL', 'Power BI', 'Excel', 'Data Hygiene'],
  },
  {
    id: 'opm',
    role: 'Data Entry Intern',
    organization: 'Office of the Prime Minister',
    location: 'Refugee Desk, Uganda',
    period: 'Jul 2023 — Sep 2023',
    type: 'Public Records & Data Auditing',
    mission: 'Processing and auditing high-priority humanitarian identity registries within government protocols.',
    highlights: [
      'Processed, cross-verified, and reconciled sensitive demographic and biometric records for 500+ refugee files.',
      'Collaborated with government data officers to audit records and ensure alignment with national verification standards.',
    ],
    stack: ['Database Administration', 'Data Audit', 'Government Protocols'],
  },
];

export default function Experience() {
  const [activeId, setActiveId] = useState(experiences[0].id);
  const current = experiences.find((e) => e.id === activeId) || experiences[0];

  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Work Dossier
        </h2>
        <p className="mt-1.5 sm:mt-2 text-sm text-neutral-500">
          Track record across software instruction, data engineering, and field operations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Role Selector List */}
        <div className="md:col-span-4 flex md:flex-col gap-2 overflow-x-auto pb-3 md:pb-0 border-b md:border-b-0 md:border-r border-neutral-200 dark:border-neutral-800 pr-0 md:pr-4 no-scrollbar">
          {experiences.map((exp) => {
            const isSelected = exp.id === activeId;
            return (
              <button
                key={exp.id}
                onClick={() => setActiveId(exp.id)}
                className={`text-left px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm transition-all shrink-0 md:shrink border-l-2 ${
                  isSelected
                    ? 'border-orange-500 bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900 font-medium'
                    : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900'
                }`}
              >
                <div className="font-medium whitespace-nowrap md:whitespace-normal">{exp.organization}</div>
                <div className={`text-[11px] sm:text-xs mt-0.5 whitespace-nowrap md:whitespace-normal ${isSelected ? 'text-neutral-300 dark:text-neutral-600' : 'text-neutral-400 dark:text-neutral-500'}`}>
                  {exp.role}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Dossier Card */}
        <div className="md:col-span-8 p-4 sm:p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/30">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 pb-4 border-b border-neutral-100 dark:border-neutral-800">
            <div>
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-orange-600 dark:text-orange-400 font-medium">
                {current.type}
              </span>
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100 mt-1">
                {current.role}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                {current.organization} · {current.location}
              </p>
            </div>
            <span className="text-xs font-mono text-neutral-500 shrink-0 mt-1 sm:mt-0">
              {current.period}
            </span>
          </div>

          <div className="my-5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
              Focus & Mission
            </h4>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {current.mission}
            </p>
          </div>

          <div className="my-5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
              Key Contributions
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              {current.highlights.map((item, idx) => (
                <li key={idx} className="leading-relaxed flex items-start gap-2">
                  <span className="text-neutral-400 select-none">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2.5">
              Tools & Environment
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {current.stack.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
