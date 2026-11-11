'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import CopyEmailButton from '@/components/CopyEmailButton';
import JubaClock from '@/components/JubaClock';
import GitHubPulse from '@/components/GitHubPulse';
import ResumeDrawer from '@/components/ResumeDrawer';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-12">
        <div className="flex-1 max-w-2xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-orange-600 dark:text-orange-400 font-medium">
              Software Engineer & CS Educator
            </span>
            <span className="text-neutral-300 dark:text-neutral-700">·</span>
            <JubaClock />
            <span className="text-neutral-300 dark:text-neutral-700">·</span>
            <GitHubPulse />
          </div>

          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight">
            Thon Peter Mawut
          </h1>

          <p className="mt-5 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
            Engineering robust web systems, architecting community platforms, and instructing computer science fundamentals in South Sudan.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#projects"
              className="px-4 py-2 rounded-lg bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-950 text-xs font-mono uppercase tracking-wider font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
            >
              Selected Work
            </Link>
            <Link
              href="/blog"
              className="px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/40 text-neutral-800 dark:text-neutral-200 text-xs font-mono uppercase tracking-wider hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              Writing
            </Link>
            <CopyEmailButton />
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-900 flex items-center gap-6 text-xs font-mono text-neutral-500">
            <a
              href="https://github.com/Thonpeter"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              <FaGithub size={15} />
              <span>github/Thonpeter</span>
            </a>
            <a
              href="https://linkedin.com/in/thon-peter"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              <FaLinkedin size={15} />
              <span>linkedin/thon-peter</span>
            </a>
            <div className="ml-auto flex items-center gap-3">
              <ResumeDrawer />
              <span className="text-neutral-300 dark:text-neutral-700">·</span>
              <a
                href="/Resume-2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                PDF ↗
              </a>
            </div>
          </div>
        </div>

        {/* Profile image with subtle rim highlight */}
        <div className="shrink-0">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <Image
              src="/profile picture.jpeg"
              alt="Thon Peter Mawut"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
