'use client';

import { useState, useEffect } from 'react';

interface TOCItem {
  id: string;
  text: string;
}

export default function TableOfContents({ items }: { items: TOCItem[] }) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <aside className="hidden xl:block fixed right-12 top-40 w-52 space-y-2 text-xs font-mono">
      <span className="block text-[10px] uppercase tracking-wider text-neutral-400">
        On this page
      </span>
      <nav className="space-y-1.5 border-l border-neutral-200 dark:border-neutral-800 pl-3">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`block leading-relaxed transition-colors ${
                isActive
                  ? 'text-orange-600 dark:text-orange-400 font-medium'
                  : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200'
              }`}
            >
              {item.text}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}

