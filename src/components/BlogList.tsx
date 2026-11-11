'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { BlogPostMeta } from '@/lib/posts';
import { FaSearch, FaTimes } from 'react-icons/fa';

interface BlogListProps {
  initialPosts: BlogPostMeta[];
}

export default function BlogList({ initialPosts }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract unique tags and count
  const allTags = useMemo(() => {
    const counts: { [key: string]: number } = {};
    initialPosts.forEach((post) => {
      post.tags?.forEach((t) => {
        counts[t] = (counts[t] || 0) + 1;
      });
    });
    return counts;
  }, [initialPosts]);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTag = selectedTag ? post.tags?.includes(selectedTag) : true;

      return matchesSearch && matchesTag;
    });
  }, [initialPosts, searchQuery, selectedTag]);

  return (
    <div className="space-y-8">
      {/* Search and Tag filter controls */}
      <div className="space-y-4">
        <div className="relative">
          <FaSearch className="absolute left-3.5 top-3.5 text-neutral-400" size={13} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles by title, concept, or tag..."
            className="w-full pl-9 pr-10 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-3.5 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
            >
              <FaTimes size={13} />
            </button>
          )}
        </div>

        {/* Tag pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors ${
              selectedTag === null
                ? 'bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900 font-medium'
                : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
            }`}
          >
            All ({initialPosts.length})
          </button>
          {Object.entries(allTags).map(([tag, count]) => {
            const isSelected = selectedTag === tag;
            return (
              <button
                key={tag}
                onClick={() => setSelectedTag(isSelected ? null : tag)}
                className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors ${
                  isSelected
                    ? 'bg-orange-500 text-white font-medium'
                    : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
                }`}
              >
                #{tag} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Filtered list output */}
      <div className="divide-y divide-neutral-200 dark:divide-neutral-800 pt-2">
        {filteredPosts.length === 0 ? (
          <div className="py-12 text-center text-sm text-neutral-500 space-y-2">
            <p>No articles match your search query.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTag(null);
              }}
              className="text-xs font-mono text-orange-600 dark:text-orange-400 underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          filteredPosts.map((post) => (
            <article key={post.slug} className="py-8 group">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <h2 className="text-xl font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    {post.title}
                  </h2>
                  <time className="text-xs font-mono text-neutral-400 shrink-0 tabular-nums">
                    {post.date}
                  </time>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed mb-4">
                  {post.summary}
                </p>
                <div className="flex items-center gap-3 text-xs font-mono text-neutral-500">
                  <span>{post.readTime}</span>
                  <span className="text-neutral-300 dark:text-neutral-700">·</span>
                  <div className="flex gap-1.5">
                    {post.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-neutral-500 dark:text-neutral-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </article>
          ))
        )}
      </div>
    </div>
  );
}

