import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-200/80 dark:border-neutral-800/80">
          {/* Identity & Current Availability */}
          <div className="md:col-span-5 space-y-3">
            <Link
              href="/"
              className="text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
            >
              Thon Peter Mawut
            </Link>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Software Engineer & Computer Science Educator based in Juba, South Sudan. Focused on resilient web architecture, data systems, and developer mentorship.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-neutral-600 dark:text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for select projects & collaborations</span>
            </div>
          </div>

          {/* Site Navigation */}
          <div className="md:col-span-3 space-y-3">
            <span className="block text-xs font-mono uppercase tracking-wider text-neutral-400">
              Navigation
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#about"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  About & Background
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  Selected Work
                </Link>
              </li>
              <li>
                <Link
                  href="/#experience"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  Work Dossier
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  Writing & Thoughts
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Elsewhere / Channels */}
          <div className="md:col-span-4 space-y-3">
            <span className="block text-xs font-mono uppercase tracking-wider text-neutral-400">
              Elsewhere
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/Thonpeter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors flex items-center justify-between"
                >
                  <span>GitHub</span>
                  <span className="text-xs font-mono text-neutral-400">@Thonpeter</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/thon-peter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors flex items-center justify-between"
                >
                  <span>LinkedIn</span>
                  <span className="text-xs font-mono text-neutral-400">/in/thon-peter</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:thonawangjr@gmail.com"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors flex items-center justify-between"
                >
                  <span>Email</span>
                  <span className="text-xs font-mono text-neutral-400">thonawangjr@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="/Resume-2024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors flex items-center justify-between"
                >
                  <span>Curriculum Vitae</span>
                  <span className="text-xs font-mono text-neutral-400">PDF</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <div>
            Built with Next.js, TypeScript & Tailwind CSS. Zero AI bloat.
          </div>
          <div>
            © {currentYear} Thon Peter Mawut.
          </div>
        </div>
      </div>
    </footer>
  );
}
