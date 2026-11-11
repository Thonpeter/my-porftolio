'use client';

import { useState } from 'react';
import { FaTimes, FaFileDownload, FaExternalLinkAlt } from 'react-icons/fa';

export default function ResumeDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors flex items-center gap-1"
      >
        <span>CV Preview</span>
        <span className="text-[10px] font-mono text-neutral-400">⌘R</span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 sm:p-8 shadow-2xl space-y-6 animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-orange-600 dark:text-orange-400">
                  Curriculum Vitae Quick View
                </span>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mt-1">
                  Thon Peter Mawut
                </h3>
                <p className="text-xs text-neutral-500 font-mono mt-0.5">
                  Software Engineer & CS Educator · Juba, South Sudan
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/Resume-2024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 text-xs font-mono text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5 transition-colors"
                >
                  <FaFileDownload size={12} />
                  <span>Download PDF</span>
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
                >
                  <FaTimes size={14} />
                </button>
              </div>
            </div>

            <div className="space-y-6 text-sm text-neutral-700 dark:text-neutral-300">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  Executive Profile
                </h4>
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  Computer Science graduate from University of Nairobi (Upper Second Class Honors). Practical experience bridging low-bandwidth web architectures, decentralized systems, and secondary STEM education in East Africa.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  Core Technical Stack
                </h4>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {['TypeScript', 'React / Next.js', 'Node.js', 'Python', 'C / C++', 'Solidity', 'SQL / MongoDB', 'Power BI / Kobo'].map(
                    (s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                      >
                        {s}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  Positions & Track Record
                </h4>
                <div className="space-y-3 text-xs leading-relaxed">
                  <div>
                    <div className="font-medium text-neutral-900 dark:text-neutral-100 flex justify-between">
                      <span>Computer Science Tutor — Amonto Girls Academy</span>
                      <span className="font-mono text-neutral-400">2024 — Present</span>
                    </div>
                    <p className="text-neutral-500 mt-0.5">
                      Teaching algorithmic principles, C/C++ memory mechanics, and web development.
                    </p>
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900 dark:text-neutral-100 flex justify-between">
                      <span>Data Systems Assistant — World Vision Uganda</span>
                      <span className="font-mono text-neutral-400">2021 — 2022</span>
                    </div>
                    <p className="text-neutral-500 mt-0.5">
                      Coordinated mobile survey pipelines & SQL reporting across 10,000+ data collections.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  Education & Verification
                </h4>
                <p className="text-xs text-neutral-500">
                  BSc in Computer Science, University of Nairobi (2019–2024) · Thesis in Decentralized Blockchain Voting.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-900 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-950 text-xs font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

