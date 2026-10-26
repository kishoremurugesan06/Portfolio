import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skillsMarquee } = portfolioData;

  // Duplicate items for continuous seamless loop
  const r1Items = [...skillsMarquee.row1, ...skillsMarquee.row1];
  const r2Items = [...skillsMarquee.row2, ...skillsMarquee.row2];

  return (
    <section id="skills">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Skills</span>
          <h2 className="section-title">
            Technical <em>arsenal</em>.
          </h2>
          <p className="section-sub">
            The tools, frameworks, and languages I use to design, build, and ship modern software.
          </p>
        </div>
      </div>

      {/* Marquee Row 1 */}
      <div className="marquee-wrap">
        <div className="marquee-row r1">
          {r1Items.map((item, idx) => (
            <span className="pill" key={`r1-${idx}`}>
              <span className="em">{item.icon}</span> {item.name}
            </span>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 */}
      <div className="marquee-wrap">
        <div className="marquee-row r2">
          {r2Items.map((item, idx) => (
            <span className="pill" key={`r2-${idx}`}>
              <span className="em">{item.icon}</span> {item.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
