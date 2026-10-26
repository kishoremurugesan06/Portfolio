import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  const getIcon = (id) => {
    if (id === 'eng') {
      return (
        <svg viewBox="0 0 24 24">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      );
    }
    if (id === 'hsc') {
      return (
        <svg viewBox="0 0 24 24">
          <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
          <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    );
  };

  return (
    <section id="education" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Education</span>
          <h2 className="section-title">
            Academic <em>background</em>.
          </h2>
        </div>

        <div className="edu-grid">
          {education.map((item) => (
            <div className="edu" key={item.id}>
              <div className="edu-icon">{getIcon(item.id)}</div>
              
              <div className="edu-meta flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
                <span className="badge">{item.status}</span>
                <span className="whitespace-nowrap font-mono text-[0.66rem]">{item.period} · {item.grade}</span>
              </div>

              <div className="edu-degree">{item.degree}</div>
              <div className="edu-stream">{item.stream}</div>

              <div className="edu-school">
                <div className="n">{item.school}</div>
                <div className="s">{item.subSchool}</div>
              </div>

              <div className="edu-desc">{item.desc}</div>

              <div className="edu-tags">
                {item.tags.map((tag, tIdx) => (
                  <span className="tag" key={tIdx}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
