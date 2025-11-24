import { NextResponse } from 'next/server';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  languages_url: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  created_at: string;
  updated_at: string;
}

export async function GET() {
  try {
    const username = 'Thonpeter';
    
    // Fetch user repositories
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
          }),
        },
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!reposResponse.ok) {
      throw new Error('Failed to fetch repositories');
    }

    const repos: GitHubRepo[] = await reposResponse.json();

    // Filter out forks and archived repos, and get top projects
    const filteredRepos = repos
      .filter((repo) => !repo.name.includes('fork') && !repo.name.includes('archived'))
      .filter((repo) => repo.description) // Only repos with descriptions
      .slice(0, 6) // Get top 6 most recently updated
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        title: repo.name
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' '),
        description: repo.description || 'No description available',
        github: repo.html_url,
        demo: repo.homepage || repo.html_url,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        topics: repo.topics || [],
        updatedAt: repo.updated_at,
      }));

    return NextResponse.json({ repos: filteredRepos });
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch repositories' },
      { status: 500 }
    );
  }
}

