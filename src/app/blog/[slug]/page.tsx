import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ReadingProgress from '@/components/ReadingProgress';
import TableOfContents from '@/components/TableOfContents';
import CodeSnippet from '@/components/CodeSnippet';
import BlogDiscussions from '@/components/BlogDiscussions';
import ArticleShare from '@/components/ArticleShare';
import { ThemeProvider } from '@/contexts/ThemeContext';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Thon Peter Mawut`,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Extract H2 headings for Table of Contents
  const headings = post.content
    .split('\n')
    .filter((line) => line.startsWith('## '))
    .map((line) => {
      const text = line.replace('## ', '').trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      return { id, text };
    });

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 flex flex-col">
        <ReadingProgress />
        <Navigation />
        <TableOfContents items={headings} />
        <main className="flex-1 max-w-2xl w-full mx-auto px-6 pt-32 pb-24">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 mb-8 transition-colors"
          >
            ← Back to writing
          </Link>

          <header className="mb-10 pb-8 border-b border-neutral-200 dark:border-neutral-800">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight text-neutral-900 dark:text-neutral-100">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 mt-4 text-sm text-neutral-500">
              <time>{post.date}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div className="prose prose-neutral dark:prose-invert max-w-none text-neutral-800 dark:text-neutral-200 leading-relaxed space-y-4">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                const headingText = paragraph.replace('## ', '').trim();
                const headingId = headingText.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                return (
                  <h2 key={index} id={headingId} className="text-2xl font-semibold mt-8 mb-4 tracking-tight scroll-mt-24">
                    {headingText}
                  </h2>
                );
              }
              if (paragraph.startsWith('```')) {
                const lines = paragraph.split('\n');
                const lang = lines[0].replace('```', '') || 'typescript';
                const codeBody = lines.slice(1, -1).join('\n');
                return <CodeSnippet key={index} language={lang} code={codeBody} />;
              }
              if (paragraph.startsWith('1. ') || paragraph.startsWith('- ')) {
                const items = paragraph.split('\n');
                return (
                  <ul key={index} className="list-disc pl-6 space-y-2 my-4">
                    {items.map((it, idx) => (
                      <li key={idx}>{it.replace(/^[-*]|\d+\.\s*/, '')}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          <ArticleShare title={post.title} slug={post.slug} />

          <BlogDiscussions />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

