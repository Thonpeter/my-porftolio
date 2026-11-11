'use client';

import { useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';

interface CodeSnippetProps {
  language?: string;
  filename?: string;
  code: string;
}

export default function CodeSnippet({
  language = 'typescript',
  filename,
  code,
}: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="my-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 text-neutral-100 overflow-hidden shadow-sm">
      {/* Window bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-950/80 border-b border-neutral-800 text-xs font-mono text-neutral-400">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
          </div>
          {filename && <span className="ml-2 text-neutral-300">{filename}</span>}
        </div>

        <div className="flex items-center gap-3">
          <span className="uppercase text-[10px] text-orange-400 font-medium">{language}</span>
          {language === 'cpp' && (
            <a
              href={`https://godbolt.org/`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-neutral-400 hover:text-orange-400 transition-colors hidden sm:inline"
            >
              Run Compiler ↗
            </a>
          )}
          <button
            onClick={handleCopy}
            aria-label="Copy code snippet"
            className="flex items-center gap-1.5 hover:text-neutral-200 transition-colors"
          >
            {copied ? (
              <>
                <FaCheck size={11} className="text-emerald-400" />
                <span className="text-[11px] text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <FaCopy size={11} />
                <span className="text-[11px]">Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      <pre className="p-4 text-xs font-mono overflow-x-auto leading-relaxed text-neutral-200 bg-neutral-900">
        <code>{code}</code>
      </pre>
    </div>
  );
}

