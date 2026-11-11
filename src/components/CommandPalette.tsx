'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from '@/contexts/ThemeContext';
import { FaSearch, FaMoon, FaSun, FaTimes, FaFilePdf, FaGithub, FaLinkedin, FaFolder, FaBriefcase, FaUser, FaPenNib, FaEnvelope } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface CommandItem {
  label: string;
  action: () => void;
  shortcut?: string;
  icon?: IconType;
}

interface CommandCategory {
  category: string;
  items: CommandItem[];
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const actions: CommandCategory[] = [
    {
      category: 'Navigation',
      items: [
        { label: 'Go to Selected Projects', action: () => router.push('/#projects'), shortcut: 'P', icon: FaFolder },
        { label: 'Go to Work Dossier', action: () => router.push('/#experience'), shortcut: 'E', icon: FaBriefcase },
        { label: 'Go to About & Background', action: () => router.push('/#about'), shortcut: 'A', icon: FaUser },
        { label: 'Read Writing & Blog', action: () => router.push('/blog'), shortcut: 'W', icon: FaPenNib },
        { label: 'Get in Touch', action: () => router.push('/#contact'), shortcut: 'C', icon: FaEnvelope },
      ],
    },
    {
      category: 'Preferences & Actions',
      items: [
        {
          label: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
          action: () => toggleTheme(),
          shortcut: 'T',
          icon: theme === 'dark' ? FaSun : FaMoon,
        },
        {
          label: 'Download Curriculum Vitae (PDF)',
          action: () => window.open('/Resume-2024.pdf', '_blank'),
          icon: FaFilePdf,
        },
        {
          label: 'Visit GitHub Profile',
          action: () => window.open('https://github.com/Thonpeter', '_blank'),
          icon: FaGithub,
        },
        {
          label: 'Visit LinkedIn Profile',
          action: () => window.open('https://linkedin.com/in/thon-peter', '_blank'),
          icon: FaLinkedin,
        },
      ],
    },
  ];

  const filteredCategories = actions
    .map((cat) => ({
      ...cat,
      items: cat.items.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        aria-label="Open command menu"
        className="hidden lg:inline-flex items-center gap-2 px-2.5 py-1 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/60 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 text-xs font-mono text-neutral-500 transition-colors"
      >
        <span>Command</span>
        <kbd className="px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 text-[10px] text-neutral-600 dark:text-neutral-400">
          ⌘K
        </kbd>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="w-full max-w-xl rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center px-4 border-b border-neutral-200 dark:border-neutral-800">
          <FaSearch className="text-neutral-400 mr-3" size={14} />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search commands, sections, or articles..."
            className="w-full py-3.5 bg-transparent text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none"
          />
          <button
            onClick={() => setOpen(false)}
            className="p-1 rounded text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
          >
            <FaTimes size={13} />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-neutral-100 dark:divide-neutral-900">
          {filteredCategories.length === 0 ? (
            <p className="p-6 text-center text-sm text-neutral-400">
              No matching commands found.
            </p>
          ) : (
            filteredCategories.map((cat) => (
              <div key={cat.category} className="py-2 first:pt-0 last:pb-0">
                <span className="block px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                  {cat.category}
                </span>
                <div className="space-y-0.5">
                  {cat.items.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <button
                        key={item.label}
                        onClick={() => {
                          item.action();
                          setOpen(false);
                        }}
                        className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors text-left"
                      >
                        <span className="flex items-center gap-2.5">
                          {ItemIcon && <ItemIcon className="text-neutral-400" size={14} />}
                          <span>{item.label}</span>
                        </span>
                        {item.shortcut && (
                          <kbd className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-500">
                            {item.shortcut}
                          </kbd>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="px-4 py-2 bg-neutral-50 dark:bg-neutral-900/40 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-neutral-400">
          <span>Navigate with mouse or keyboard</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
}
