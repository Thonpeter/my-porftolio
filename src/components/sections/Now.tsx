'use client';

export default function NowSection() {
  return (
    <section id="now" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              Focus & Activity
            </span>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            What I&apos;m Doing Now
          </h2>
          <p className="mt-2 text-xs font-mono text-neutral-500">
            Updated November 2026 · Juba, South Sudan
          </p>
        </div>

        <div className="md:col-span-2 space-y-6 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/30 space-y-4">
            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 text-sm mb-1">
                1. Computer Science Instruction
              </h3>
              <p>
                Guiding senior students at Amonto Girls Academy through advanced data structures and algorithm analysis, emphasizing memory layout and foundational C/C++ mechanics before diving into framework abstraction.
              </p>
            </div>

            <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800/80">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 text-sm mb-1">
                2. Educational Platform Infrastructure
              </h3>
              <p>
                Maintaining and expanding the South Sudan National Exams Hub to provide offline-first, low-bandwidth access to past secondary school papers and revision resources across multiple states.
              </p>
            </div>

            <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800/80">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 text-sm mb-1">
                3. Technical Writing & Lectures
              </h3>
              <p>
                Documenting systems design principles, teaching reflections, and architectural simplicity in the writing section of this site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

