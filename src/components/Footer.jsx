import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="container">
        <div className="foot-inner">
          <div>
            © 2026 · Designed &amp; built for <strong>{personal.name}</strong> · {personal.title}
          </div>
          <a href="#top" onClick={scrollToTop} className="to-top">
            ↑ Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
