import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, education, experience, projects, certifications } = portfolioData;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = personal.resumePdf;
    link.download = 'Kishore_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Resume Preview Modal"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-line"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-line bg-[#fbfbfe]">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-red-600 inline-block animate-pulse"></span>
            <h3 className="font-display font-bold text-sm tracking-wider uppercase text-ink">
              Resume Document — {personal.name}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="px-3.5 py-1.5 rounded-lg bg-red-600 text-white hover:bg-red-700 text-xs font-mono font-medium flex items-center gap-1.5 shadow-sm transition-colors"
              title="Download PDF file"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download PDF
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-white border border-line hover:bg-gray-50 text-xs font-mono font-medium text-ink flex items-center gap-1.5 transition-colors"
              title="Print document"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
              Print
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 font-body text-ink text-sm bg-white">
          {/* Header */}
          <div className="border-b border-gray-200 pb-5 mb-5 text-center">
            <h1 className="font-display font-black text-2xl md:text-3xl tracking-tight text-ink uppercase mb-1">
              {personal.name}
            </h1>
            <div className="font-mono text-sm font-semibold text-red-600 mb-2">
              {personal.title} | {personal.secondaryTitle}
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-xs text-ink-soft">
              <span>📧 {personal.email}</span>
              <span>📞 {personal.phone}</span>
              <span>📍 {personal.location}</span>
              <span>🔗 {personal.linkedinUsername}</span>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-6">
            <h2 className="font-display font-bold text-xs uppercase tracking-widest text-red-600 border-b-2 border-red-600 pb-1 mb-2">
              Summary
            </h2>
            <p className="text-sm leading-relaxed text-ink-2">{personal.summary}</p>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <h2 className="font-display font-bold text-xs uppercase tracking-widest text-red-600 border-b-2 border-red-600 pb-1 mb-3">
              Experience
            </h2>
            {experience.map((exp) => (
              <div key={exp.id} className="mb-4">
                <div className="flex justify-between items-baseline flex-wrap">
                  <span className="font-bold text-ink text-base">{exp.role}</span>
                  <span className="text-xs font-mono font-medium text-ink-soft">{exp.period}</span>
                </div>
                <div className="text-xs font-semibold text-red-700 mb-2">{exp.company}</div>
                <ul className="list-disc list-inside space-y-1 text-xs text-ink-2">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="mb-6">
            <h2 className="font-display font-bold text-xs uppercase tracking-widest text-red-600 border-b-2 border-red-600 pb-1 mb-2">
              Skills
            </h2>
            <div className="space-y-1 text-xs text-ink-2">
              <div>
                <strong>Programming Languages:</strong> Java, JavaScript, SQL
              </div>
              <div>
                <strong>Frameworks &amp; Libraries:</strong> Spring Boot, React JS, Bootstrap 5, HTML5, CSS3
              </div>
              <div>
                <strong>Developer Tools:</strong> VS Code, Git, GitHub, Postman
              </div>
              <div>
                <strong>Databases:</strong> MySQL
              </div>
              <div>
                <strong>Cloud &amp; Methodologies:</strong> Microsoft Azure, Cloud Computing, Agile, Scrum
              </div>
              <div>
                <strong>Core Competencies:</strong> Full Stack Development, Backend Development, Responsive Web Design, Problem-Solving, Team Collaboration
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-6">
            <h2 className="font-display font-bold text-xs uppercase tracking-widest text-red-600 border-b-2 border-red-600 pb-1 mb-3">
              Projects
            </h2>
            {projects.map((proj) => (
              <div key={proj.id} className="mb-4">
                <div className="flex justify-between items-baseline flex-wrap">
                  <span className="font-bold text-ink text-sm">{proj.title}</span>
                  <span className="text-xs font-mono text-red-600">{proj.status}</span>
                </div>
                <div className="text-xs font-mono text-ink-soft mb-1">{proj.stack.join(', ')}</div>
                <ul className="list-disc list-inside space-y-1 text-xs text-ink-2">
                  {proj.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="leading-relaxed">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="font-display font-bold text-xs uppercase tracking-widest text-red-600 border-b-2 border-red-600 pb-1 mb-3">
              Education
            </h2>
            {education.map((edu) => (
              <div key={edu.id} className="mb-3">
                <div className="flex justify-between items-baseline flex-wrap">
                  <span className="font-bold text-ink text-xs">
                    {edu.degree} — {edu.stream}
                  </span>
                  <span className="text-xs font-mono font-medium text-ink-soft">
                    {edu.period} | {edu.grade}
                  </span>
                </div>
                <div className="text-xs text-ink-soft">
                  {edu.school} {edu.subSchool ? `(${edu.subSchool})` : ''}
                </div>
              </div>
            ))}
          </div>

          {/* Achievements & Certifications */}
          <div className="mb-4">
            <h2 className="font-display font-bold text-xs uppercase tracking-widest text-red-600 border-b-2 border-red-600 pb-1 mb-2">
              Achievements &amp; Certifications
            </h2>
            <ul className="list-disc list-inside space-y-1 text-xs text-ink-2">
              {certifications.map((c) => (
                <li key={c.id}>
                  <strong>{c.title}</strong> — {c.issuer} ({c.date})
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h2 className="font-display font-bold text-xs uppercase tracking-widest text-red-600 border-b-2 border-red-600 pb-1 mb-1">
              Languages
            </h2>
            <p className="text-xs text-ink-2">Tamil (Native), English (Professional)</p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-line bg-[#fbfbfe] flex justify-between items-center text-xs font-mono text-ink-soft">
          <span>Official resume of Kishore M</span>
          <button
            onClick={handleDownload}
            className="text-red-600 hover:text-red-700 font-semibold"
          >
            Download PDF File ({portfolioData.personal.resumePdf}) →
          </button>
        </div>
      </div>
    </div>
  );
}
