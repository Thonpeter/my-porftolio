'use client';

import { useState, useEffect } from 'react';

export default function JubaClock() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Africa/Juba',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <div className="inline-flex items-center gap-2 font-mono text-xs text-neutral-500">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
      <span>Juba, SS:</span>
      <span className="tabular-nums font-medium text-neutral-800 dark:text-neutral-200">
        {time} (UTC+2)
      </span>
    </div>
  );
}

