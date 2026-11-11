'use client';

const toolstack = [
  {
    category: 'Workstation & Hardware',
    items: [
      { name: 'Core Machine', detail: 'Portable Unix / Windows dev environment for hybrid mobility' },
      { name: 'Backup Power & Connectivity', detail: 'Local solar backup & mobile dual-SIM LTE data failover in Juba' },
    ],
  },
  {
    category: 'Development Environment',
    items: [
      { name: 'Editor', detail: 'VS Code with minimal theme, zero noisy visual extensions' },
      { name: 'Shell & Terminal', detail: 'Git Bash / PowerShell with clean Git status indicators' },
      { name: 'Languages & Runtimes', detail: 'TypeScript / Node.js, Python, C++, Solidity' },
    ],
  },
  {
    category: 'Deployment & Systems',
    items: [
      { name: 'Web Framework', detail: 'Next.js App Router with TypeScript & Tailwind CSS' },
      { name: 'Database & Storage', detail: 'MongoDB Atlas, PostgreSQL, Supabase' },
      { name: 'Data Collection & BI', detail: 'KoboToolbox, ODK, Power BI, Excel' },
    ],
  },
];

export default function StackSection() {
  return (
    <section id="stack" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            Tooling
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mt-1">
            System & Tools
          </h2>
          <p className="mt-2 text-sm text-neutral-500">
            Daily drivers, software environment, and deployment choices.
          </p>
        </div>

        <div className="md:col-span-2 space-y-6">
          {toolstack.map((group) => (
            <div
              key={group.category}
              className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/30"
            >
              <h3 className="text-xs font-mono uppercase tracking-wider text-orange-600 dark:text-orange-400 mb-3 font-medium">
                {group.category}
              </h3>
              <dl className="divide-y divide-neutral-100 dark:divide-neutral-800/80">
                {group.items.map((item) => (
                  <div key={item.name} className="py-2.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 text-xs">
                    <dt className="font-medium text-neutral-900 dark:text-neutral-100 sm:w-44 shrink-0 font-mono">
                      {item.name}
                    </dt>
                    <dd className="text-neutral-500 dark:text-neutral-400">
                      {item.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

