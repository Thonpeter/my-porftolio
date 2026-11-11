import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
  readTime: string;
  tags?: string[];
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || '',
        summary: data.summary || '',
        readTime: data.readTime || '3 min read',
        tags: data.tags || [],
      } as BlogPostMeta;
    })
    .sort((a, b) => (new Date(b.date) > new Date(a.date) ? 1 : -1));

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || '',
      summary: data.summary || '',
      readTime: data.readTime || '3 min read',
      tags: data.tags || [],
      content,
    };
  } catch {
    return null;
  }
}

