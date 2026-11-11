'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { useEffect, useState } from 'react';

interface BlogDiscussionsProps {
  repo?: string;
  repoId?: string;
  category?: string;
  categoryId?: string;
}

export default function BlogDiscussions({
  repo = 'Thonpeter/thon-peter-portfolio', // Fallback or user configured
}: BlogDiscussionsProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="mt-16 pt-10 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-orange-600 dark:text-orange-400 font-medium">
            Classroom & Community Discussion
          </span>
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mt-1">
            Questions & Insights
          </h3>
          <p className="text-xs text-neutral-500 mt-1">
            Students and readers: sign in with GitHub to share your perspective, ask for clarification, or leave feedback.
          </p>
        </div>

        <a
          href={`https://github.com/Thonpeter`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-neutral-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
        >
          View all discussions ↗
        </a>
      </div>

      {/* Embedded Giscus Frame placeholder / dynamic loader */}
      <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/40 dark:bg-neutral-900/40 text-sm">
        <div className="flex items-center justify-between pb-4 border-b border-neutral-200/80 dark:border-neutral-800/80 text-xs font-mono text-neutral-500">
          <span>Powered by GitHub Discussions</span>
          <span className="text-emerald-600 dark:text-emerald-400">● Open for comments</span>
        </div>

        <div className="py-6 text-center space-y-3">
          <p className="text-neutral-700 dark:text-neutral-300">
            Have a question on this article or want to discuss the code?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://github.com/Thonpeter"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-900 text-xs font-mono uppercase tracking-wider font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
            >
              Start discussion on GitHub
            </a>
            <a
              href="mailto:thonawangjr@gmail.com?subject=Discussion%20Question"
              className="px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-200/60 dark:hover:bg-neutral-800 text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300 transition-colors"
            >
              Ask privately via Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

