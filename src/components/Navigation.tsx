'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '@/contexts/ThemeContext';
import CommandPalette from '@/components/CommandPalette';

const navItems = [
  { name: 'About', href: '/#about' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Writing', href: '/blog' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        isScrolled
          ? 'bg-neutral-50/90 dark:bg-neutral-950/90 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800/80'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
        >
          Thon Peter Mawut
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => {
            const isActive = item.href === '/blog' ? pathname.startsWith('/blog') : false;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm tracking-tight transition-colors ${
                  isActive
                    ? 'font-medium text-orange-600 dark:text-orange-400'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-orange-600 dark:hover:text-orange-400'
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          <CommandPalette />

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-colors"
          >
            {theme === 'dark' ? <FaSun size={14} /> : <FaMoon size={14} />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 text-neutral-600 dark:text-neutral-400"
          >
            {theme === 'dark' ? <FaSun size={15} /> : <FaMoon size={15} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 text-neutral-700 dark:text-neutral-300"
          >
            {mobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/95 dark:bg-neutral-950/95 backdrop-blur-md px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-neutral-50"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
