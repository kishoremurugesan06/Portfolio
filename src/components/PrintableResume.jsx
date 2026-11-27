import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function PrintableResume() {
  const { personal, education, experience, projects, certifications } = portfolioData;

  return (
    <div id="resume-doc" aria-hidden="true">
      <h1>{personal.name}</h1>
      <div className="r-role">{personal.title} | {personal.secondaryTitle}</div>
      <div className="r-contact">
        <span>Phone: {personal.phone}</span>
        <span>Email: {personal.email}</span>
        <span>Location: {personal.location}</span>
        <span>LinkedIn: {personal.linkedinUsername}</span>
      </div>

      <h2>Career Objective</h2>
      <p>{personal.summary}</p>

      <h2>Skills</h2>
      <p>
        <strong>Languages:</strong> Java, JavaScript, SQL &nbsp;|&nbsp;
        <strong>Frameworks:</strong> Spring Boot, Bootstrap 5, HTML5, CSS3 &nbsp;|&nbsp;
        <strong>Databases:</strong> MySQL &nbsp;|&nbsp;
        <strong>Tools &amp; Cloud:</strong> VS Code, Git, GitHub, Postman, Microsoft Azure, Cloud Computing &nbsp;|&nbsp;
        <strong>Methodologies:</strong> Agile, Scrum, Full Stack Development, RESTful APIs
      </p>

      <h2>Work Experience</h2>
      {experience.map((exp) => (
        <div key={exp.id}>
          <div className="r-job-head">
            <span>{exp.company} — {exp.role}</span>
            <span>{exp.period}</span>
          </div>
          <div className="r-job-sub">{exp.subTitle}</div>
          <ul>
            {exp.bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}

      <h2>Projects</h2>
      {projects.map((proj) => (
        <div key={proj.id} style={{ marginBottom: '10px' }}>
          <div className="r-job-head">
            <span>{proj.title}</span>
            <span>{proj.status}</span>
          </div>
          <div className="r-job-sub">Technologies: {proj.stack.join(', ')}</div>
          <ul>
            {proj.highlights.map((h, idx) => (
              <li key={idx}>{h}</li>
            ))}
          </ul>
        </div>
      ))}

      <h2>Education</h2>
      {education.map((edu) => (
        <div key={edu.id} style={{ marginBottom: '8px' }}>
          <div className="r-job-head">
            <span>{edu.degree} — {edu.stream}</span>
            <span>{edu.period} | {edu.grade}</span>
          </div>
          <div className="r-job-sub">{edu.school} {edu.subSchool ? `(${edu.subSchool})` : ''}</div>
        </div>
      ))}

      <h2>Achievements &amp; Certifications</h2>
      <ul>
        {certifications.map((c) => (
          <li key={c.id}>
            <strong>{c.title}</strong> — {c.issuer} ({c.date})
          </li>
        ))}
      </ul>

      <h2>Languages</h2>
      <p>Tamil (Native), English (Professional)</p>
    </div>
  );
}
