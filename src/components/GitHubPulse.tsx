'use client';

import { useState, useEffect } from 'react';
import { FaCodeBranch } from 'react-icons/fa';

interface RecentActivity {
  repoName: string;
  repoUrl: string;
  updatedAt: string;
}

export default function GitHubPulse() {
  const [activity, setActivity] = useState<RecentActivity | null>(null);

  useEffect(() => {
    async function fetchRecentActivity() {
      try {
        const res = await fetch('/api/github');
        if (!res.ok) return;
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          const latest = data[0];
          setActivity({
            repoName: latest.name || latest.title,
            repoUrl: latest.github || latest.html_url || `https://github.com/Thonpeter/${latest.name}`,
            updatedAt: latest.updated_at || '',
          });
        }
      } catch {
        // Quiet fallback
      }
    }

    fetchRecentActivity();
  }, []);

  if (!activity) return null;

  return (
    <a
      href={activity.repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-neutral-200/80 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/60 hover:border-orange-500/40 text-[11px] font-mono text-neutral-600 dark:text-neutral-400 transition-colors"
      title="Recent public GitHub activity"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
      <FaCodeBranch size={10} className="text-neutral-400" />
      <span>Active on:</span>
      <span className="font-medium text-neutral-800 dark:text-neutral-200 underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-2">
        {activity.repoName}
      </span>
    </a>
  );
}

