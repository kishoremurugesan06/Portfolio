import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">
            Where I've <em>shipped</em>.
          </h2>
        </div>

        <div className="exp-timeline">
          <div className="exp-rail">
            <span
              className="exp-rail-fill"
              id="expRailFill"
              style={{ transform: 'scaleY(1)' }}
            />
          </div>
          <div className="exp-dot" />

          {experience.map((exp) => (
            <div className="exp-card" key={exp.id}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2">
                <div className="exp-role">{exp.role}</div>
                <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-red-50 text-red-600 font-semibold border border-red-200/60 inline-block w-fit">
                  {exp.period}
                </span>
              </div>

              <div className="exp-company">
                <strong>{exp.company}</strong> — {exp.subTitle}
              </div>

              <ul className="exp-list">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>

              <div className="mt-5 pt-4 border-t border-[rgba(10,10,20,0.06)] flex flex-wrap gap-2">
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-xs px-2.5 py-1 rounded bg-[#ededf0] text-ink-2 font-medium"
                  >
                    {tech}
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
