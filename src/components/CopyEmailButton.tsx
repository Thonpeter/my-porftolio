'use client';

import { useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';

interface CopyEmailButtonProps {
  email?: string;
  className?: string;
}

export default function CopyEmailButton({
  email = 'thonawangjr@gmail.com',
  className = '',
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      aria-label="Copy email address"
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-xs font-mono text-neutral-700 dark:text-neutral-300 transition-colors ${className}`}
    >
      {copied ? (
        <>
          <FaCheck className="text-emerald-500" size={11} />
          <span className="text-emerald-600 dark:text-emerald-400">Copied to clipboard</span>
        </>
      ) : (
        <>
          <FaCopy className="text-neutral-400" size={11} />
          <span>{email}</span>
        </>
      )}
    </button>
  );
}

