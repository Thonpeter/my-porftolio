'use client';

const competencies = [
  {
    category: 'Engineering',
    items: ['TypeScript', 'React / Next.js', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST & GraphQL'],
  },
  {
    category: 'Architecture & Systems',
    items: ['Distributed Systems', 'Smart Contracts / Web3', 'Database Optimization', 'System Design'],
  },
  {
    category: 'Teaching & Instruction',
    items: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Curriculum Design', 'Technical Mentorship'],
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            About
          </h2>
          <p className="mt-2 text-sm text-neutral-500">Background & approach</p>
        </div>

        <div className="md:col-span-2 space-y-6 text-neutral-600 dark:text-neutral-400 text-base leading-relaxed">
          <p>
            I am a software engineer and computer science educator based in South Sudan. My work centers on building reliable web applications, designing practical educational tools, and helping the next generation of developers master fundamentals.
          </p>
          <p>
            I value code clarity, minimal dependencies, and thoughtful user experience over superficial animation and novelty. Whether constructing community platforms or teaching algorithmic thinking, the objective remains the same: make complex technology accessible and dependable.
          </p>

          <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 space-y-6">
            <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-500">
              Core Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {competencies.map((group) => (
                <div key={group.category}>
                  <h4 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                    {group.category}
                  </h4>
                  <ul className="space-y-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
