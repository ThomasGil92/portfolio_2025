"use client";

import { useEffect, useState } from "react";
import { FaStar, FaCodeBranch, FaGithub } from "react-icons/fa";

type GHReposProps = {
  /** GitHub username for the 'View all repositories' link */
  username?: string;
};

type Repository = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  private: boolean;
};

export function GHRepos({ username = "thomasgil92" }: GHReposProps) {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("/api/github/repos");
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const repositories = await response.json();
        setRepos(repositories);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  };

  if (loading) {
    return (
      <section
        id='gh-repos'
        className='mt-10 container mx-auto px-6 py-12 rounded-2xl border border-white/15 bg-background/20 backdrop-blur-lg shadow-2xl text-neutral-200'
      >
        <h2 className='text-3xl font-bold mb-8 text-gray-800 dark:text-white'>
          My GitHub Repositories
        </h2>
        <div className='grid md:grid-cols-3 gap-6'>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className='animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg p-6 h-48'
            ></div>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        id='gh-repos'
        className='mt-10 container mx-auto px-6 py-12 rounded-2xl border border-white/15 bg-background/20 backdrop-blur-lg shadow-2xl text-neutral-200'
      >
        <h2 className='text-3xl font-bold mb-8 text-gray-800 dark:text-white'>
          My GitHub Repositories
        </h2>
        <div className='text-red-500'>{error}</div>
      </section>
    );
  }

  return (
    <section
      id='gh-repos'
      className='container mx-auto mt-10 px-6 py-10 rounded-2xl border border-white/15 bg-background/20 backdrop-blur-lg shadow-2xl text-neutral-200'
    >
      <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-12 text-center'>
        <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white'>
          My GitHub Repositories
        </h2>
        <p className='mx-auto mt-4 max-w-2xl text-neutral-300'>
          Check out my latest open-source projects and contributions on GitHub
        </p>
        <a
          href={`https://github.com/${username}`}
          target='_blank'
          rel='noopener noreferrer'
          className='mt-6 inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-700 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-200'
        >
          <FaGithub className='mr-2' />
          View all repositories
        </a>
      </div>

      <div className='grid md:grid-cols-1 gap-6'>
        {repos.map((repo) => (
          <div
            key={repo.id}
            className='bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow duration-300'
          >
            <div className='flex items-center justify-between mb-4'>
              <a
                href={repo.html_url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-xl font-semibold text-blue-600 hover:underline dark:text-blue-400 break-words'
              >
                {repo.name}
              </a>
              <span className='text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300'>
                {repo.private ? "Private" : "Public"}
              </span>
            </div>

            {repo.description && (
              <p className='text-neutral-400 mb-4 line-clamp-2'>
                {repo.description}
              </p>
            )}

            <div className='flex items-center text-sm text-neutral-400 space-x-4'>
              {repo.language && (
                <div className='flex items-center'>
                  <span className='w-3 h-3 rounded-full bg-blue-500 mr-1'></span>
                  {repo.language}
                </div>
              )}
              <div className='flex items-center'>
                <FaStar className='mr-1' />
                {repo.stargazers_count.toLocaleString()}
              </div>
              <div className='flex items-center'>
                <FaCodeBranch className='mr-1' />
                {repo.forks_count.toLocaleString()}
              </div>
            </div>

            <div className='mt-4 text-xs text-neutral-400'>
              Updated on {formatDate(repo.updated_at)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
