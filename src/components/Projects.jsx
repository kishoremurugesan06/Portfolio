import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Projects</span>
          <h2 className="section-title">
            Selected <em>work</em>.
          </h2>
          <p className="section-sub">
            A selection of full-stack enterprise systems, cloud applications, and digital platforms I've engineered.
          </p>
        </div>

        <div className="projects">
          {projects.map((proj) => (
            <article className="project" key={proj.id}>
              <div className="project-num">{proj.num}</div>

              <div className="project-body">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <span className="project-cat">{proj.cat}</span>
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-200/60 font-medium">
                    {proj.status}
                  </span>
                </div>

                <h3 className="project-title">{proj.title}</h3>

                <p className="project-desc">{proj.fullDesc}</p>

                {/* Key feature highlights */}
                <div className="my-4 space-y-1.5">
                  {proj.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start text-sm text-ink-2">
                      <span className="text-red-600 mr-2 font-bold leading-5">›</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="project-stack">
                  {proj.stack.map((tech, tIdx) => (
                    <span className="tag" key={tIdx}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Working Links */}
                <div className="mt-5 flex items-center gap-4 flex-wrap">
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-ink hover:text-red-600 transition-colors"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      Repository &amp; Code
                    </a>
                  )}
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-red-600 hover:text-red-700 transition-colors"
                    >
                      <span>Live Demo</span>
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
