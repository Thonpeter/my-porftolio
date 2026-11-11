'use client';

import { useState } from 'react';
import { FaLink, FaCheck, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface ArticleShareProps {
  title: string;
  slug: string;
}

export default function ArticleShare({ title, slug }: ArticleShareProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const url = typeof window !== 'undefined' ? window.location.href : `https://thonpeter.dev/blog/${slug}`;
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const currentUrl = typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '';
  const encodedTitle = encodeURIComponent(`"${title}" by Thon Peter Mawut`);

  return (
    <div className="my-10 pt-6 pb-6 border-y border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono">
      <div className="text-neutral-500">
        <span>Found this useful for your studies or engineering?</span>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={handleCopy}
          aria-label="Copy article link"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors"
        >
          {copied ? (
            <>
              <FaCheck className="text-emerald-500" size={11} />
              <span className="text-emerald-600 dark:text-emerald-400">Link Copied</span>
            </>
          ) : (
            <>
              <FaLink className="text-neutral-400" size={11} />
              <span>Copy Link</span>
            </>
          )}
        </button>

        <a
          href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${currentUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          title="Share on X / Twitter"
        >
          <FaTwitter size={13} />
        </a>

        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          title="Share on LinkedIn"
        >
          <FaLinkedin size={13} />
        </a>
      </div>
    </div>
  );
}

