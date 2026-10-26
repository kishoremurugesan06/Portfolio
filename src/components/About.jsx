import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function About({ onOpenResume }) {
  const { personal, quickFacts } = portfolioData;

  const handleDownload = () => {
    // Download resume PDF
    const link = document.createElement('a');
    link.href = personal.resumePdf;
    link.download = 'Kishore_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about">
      <div className="container">
        <div className="about-head">
          <div>
            <span className="eyebrow">About</span>
            <h2 className="about-title">
              A developer who cares about <em>craft</em>.
            </h2>
          </div>
          <div className="about-availability">
            <span className="pulse"></span>
            {personal.openToWorkBadge}
          </div>
        </div>

        <div className="about-editorial">
          <div className="about-story">
            <p className="about-lead">
              I'm a dedicated Computer Science graduate who believes great software is equal parts{' '}
              <span className="hl">engineering</span> and <span className="hl">empathy</span> — built to solve real-world problems,
              not just to compile.
            </p>
            <p>
              My focus is on <strong>Java Full Stack Development, Spring Boot, and cloud architecture</strong>. I engineer
              scalable, high-performance backends and clean RESTful APIs that hold up under real production workloads while continuously refining modern responsive frontends.
            </p>
            <p>
              Hands-on experience as a <strong>Java Full Stack Developer</strong> at <strong>Techvolt Software</strong>, developing an internal CRM application that manages student internship profiles, automated payment tracking, and certification registration in an Agile environment.
            </p>
            <p>
              Proficient in <strong>Java, Spring Boot, React JS, JavaScript, MySQL, Microsoft Azure, and Bootstrap 5</strong> — driven by architectural reliability, clean code discipline, and user-centric problem solving.
            </p>

            <div className="about-sign flex items-center gap-4 flex-wrap mt-8">
              <button
                className="btn btn-primary"
                onClick={handleDownload}
                title="Download Official Resume PDF"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </button>

              <button
                className="btn btn-ghost"
                onClick={onOpenResume}
                title="Preview Resume in Modal"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 mr-1"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                Preview Document
              </button>
            </div>
          </div>

          <aside className="about-facts" aria-label="Quick facts">
            {quickFacts.map((fact, idx) => (
              <div className="fact" key={idx}>
                <span className="fact-label">{fact.label}</span>
                <span className="fact-value">
                  {fact.isEmail ? (
                    <a href={`mailto:${fact.value}`}>{fact.value}</a>
                  ) : fact.isPhone ? (
                    <a href={`tel:${fact.value.replace(/[^0-9+]/g, '')}`}>{fact.value}</a>
                  ) : (
                    fact.value
                  )}
                </span>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
