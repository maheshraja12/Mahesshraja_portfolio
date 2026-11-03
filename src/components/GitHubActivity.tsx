import React, { useState, useEffect } from 'react';
import { GitFork, Star, ExternalLink, RefreshCw, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 1,
    name: 'sv-realestatehyd',
    html_url: 'https://github.com/maheshraja12/sv-realestatehyd',
    description: 'Full-stack property management web application with property listings, lead capture, and admin portal.',
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-10-20T00:00:00Z',
  },
  {
    id: 2,
    name: 'clean',
    html_url: 'https://github.com/maheshraja12/clean',
    description: 'CleanSweep automated CSV dataset cleansing, IQR outlier detection, and quality reporting engine.',
    language: 'Python',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-10-18T00:00:00Z',
  },
  {
    id: 3,
    name: 'aegis-push',
    html_url: 'https://github.com/maheshraja12/aegis-push',
    description: 'AEGIS V3 autonomous incident repair engine with AST bytecode checks, subprocess isolation, and telemetry HUD.',
    language: 'Python',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-10-15T00:00:00Z',
  },
  {
    id: 4,
    name: 'jarvis-swarm',
    html_url: 'https://github.com/maheshraja12/jarvis-swarm',
    description: 'Local-first conversational voice assistant with persistent SQLite dialogue memory and FastAPI HUD.',
    language: 'Python',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-10-10T00:00:00Z',
  },
  {
    id: 5,
    name: 'Mahesshraja_portfolio',
    html_url: 'https://github.com/maheshraja12/Mahesshraja_portfolio',
    description: 'Production-grade software engineering portfolio built with React 19, TypeScript, Vite, and Tailwind CSS.',
    language: 'TypeScript',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-11-02T00:00:00Z',
  },
];

const LANGUAGE_COLORS: Record<string, string> = {
  Python: 'bg-blue-500',
  TypeScript: 'bg-indigo-500',
  JavaScript: 'bg-amber-400',
  HTML: 'bg-orange-500',
  CSS: 'bg-purple-500',
  Java: 'bg-rose-500',
};

export const GitHubActivity: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>(FALLBACK_REPOS);
  const [loading, setLoading] = useState(false);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      // 1. Check session storage cache
      const cached = sessionStorage.getItem('gh_repos_maheshraja12');
      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setRepos(parsed);
            setIsLive(true);
            return;
          }
        } catch {
          // ignore cache error
        }
      }

      setLoading(true);
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 6000);

      try {
        const res = await fetch(
          'https://api.github.com/users/maheshraja12/repos?sort=updated&per_page=6',
          { signal: controller.signal }
        );
        clearTimeout(timeout);

        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setRepos(data);
            setIsLive(true);
            sessionStorage.setItem('gh_repos_maheshraja12', JSON.stringify(data));
          }
        }
      } catch {
        // Gracefully use verified fallback repositories
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubRepos();
  }, []);

  const formatDate = (isoStr: string) => {
    try {
      const date = new Date(isoStr);
      return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    } catch {
      return 'Recent';
    }
  };

  return (
    <section id="github" className="py-20 bg-white dark:bg-[#06080F] border-t border-[#E4EAF5] dark:border-slate-900 transition-colors scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-purple-600 dark:text-purple-400 text-xs font-bold tracking-widest uppercase block mb-2">
              OPEN SOURCE &amp; CODEBASE ACTIVITY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#11182B] dark:text-white tracking-tight">
              Public Repositories
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#475569] dark:text-slate-400 max-w-xl">
              Live data from my public GitHub repositories demonstrating practical engineering workflows, clean commits, and version control hygiene.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${isLive ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
              <span>{isLive ? 'GitHub API Connected' : 'Verified Repositories'}</span>
            </span>

            <a
              href="https://github.com/maheshraja12"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#CBD5E1] dark:border-slate-800 bg-[#F8FAFC] dark:bg-[#0D121F] hover:border-purple-500/50 hover:text-purple-600 dark:hover:text-purple-400 text-xs font-semibold text-[#11182B] dark:text-slate-200 transition-all shadow-xs"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View @maheshraja12</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </div>

        {/* Repository Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {repos.map((repo) => {
            const langColor = (repo.language && LANGUAGE_COLORS[repo.language]) || 'bg-slate-400';
            return (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#F8FAFC] dark:bg-[#0D121F] border border-[#E4EAF5] dark:border-slate-800/80 shadow-xs hover:border-purple-500/50 hover:shadow-lg dark:hover:shadow-[0_0_25px_rgba(168,85,247,0.12)] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <FolderGit2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                      <span className="font-bold text-sm text-[#11182B] dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors truncate">
                        {repo.name}
                      </span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </div>

                  <p className="text-xs text-[#475569] dark:text-slate-400 leading-relaxed line-clamp-3 mb-4">
                    {repo.description || 'Public software engineering repository.'}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E4EAF5] dark:border-slate-800/80 flex items-center justify-between text-[11px] text-[#64748B] dark:text-slate-400 font-mono">
                  <div className="flex items-center gap-3">
                    {repo.language && (
                      <span className="flex items-center gap-1.5 font-medium">
                        <span className={`w-2 h-2 rounded-full ${langColor}`} />
                        <span>{repo.language}</span>
                      </span>
                    )}

                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                        <span>{repo.stargazers_count}</span>
                      </span>
                    )}

                    {repo.forks_count > 0 && (
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3 h-3 text-slate-400" />
                        <span>{repo.forks_count}</span>
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] text-slate-400">
                    Updated {formatDate(repo.updated_at)}
                  </span>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};
