import { getAllPosts } from '@/lib/posts';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlogList from '@/components/BlogList';
import { ThemeProvider } from '@/contexts/ThemeContext';

export const metadata = {
  title: 'Writing & Lectures | Thon Peter Mawut',
  description: 'Notes on software engineering, teaching computer science, and building reliable systems.',
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 flex flex-col">
        <Navigation />
        <main className="flex-1 max-w-3xl w-full mx-auto px-6 pt-32 pb-20">
          <header className="mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-orange-600 dark:text-orange-400 font-medium">
              Publications & Course Notes
            </span>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mt-1">
              Writing & Discussions
            </h1>
            <p className="mt-3 text-neutral-600 dark:text-neutral-400 text-base leading-relaxed">
              Explorations on software architecture, curriculum design, and computing principles. Open for commentary and classroom questions.
            </p>
          </header>

          <BlogList initialPosts={posts} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
